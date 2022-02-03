import { Gameboard } from './gameboard';

const Player = () => {
  const gameboard = Gameboard.create();
  gameboard.placeShip(2, 1, 5, 1);
  gameboard.placeShip(0, 0, 4);
  gameboard.placeShip(8, 7, 3);
  gameboard.placeShip(4, 6, 3);
  gameboard.placeShip(9, 2, 2);
  return { ...gameboard };
};

export { Player };
