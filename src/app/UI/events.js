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
const randomizeButton = document.querySelector("#place-ships");
function randomizeShips() {
  player.gameboard = new Gameboard("player");
  placeShipRandomly(player);
  createCells(player);
  drawBoard(player.gameboard);
}

export default function addEvents() {
  let computerGameboard = document.querySelector(".gameboard-2");
  randomizeButton.addEventListener("click", randomizeShips);
  randomizeShips();
  restartGame();
  computerGameboard.addEventListener("click", () => {
    computerTurn(player, computer, inValidChoices);
    randomizeButton.removeEventListener("click", randomizeShips);
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
