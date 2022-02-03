import { Gameboard } from '../js/gameboard';

test('ship is placed correctly', () => {
  const gb = Gameboard.create();
  expect(gb.placeShip(1, 1, 4)).toBe(true);
  expect(gb.board[1][1]).not.toBe(0);
  expect(gb.board[1][2]).not.toBe(0);
  console.log(gb.board);
  expect(gb.board[2][1]).toBe(0);
});

test('cannot place ship outside of gameboard bounds', () => {
  const gb = Gameboard.create();
  expect(gb.placeShip(11, 11, 3)).toBe(false);
  expect(gb.placeShip(8, 8, 5)).toBe(false);
});

test('receive attack miss', () => {
  expect(Gameboard.create().receiveAttack(1, 1)).toBe(false);
});

test('receive attack w/ successful hit', () => {
  const gb = Gameboard.create();
  gb.placeShip(1, 1, 3);
  expect(gb.receiveAttack(1, 2)).toBe(true);
});

test('cannot receive attack outside of gameboard bounds', () => {
  expect(Gameboard.create().receiveAttack(11, 11)).toBe(false);
});

test('keeps track of missed attacks', () => {
  const gb = Gameboard.create();
  gb.receiveAttack(4, 4);
  expect(gb.missedAttacks()).toContainEqual({ x: 4, y: 4 });
});

test('missed attacks does not contain any hits', () => {
  const gb = Gameboard.create();
  gb.placeShip(1, 1, 3);
  gb.receiveAttack(1, 1);
  expect(gb.missedAttacks()).not.toContainEqual({ x: 1, y: 1 });
});

test('all ships sunk', () => {
  const gb = Gameboard.create();
  gb.placeShip(1, 1, 3);
  gb.receiveAttack(1, 1);
  gb.receiveAttack(1, 2);
  gb.receiveAttack(1, 3);
  expect(gb.allShipsSunk()).toBe(true);
});

test('not all ships sunk', () => {
  const gb = Gameboard.create();
  gb.placeShip(1, 1, 3, 1);
  gb.receiveAttack(1, 1);
  gb.receiveAttack(2, 1);
  expect(gb.allShipsSunk()).toBe(false);
});
