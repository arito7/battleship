const gameboard = require('../js/gameboard');

test('place ship', () => {
  expect(gameboard().placeShip(1, 1, 4, 1)).toBe(true);
});

test('cannot place ship outside of gameboard bounds', () => {
  const gb = gameboard();
  expect(gb.placeShip(11, 11, 3)).toBe(false);
  expect(gb.placeShip(8, 8, 5)).toBe(false);
});

test('receive attack miss', () => {
  expect(gameboard().receiveAttack(1, 1)).toBe(false);
});

test('receive attack hit', () => {
  const gb = gameboard();
  gb.placeShip(1, 1, 3);
  expect(gb.receiveAttack(2, 1)).toBe(true);
});

test('cannot receive attack outside of gameboard bounds', () => {
  expect(gameboard().receiveAttack(11, 11)).toBe(false);
});

test('keeps track of missed attacks', () => {
  const gb = gameboard();
  gb.receiveAttack(4, 4);
  expect(gb.missedAttacks()).toContainEqual({ x: 4, y: 4 });
});

test('missed attacks does not contain any hits', () => {
  const gb = gameboard();
  gb.placeShip(1, 1, 3);
  gb.receiveAttack(1, 1);
  expect(gb.missedAttacks()).not.toContainEqual({ x: 1, y: 1 });
});

test('all ships sunk', () => {
  const gb = gameboard();
  gb.placeShip(1, 1, 3, 1);
  gb.receiveAttack(1, 1);
  gb.receiveAttack(1, 2);
  gb.receiveAttack(1, 3);
  expect(gb.allShipsSunk()).toBe(true);
});

test('not all ships sunk', () => {
  const gb = gameboard();
  gb.placeShip(1, 1, 3);
  expect(gb.allShipsSunk()).toBe(false);
});
