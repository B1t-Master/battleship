export default function makeTileClickable() {
  let computerGameboard = document.querySelector(".gameboard-2");
  function changeColor(e) {
    let tile = e.target;
    console.log(tile);
    // tile.classList.toggle("ship");
    // if (tile.classList)
    if (tile.classList.contains("unseen")) {
      //   tile.classList.toggle("ship-unhit");
      tile.classList.toggle("unseen");

      // tile.removeEventListener("click", changeColor);
      tile.classList.toggle("ship-hit");
    }
  }
  computerGameboard.addEventListener("click", changeColor);
}

/*every time i click i want the specific ship to be called in the isSunk function and 
the ship tile to turn red 
the ships on the computer side should also be invisible at first
*/
