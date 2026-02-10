import { Ship } from "./ship";
class Gameboard {
  constructor() {
    this.board = [
      new Array(10),
      new Array(10),
      new Array(10),
      new Array(10),
      new Array(10),
      new Array(10),
      new Array(10),
      new Array(10),
      new Array(10),
    ];
    this.shipyard = [];
    this.actualHits = 0;
    this.missedAttacks = 0;
  }

  placeShip(shipSize, coordinates) {
    const ship = new Ship(shipSize);
    this.shipyard.push(ship);
    coordinates.forEach((cell) => {
      this.board[cell[0]][cell[1]] = ship.name;
    });
  }

  recieveAttack(coordinates) {
    let cell = this.board[coordinates[0]][coordinates[1]];
    if (!cell) return this.missedAttacks++;
    const targetShip = this.#findShip(cell);
    targetShip.hit();
    targetShip.isSunk();
    // return (this.board[2][2] = "hit");
    this.actualHits++;
    this.board[coordinates[0]][coordinates[1]] = "hit";
  }

  #findShip(shipName) {
    return this.shipyard.find((elem) => elem.name === shipName);
  }

  isGameOver() {
    const totalHits = this.shipyard.reduce((acc, curr) => acc + curr.size, 0);
    // console.log(totalHits);
    console.log(this.shipyard[0].size);
    // console.log(this.actualHits);

    if (totalHits === this.actualHits) return true;
    else return false;
  }
}

export { Gameboard };
