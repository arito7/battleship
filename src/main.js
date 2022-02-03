import './css/styles.css';
import { Gameboard } from './js/gameboard';

import { Player } from './js/player';

(() => {
  const player = Player();
  const enemy = Player();

  const playerGrid = document.querySelector('.playerField > .board');
  const enemyGrid = document.querySelector('.enemyField > .board');

  const playerNodes = [];
  const enemyNodes = [];

  /**
   * Does not re-render, just adds CSS classes
   */
  function render() {
    for (let y = 0; y < 10; y += 1) {
      for (let x = 0; x < 10; x += 1) {
        if (player.board[y][x]) {
          playerNodes[y][x].classList.add('occupied');
          if (player.board[y][x] === Gameboard.HIT) {
            playerNodes[y][x].classList.add('hit');
          } else if (player.board[y][x] === Gameboard.MISSED) {
            playerNodes[y][x].classList.add('missed');
          }
        }
        if (enemy.board[y][x] === Gameboard.HIT) {
          enemyNodes[y][x].classList.add('hit');
        } else if (enemy.board[y][x] === Gameboard.MISSED) {
          enemyNodes[y][x].classList.add('missed');
        }
      }
    }
  }

  function checkGameState() {
    if (player.allShipsSunk() || enemy.allShipsSunk()) {
      //todo gameover
      console.log('game over');
    }
  }

  (() => {
    for (let y = 0; y < 10; y += 1) {
      playerNodes.push(Array(10));
      enemyNodes.push(Array(10));
      for (let x = 0; x < 10; x += 1) {
        const enemyCell = document.createElement('div');
        const playerCell = document.createElement('div');
        enemyCell.classList.add('cell');
        playerCell.classList.add('cell');

        enemyCell.addEventListener('click', () => {
          enemy.receiveAttack(y, x);
          render();
          checkGameState();
        });
        enemyNodes[y][x] = enemyCell;
        playerNodes[y][x] = playerCell;
        enemyGrid.appendChild(enemyCell);
        playerGrid.appendChild(playerCell);
      }
    }
  })();

  render();
})();
