import Gameboard from './gameboard';
import Player from './player';
import GameOverModal from '../components/modal/gameover-modal';
import PlaceShipModal from '../components/modal/placeship-modal';
import BoardComponent from '../components/board/board-component';
import ShipStatusComponent from '../components/ship-status/ship-status-component';

export default (mainContainer, playerField, enemyField) => {
  let mPlayer;
  let enemy;

  const gameoverModal = GameOverModal();
  mainContainer.appendChild(gameoverModal.container);

  const playerGrid = BoardComponent();
  const enemyGrid = BoardComponent();
  playerField.appendChild(playerGrid.container);
  enemyField.appendChild(enemyGrid.container);

  // const playerShipStatus = ShipStatusComponent();
  // const enemyShipStatus = ShipStatusComponent();
  // playerField.appendChild(playerShipStatus.container);
  // enemyField.appendChild(enemyShipStatus.container);

  gameoverModal.playAgainBtn.addEventListener(
    'click',
    playAgainHandler.bind(gameoverModal)
  );

  function resetNodes() {
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
    resetNode(playerField);
    resetNode(enemyField);
  }

  /**
   * Does not re-render, just adds CSS classes
   */
  function render() {
    // for gameboard grid
    for (let y = 0; y < 10; y += 1) {
      for (let x = 0; x < 10; x += 1) {
        if (mPlayer.board[y][x]) {
          playerGrid.cells[y][x].classList.add('occupied');

          if (mPlayer.board[y][x] === Gameboard.HIT) {
            playerGrid.cells[y][x].classList.add('hit');
          } else if (mPlayer.board[y][x] === Gameboard.MISSED) {
            playerGrid.cells[y][x].classList.add('missed');
          }
        }

        if (enemy.board[y][x] === Gameboard.HIT) {
          enemyGrid.cells[y][x].classList.add('hit');
        } else if (enemy.board[y][x] === Gameboard.MISSED) {
          enemyGrid.cells[y][x].classList.add('missed');
        }

        if (
          JSON.stringify(mPlayer.board[y][x].head) ===
          JSON.stringify([y, x, Gameboard.VERTICAL])
        ) {
          playerGrid.cells[y][x].classList.add('v-ship-start');
        } else if (
          JSON.stringify(mPlayer.board[y][x].tail) ===
          JSON.stringify([y, x, Gameboard.VERTICAL])
        ) {
          playerGrid.cells[y][x].classList.add('v-ship-end');
        } else if (
          JSON.stringify(mPlayer.board[y][x].head) ===
          JSON.stringify([y, x, Gameboard.HORIZONTAL])
        ) {
          playerGrid.cells[y][x].classList.add('h-ship-start');
        } else if (
          JSON.stringify(mPlayer.board[y][x].tail) ===
          JSON.stringify([y, x, Gameboard.HORIZONTAL])
        ) {
          playerGrid.cells[y][x].classList.add('h-ship-end');
        }
      }
    }

    // for Boat states below grid
    //   for (let i = 0; i < mPlayer.ships.length; i += 1) {
    //     for (let j = 0; j < mPlayer.ships[i].length; j += 1) {
    //       if (mPlayer.ships[i].isSunk()) {
    //         playerGrid.cells[i][j].classList.add('hit');
    //       }
    //       if (enemy.ships[i].isSunk()) {
    //         [i][j].classList.add('hit');
    //       }
    //     }
    //   }
  }

  function playAgainHandler() {
    this.hide();
    startGame();
  }

  function startGame() {
    playerGrid.resetNode();
    enemyGrid.resetNode();
    enemy = Player(Gameboard.create(), true);
    const placeShipModal = PlaceShipModal();
    mainContainer.appendChild(placeShipModal.container);

    placeShipModal.on('close', (player) => {
      mPlayer = player;
      // playerShipStatus.createNodes(mPlayer);
      // enemyShipStatus.createNodes(enemy);
      placeShipModal.hide();
      render();
    });

    placeShipModal.show();

    function enemyCellListener(y, x) {
      mPlayer.attack(y, x, enemy);
      // enemyShipStatus.render(enemy);
      // playerShipStatus.render(mPlayer);
      render();
      checkGameState();
      aiMove();
    }

    (() => {
      for (let y = 0; y < 10; y += 1) {
        for (let x = 0; x < 10; x += 1) {
          enemyGrid.cells[y][x].addEventListener(
            'click',
            enemyCellListener.bind(enemyGrid.cells[y][x], y, x),
            { once: true }
          );
        }
      }
    })();

    function checkGameState() {
      if (mPlayer.allShipsSunk() || enemy.allShipsSunk()) {
        gameoverModal.eMsg.textContent = mPlayer.allShipsSunk()
          ? 'You Lost!'
          : 'You Won!';
        gameoverModal.show();
      }
    }

    function aiMove() {
      while (true) {
        const y = Math.round(Math.random() * 9);
        const x = Math.round(Math.random() * 9);
        if (enemy.attack(y, x, mPlayer)) {
          break;
        }
      }
      render();
      checkGameState();
    }
  }

  return { startGame };
};
