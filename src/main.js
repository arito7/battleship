import './css/styles.css';
import Game from './js/game';
import ShipStatusComponent from './components/ship-status/ship-status-component';

(() => {
  const main = document.querySelector('.main');
  const playerField = document.querySelector('.playerField');
  const enemyField = document.querySelector('.enemyField');

  const game = Game(main, playerField, enemyField);
  game.startGame();
})();
