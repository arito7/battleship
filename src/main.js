import './css/styles.css';
import Game from './js/game';

(() => {
  const playerGrid = document.querySelector('.playerField > .board');
  const enemyGrid = document.querySelector('.enemyField > .board');

  const gameOverModal = document.querySelector('.modal.gameover');
  const btnPlayAgain = document.querySelector('.btn.play-again');

  // const enemyTurnModal = document.querySelector('.modal.enemyturn');
  const game = Game();
  game.onGameOver.push((won) => {
    const p = gameOverModal.querySelector('p');
    p.textContent = won
      ? 'Great job you won!'
      : 'You have no ships remaining...';
    gameOverModal.classList.add('visible');
  });

  game.startGame(playerGrid, enemyGrid);

  btnPlayAgain.addEventListener('click', () => {
    game.startGame(playerGrid, enemyGrid);
    gameOverModal.classList.remove('visible');
  });
})();
