class Ship {
  constructor(size) {
    this.size = size;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits += 1;
    return this.hits;
  }

  isSunk() {
    if (this.hits >= this.size) this.sunk = true;
    return this.sunk;
  }
}

export { Ship };
