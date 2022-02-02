const Ship = require('../js/ship');

test('returns length', () => {
  expect(Ship(6).length).toBe(6);
});

test('valid hit', () => {
  expect(Ship(6).hit(6)).toBe(true);
});

test('hit when position is larger than ship length', () => {
  expect(Ship(6).hit(8)).toBe(false);
});

test('is sunk', () => {
  const ship = Ship(3);
  ship.hit(1);
  ship.hit(2);
  ship.hit(3);
  expect(ship.isSunk()).toBe(true);
});

test('is not sunk', () => {
  const ship = Ship(3);
  ship.hit(1);
  ship.hit(2);
  expect(ship.isSunk()).toBe(false);
});
