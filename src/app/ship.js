class Ship {
  // size = 0;
  constructor(size) {
    this.size = size;
    this.name = this.#assignShip();
  }

  sunk = false;
  hits = 0;

  // getSize() {
  //   return this.size;
  // }

  hit() {
    this.hits += 1;
    return this.hits;
  }

  isSunk() {
    if (this.hits >= this.size) this.sunk = true;
    return this.sunk;
  }

  #assignShip() {
    switch (this.size) {
      case 2:
        return "destroyer";
      // break;

      case 3:
        return "submarine";
      // break;

      case 4:
        return "battleship";
      // break;

      case 5:
        return "carrier";
      // break;
      default:
        return "cruiser";
    }
  }
}

export { Ship };
