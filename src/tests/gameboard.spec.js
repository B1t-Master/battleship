import { Ship } from "../app-logic/ship";
import { Gameboard } from "../app-logic/gameboard";

let gameboard;
jest.mock("../app-logic/ship");

beforeEach(() => {
  jest.clearAllMocks();
  gameboard = new Gameboard();
});

test("Able to place ship at coordinate", () => {
  gameboard.placeShip(3, [
    [0, 6],
    [0, 7],
    [0, 8],
  ]);
  expect(Ship).toHaveBeenCalled();
  expect(gameboard.board[0][6]).toBeTruthy();
  expect(gameboard.board[0][7]).toBeTruthy();
  expect(gameboard.board[0][8]).toBeTruthy();

  gameboard.placeShip(2, [
    [2, 2],
    [2, 3],
  ]);
  expect(Ship).toHaveBeenCalled();
  expect(gameboard.board[2][2]).toBeTruthy();
  expect(gameboard.board[2][3]).toBeTruthy();
});

test("Selected ship is able to recieve an attack", () => {
  gameboard.placeShip(2, [
    [2, 2],
    [2, 3],
  ]);
  gameboard.recieveAttack([2, 2]);
  expect(gameboard.board[2][2]).toBe("hit");
});

test("Keep track of missed attacks and display them", () => {});

test("Selected ship is able to recieve an attack", () => {});

test("Report whether ship has been sunk", () => {});
