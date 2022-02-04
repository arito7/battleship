import Player from '../js/player';
import Gameboard from '../js/gameboard';

test('attack returns true on hit', () => {
  const p1 = Player(Gameboard.create());
  const p2 = Player(Gameboard.create());
  p2.placeShip(1, 1, 3);
  expect(p1.attack(1, 1, p2)).toBe(true);
});

test('attack returns false on miss', () => {
  const p1 = Player(Gameboard.create());
  const p2 = Player(Gameboard.create());
  expect(p1.attack(1, 1, p2)).toBe(false);
});
