import { Ship } from "../app-logic/ship";

const testShip = new Ship(1);

test("Check whether a ship object can be hit", () => {
  expect(testShip.hit()).toBe(1);
});

test("Check whether a ship object can been sunk", () => {
  const testShip2 = new Ship(3);
  expect(testShip.isSunk()).toBe(true);
  expect(testShip2.isSunk()).toBe(false);
});
