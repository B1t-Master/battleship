import renderLayout from "./UI/layout";
import { drawBoard } from "./UI/layout";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function placeShipRandomly(player) {
  const ships = [2, 3, 4, 5];
  const coordinates = new Map();
  for (let i = 0; i < ships.length; i++) {
    const orientation = getRandomInt(1, 2);
    let offset = 10 - ships[i];
    const startingPoint = getRandomInt(0, offset);
    let warehouse = [];
    let coordinate;
    for (let j = 0; j < ships[i]; j++) {
      if (orientation === 1) {
        coordinate = [startingPoint, startingPoint + j];
        let coordinateKey = coordinate.toString();
        if (coordinates.has(coordinateKey)) {
          ships.push(ships[i]);
          break;
        }
        coordinates.set(coordinateKey);
        warehouse.push(coordinate);
      }
      if (orientation === 2) {
        coordinate = [startingPoint + j, startingPoint];
        let coordinateKey = coordinate.toString();

        if (coordinates.has(coordinateKey)) {
          ships.push(ships[i]);
          warehouse.splice(-j);
          break;
        }
        coordinates.set(coordinateKey);

        warehouse.push(coordinate);
      }
    }
    if (warehouse.length === ships[i]) {
      player.gameboard.placeShip(ships[i], warehouse);
    }
  }
  console.log(player.gameboard);
}

function createGame(player1, player2) {
  placeShipRandomly(player1);
  placeShipRandomly(player2);
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
  if (isGameOver(player, computer)) {
    computer.gameboard.recieveAttack(playerChoice);
    drawBoard(computer.gameboard, false);
  }
}
function isGameOver(player, computer) {
  if (!player.gameboard.isGameOver() && !computer.gameboard.isGameOver()) {
    return true;
  }
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
    inValidChoices.set(computerChoice);
    computerChoice = computerChoice.toString();
    player.gameboard.recieveAttack(computerChoice);
    drawBoard(player.gameboard, false);
  }
}

export {
  createGame,
  computerTurn,
  playerTurn,
  checkGameWinner,
  placeShipRandomly,
};
