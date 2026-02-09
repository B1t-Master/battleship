class Ship {
  constructor(size) {
    this.size = size;
    this.hits = 0;
    this.sunk = false;
    this.name = this.#assignShip();
  }

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
        this.name = "destroyer";
        break;

      case 3:
        this.name = "submarine";
        break;

      case 4:
        this.name = "battleship";
        break;

      case 5:
        this.name = "carrier";
        break;
      default:
        return (this.name = "cruiser");
    }
  }
}

export { Ship };
