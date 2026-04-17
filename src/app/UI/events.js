import {
  computerTurn,
  playerTurn,
  checkGameWinner,
  placeShipRandomly,
} from "../playgame";
import { player, computer, inValidChoices } from "../barrel";
import { createCells, drawBoard } from "./layout";
import { Gameboard } from "../gameboard";
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
  computerGameboard.addEventListener("click", () => {
    computerTurn(player, computer, inValidChoices);
  });
  computerGameboard.addEventListener("click", (e) => {
    playerTurn(player, computer, e.target.id.slice(-2));
  });
  computerGameboard.addEventListener("click", () => {
    checkGameWinner(player, computer);
  });
}
