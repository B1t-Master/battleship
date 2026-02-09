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
  }

  placeShip(shipSize, coordinates) {
    const ship = new Ship(shipSize);
    this.shipyard.push(ship);
    coordinates.forEach((cell) => {
      this.board[cell[0]][cell[1]] = ship.name;
    });
  }

  recieveAttack(coordinates) {
    if (!this.board) return "miss";
    const targetShip = this.#findShip(this.board[coordinates]);
    targetShip.hit();
    targetShip.isSunk();
    return (this.board[coordinates] = "hit");
  }

  #findShip(shipName) {
    return this.shipyard.find((elem) => elem.name === shipName);
  }
}

export { Gameboard };
