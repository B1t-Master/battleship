import { computerTurn, playerTurn, checkGameWinner } from "../playgame";
import { player, computer, inValidChoices } from "../barrel";
export default function addShipEvents() {
  let computerGameboard = document.querySelector(".gameboard-2");
  // function changeColor(e) {
  //   let tile = e.target;
  //   // console.log(tile);
  //   // tile.classList.toggle("ship");
  //   // if (tile.classList)
  //   if (tile.classList.contains("unseen")) {
  //     //   tile.classList.toggle("ship-unhit");
  //     tile.classList.toggle("unseen");
  //     // tile.removeEventListener("click", changeColor);
  //     tile.classList.toggle("ship-hit");
  //   }
  // }
  // computerGameboard.addEventListener("click", changeColor);
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
