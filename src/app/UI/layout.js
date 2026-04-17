import addShipEvents from "./events";

function createCells(player) {
  let virtualGameboard = document.getElementById(`${player.type}`);
  let name = player.type;
  const board = player.gameboard.board;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");

      cell.id = `${name}${i}${j}`;

      virtualGameboard.appendChild(cell);
    }
  }
}

export function drawBoard(gameboard, intialRender = true) {
  const name = gameboard.name;
  gameboard = gameboard.board;
  for (let i = 0; i < gameboard.length; i++) {
    for (let j = 0; j < gameboard[i].length; j++) {
      if (gameboard[i][j]) {
        let shipIcon = document.createElement("div");
        shipIcon.classList.add("ship");
        let cell = document.getElementById(`${name}${i}${j}`);
        shipIcon.id = `${i}` + `${j}`;
        // console.log(shipIcon.id);
        cell.innerHTML = "";
        cell.appendChild(shipIcon);
        // console.log(cell.id);
        if (gameboard[i][j] === "missed") {
          shipIcon.classList.remove("unseen");
          shipIcon.classList.add("missed");
        }
        if (gameboard[i][j] === "hit") {
          shipIcon.classList.add("ship-hit");
          shipIcon.classList.remove("ship-unhit");
          shipIcon.classList.remove("unseen");
        }
        if (intialRender === true && name === "computer") {
          shipIcon.classList.add("unseen");
          continue;
        }
        if (name === "player") {
          shipIcon.classList.add("ship-unhit");
        }
      }
    }
  }
}

export default function renderLayout(player, computer) {
  createCells(player);
  createCells(computer);
  addShipEvents();
}
