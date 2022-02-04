export default (gameboard) => {
  gameboard.placeShip(2, 1, 5, 1);
  gameboard.placeShip(0, 0, 4);
  gameboard.placeShip(8, 7, 3);
  gameboard.placeShip(4, 6, 3);
  gameboard.placeShip(9, 2, 2);

  const attack = (y, x, player) => player.receiveAttack(y, x);
  return { attack, ...gameboard };
};
