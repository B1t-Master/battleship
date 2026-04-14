import renderLayout from "./UI/layout";
import { drawBoard } from "./UI/layout";

export function playGame(player, computer) {
  //   let playerTurn = true;
  //   let computerTurn = false;
  renderLayout(player, computer);
  drawBoard(computer.gameboard);
  drawBoard(player.gameboard);

  while (!player.isGameOver() && !computer.isGameOver()) {
    let validChoices = new Set();
    let computerChoice = Math.random(1) * 10;
    while (validChoices.has(computerChoice)) {
      computerChoice.Math.random();
    }
  }
  if (player.isGameOver()) {
    return alert("Computer wins");
  }
  if (computer.isGameOver()) {
    return alert("Computer wins");
  }
}

// computer to check if tile has already been hit, if not place ship the humans turn
// further along if its a successful hit place another ship
