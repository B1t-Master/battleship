import {
  computerTurn,
  playerTurn,
  checkGameWinner,
  placeShipRandomly,
} from "../playgame";
import { player, computer, inValidChoices } from "../barrel";
import { createCells, drawBoard } from "./layout";
import { Gameboard } from "../gameboard";
function restartGame() {
  const restartButton = document.querySelector("#restart");
  restartButton.addEventListener("click", () => {
    window.location.reload();
  });
}
function randomizeShips() {
  const randomizeButton = document.querySelector("#place-ships");

  randomizeButton.addEventListener("click", () => {
    player.gameboard = new Gameboard("player");
    placeShipRandomly(player);
    createCells(player);
    drawBoard(player.gameboard);
  });
}
export default function addEvents() {
  let computerGameboard = document.querySelector(".gameboard-2");
  randomizeShips();
  restartGame();
  computerGameboard.addEventListener("click", () => {
    computerTurn(player, computer, inValidChoices);
  });
  computerGameboard.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("ship-hit") ||
      e.target.classList.contains("missed")
    ) {
      alert("you hit the same square, you'll let the enemy win");
      return e.stopPropagation();
    }
    playerTurn(player, computer, e.target.id.slice(-2));
  });
  computerGameboard.addEventListener("click", () => {
    checkGameWinner(player, computer);
  });
}
