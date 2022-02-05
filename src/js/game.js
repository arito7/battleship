import Gameboard from './gameboard';
import Player from './player';

export default (
  playerNodeContainer,
  enemyNodeContainer,
  playerShipStates,
  enemyShipStates,
  player = Player(Gameboard.create()),
  enemy = Player(Gameboard.create(), true)
) => {
  let playerNodes;
  let enemyNodes;
  let playerBoatNodes;
  let enemyBoatNodes;
  /**
   * Holds callback functions for when game is over.
   * Will pass true if player wins false otherwise.
   */
  const onGameOver = [];
  function triggerGameOver(args) {
    onGameOver.forEach((fn) => {
      fn(args);
    });
  }

  function resetNode(node) {
    if (node instanceof NodeList) {
      node.forEach((e) => {
        while (e.hasChildNodes()) {
          e.removeChild(e.firstChild);
        }
      });
    } else {
      while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
      }
    }
  }

  function startGame() {
    resetNode(playerNodeContainer);
    resetNode(enemyNodeContainer);
    resetNode(playerShipStates);
    resetNode(enemyShipStates);
    playerNodes = [];
    enemyNodes = [];
    playerBoatNodes = [];
    enemyBoatNodes = [];

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
      for (let i = 0; i < 5; i += 1) {
        playerBoatNodes.push([]);
        enemyBoatNodes.push([]);
        for (let j = 0; j < player.ships[i].length; j += 1) {
          const playerBoatStateCell = document.createElement('div');
          playerBoatStateCell.classList.add('cell');
          playerShipStates[i].appendChild(playerBoatStateCell);
          playerBoatNodes[i].push(playerBoatStateCell);

          const enemyBoatStateCell = document.createElement('div');
          enemyBoatStateCell.classList.add('cell');
          enemyShipStates[i].appendChild(enemyBoatStateCell);
          enemyBoatNodes[i].push(enemyBoatStateCell);
        }
      }
    })();

    render();
  }

  function checkGameState() {
    if (player.allShipsSunk() || enemy.allShipsSunk()) {
      triggerGameOver(enemy.allShipsSunk());
    }
  }

  function aiMove() {
    while (true) {
      const y = Math.round(Math.random() * 9);
      const x = Math.round(Math.random() * 9);
      if (enemy.attack(y, x, player)) {
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

    for (let i = 0; i < player.ships.length; i += 1) {
      for (let j = 0; j < player.ships[i].length; j += 1) {
        if (player.ships[i].isSunk()) {
          playerBoatNodes[i][j].classList.add('hit');
        }
        if (enemy.ships[i].isSunk()) {
          enemyBoatNodes[i][j].classList.add('hit');
        }
      }
    }
  }
  return { startGame, onGameOver, player };
};
