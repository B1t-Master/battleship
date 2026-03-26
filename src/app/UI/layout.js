import makeTileClickable from "./events";

// const gameboard1 = document.querySelector(`#player`);

function createCells(player) {
  let gameboard = document.getElementById(`${player.type}`);
  let name = player.type;
  // i = x cords
  // j = y cords
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      // cell.classList.add(`${gameboard}`);

      cell.id = `${name}${i}${j}`;
      // cell.classList.add(`${j}`);

      gameboard.appendChild(cell);
    }
  }
}

export function drawBoard(gameboard) {
  // console.log(gameboard);

  const name = gameboard.name;
  gameboard = gameboard.board;
  for (let i = 0; i < gameboard.length; i++) {
    for (let j = 0; j < gameboard[i].length; j++) {
      if (gameboard[i][j]) {
        // console.log(gameboard[i][j]);
        let shipIcon = document.createElement("div");
        shipIcon.classList.add("ship");
        let cell = document.getElementById(`${name}${i}${j}`);
        cell.appendChild(shipIcon);
        console.log(cell.id);

        if (name === "computer") {
          shipIcon.classList.add("unseen");
          continue;
        }
        shipIcon.classList.add("ship-unhit");

        // console.log(cell);
        // console.log(shipIcon);
      }
    }
  }
}

export default function renderLayout(player, computer) {
  createCells(player);
  createCells(computer);

  makeTileClickable();
}
// let cell = document.createElement("div");
// cell.classList.add("cell");

// gameboard1.appendChild(cell);
