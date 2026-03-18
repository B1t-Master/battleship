export default function loadBoards() {
  const gameboard1 = document.querySelector(".gameboard-1");
  const gameboard2 = document.querySelector(".gameboard-2");

  function createCells(gameboard) {
    for (let i = 1; i <= 100; i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      gameboard.appendChild(cell);
    }
  }
  createCells(gameboard1);
  createCells(gameboard2);
}
// let cell = document.createElement("div");
// cell.classList.add("cell");

// gameboard1.appendChild(cell);
