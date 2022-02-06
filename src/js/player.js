import Gameboard from './gameboard';
export default (gameboard, bot = false) => {
  if (bot) {
    Gameboard.SHIPS.forEach((ship) => {
      while (true) {
        const x = Math.round(Math.random() * 9);
        const y = Math.round(Math.random() * 9);
        const orientation = Math.round(Math.random() * 1);
        if (gameboard.placeShip(y, x, ship.size, orientation)) {
          break;
        }
      }
    });
  }

  const attack = (y, x, player) => player.receiveAttack(y, x);
  return { attack, ...gameboard };
};
