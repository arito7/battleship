import Gameboard from './gameboard';
import Player from './player';

export default () => {
  let player;
  let enemy;
  let playerNodes;
  let enemyNodes;

  /**
   * Holds callback functions for when game is over.
   * Will pass true if player wins false otherwise.
   */
  const onGameOver = [];

  function resetNode(node) {
    while (node.hasChildNodes()) {
      node.removeChild(node.firstChild);
    }
  }

  function startGame(playerNodeContainer, enemyNodeContainer) {
    resetNode(playerNodeContainer);
    resetNode(enemyNodeContainer);
    player = Player(Gameboard.create());
    enemy = Player(Gameboard.create());
    playerNodes = [];
    enemyNodes = [];

    function enemyCellListener(y, x) {
      player.attack(y, x, enemy);
      render();
      checkGameState();
      aiMove();
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

          enemyCell.addEventListener(
            'click',
            enemyCellListener.bind(enemyCell, y, x),
            { once: true }
          );

          enemyNodes[y][x] = enemyCell;
          playerNodes[y][x] = playerCell;
          enemyNodeContainer.appendChild(enemyCell);
          playerNodeContainer.appendChild(playerCell);
        }
      }
    })();

    render();
  }

  function checkGameState() {
    if (player.allShipsSunk() || enemy.allShipsSunk()) {
      onGameOver.forEach((cb) => {
        cb(enemy.allShipsSunk());
      });
    }
  }

  function aiMove() {
    while (true) {
      const y = Math.round(Math.random() * 9);
      const x = Math.round(Math.random() * 9);
      if (
        player.board[y][x] !== Gameboard.HIT ||
        player.board[y][x] !== Gameboard.MISSED
      ) {
        player.receiveAttack(y, x);
        break;
      }
    }
    render();
    checkGameState();
  }

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
  return { startGame, onGameOver };
};
