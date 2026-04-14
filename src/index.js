import styles from "./styles.css";

import { Player } from "./app/player";
import { playGame } from "./app/playgame";

let computer = new Player("computer");
let player = new Player("player");

computer.gameboard.placeShip(2, [
  [2, 2],
  [2, 3],
]);

player.gameboard.placeShip(2, [
  [2, 2],
  [2, 3],
]);

player.gameboard.placeShip(3, [
  [4, 2],
  [4, 3],
  [4, 4],
]);

player.gameboard.placeShip(5, [
  [5, 6],
  [6, 6],
  [7, 6],
  [8, 6],
  [9, 6],
]);
// console.log(player.gameboard);
// playGame(player, computer);

// let computerGameboard = document.querySelector(".gameboard-2");

// computerGameboard.addEventListener("click", () => {});
