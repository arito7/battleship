import Ship from '../js/ship';

test('returns length', () => {
  expect(Ship(6).length).toBe(6);
});

test('valid hit', () => {
  expect(Ship(6).hit()).toBe(true);
});

test('is sunk', () => {
  const ship = Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test('is not sunk', () => {
  const ship = Ship(3);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});
