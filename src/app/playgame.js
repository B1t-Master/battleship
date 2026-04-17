import renderLayout from "./UI/layout";
import { drawBoard } from "./UI/layout";

// randomize orientation either horizontal or vertical
// loop from numbers 2,3,4,5
// if vertical y+1
// if horizontal x+1
// till size is matched (i)
// return an array of those coordinates

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function placeShipRandomly(player) {
  // can probably do this recursively might be better
  const ships = [2, 3, 4, 5];
  for (let i = 0; i < ships.length; i++) {
    const orientation = getRandomInt(1, 2);
    // console.log(orientation);
    let offset = 10 - ships[i];
    const startingPoint = getRandomInt(0, offset);
    let warehouse = [];
    for (let j = 0; j < ships[i]; j++) {
      //could use a switchcase

      if (orientation === 1) {
        warehouse.push([startingPoint, startingPoint + j]);
      }
      if (orientation === 2) {
        warehouse.push([startingPoint + j, startingPoint]);
      }
    }
    // console.log(warehouse);

    player.gameboard.placeShip(i, warehouse);
    // console.log(player.gameboard);
  }
}

function createGame(player1, player2) {
  placeShipRandomly(player1);
  // placeShipRandomly(player2);

  // console.log(player1.gameboard);
  // placeShip(player)
  // player2.gameboard.placeShip(2, [
  //   [2, 2],
  //   [2, 3],
  // ]);

  // player1.gameboard.placeShip(2, [
  //   [2, 2],
  //   [2, 3],
  // ]);

  // player1.gameboard.placeShip(3, [
  //   [4, 2],
  //   [4, 3],
  //   [4, 4],
  // ]);

  // player1.gameboard.placeShip(5, [
  //   [5, 6],
  //   [6, 6],
  //   [7, 6],
  //   [8, 6],
  //   [9, 6],
  // ]);

  renderLayout(player1, player2);
  drawBoard(player2.gameboard);
  drawBoard(player1.gameboard);
}
function getComputerChoice() {
  let computerChoice = Math.round(Math.random(1) * 99);
  if (computerChoice < 11) {
    computerChoice = "0" + computerChoice.toPrecision(1);
  }
  return computerChoice;
}
function playerTurn(player, computer, playerChoice) {
  // const x = playerChoice[0];
  // const y = playerChoice[1];
  // checkGameStatus(player, computer);
  if (isGameOver(player, computer)) {
    computer.gameboard.recieveAttack(playerChoice);
    console.log(playerChoice);
    drawBoard(computer.gameboard, false);
  }
}
function isGameOver(player, computer) {
  if (!player.gameboard.isGameOver() && !computer.gameboard.isGameOver()) {
    return true;
  }
  // checkGameWinner(player, computer);
}
function checkGameWinner(player, computer) {
  if (player.gameboard.isGameOver()) {
    return alert("Computer wins");
  } else if (computer.gameboard.isGameOver()) {
    return alert("Player wins");
  }
}

function computerTurn(player, computer, inValidChoices) {
  if (isGameOver(player, computer)) {
    let computerChoice = getComputerChoice();
    while (inValidChoices.has(computerChoice)) {
      computerChoice = getComputerChoice();
    }
    // console.log(computerChoice);
    // console.log(inValidChoices);

    inValidChoices.set(computerChoice);
    computerChoice = computerChoice.toString();
    player.gameboard.recieveAttack(computerChoice);
    drawBoard(player.gameboard, false);
  }
}

export { createGame, computerTurn, playerTurn, checkGameWinner };
