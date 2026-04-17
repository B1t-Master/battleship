import { Ship } from "./ship";
class Gameboard {
  constructor(name) {
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
      new Array(10),
    ];
    this.name = name;
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
    // console.log(coordinates);
    let cell = this.board[coordinates[0]][coordinates[1]];
    // console.log(cell);
    // console.log(coordinates);
    if (!cell) {
      this.missedAttacks++;
      return (this.board[coordinates[0]][coordinates[1]] = "missed");
    }
    const targetShip = this.#findShip(cell);
    // console.log(targetShip);
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
    const requiredHits = this.shipyard.reduce(
      (acc, curr) => acc + curr.size,
      0,
    );
    if (requiredHits === this.actualHits) return true;
    else return false;
  }
}

export { Gameboard };
