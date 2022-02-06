import Modal from './modal';
import './placeship-modal.css';
import Player from '../../js/player';
import Gameboard from '../../js/gameboard';
import BoardComponent from '../board/board-component';

export default () => {
  const player = Player(Gameboard.create());
  const modal = Modal();
  let currentShipIndex = 0;
  let direction = Gameboard.HORIZONTAL;
  function changeDirection() {
    direction =
      direction === Gameboard.HORIZONTAL
        ? Gameboard.VERTICAL
        : Gameboard.HORIZONTAL;
  }

  const rotateBtn = document.createElement('button');
  const shipTypeContainer = document.createElement('div');
  const shipType = document.createElement('p');
  const boardComponent = BoardComponent();

  modal.content.classList.add('psmodal-content-container');
  shipType.classList.add('ship-type');

  modal.setTitle('Place your ships');
  rotateBtn.textContent = 'Rotate';
  shipType.textContent = Gameboard.SHIPS[currentShipIndex].type;

  modal.content.appendChild(rotateBtn);
  shipTypeContainer.appendChild(shipType);
  modal.content.appendChild(shipTypeContainer);

  rotateBtn.addEventListener('click', () => {
    changeDirection();
  });

  const { cellEnterListener, cellLeaveListener } = (() => {
    function listenerTemplate(y, x, size, addOrRemove) {
      let mY = y;
      let mX = x;
      const classStart =
        direction === Gameboard.HORIZONTAL ? 'h-ship-start' : 'v-ship-start';
      const classEnd =
        direction === Gameboard.HORIZONTAL ? 'h-ship-end' : 'v-ship-end';

      for (let i = 0; i < size; i += 1) {
        mX = direction === Gameboard.HORIZONTAL ? x + i : x;
        mY = direction === Gameboard.VERTICAL ? y + i : y;
        if (
          Gameboard.isWithinBounds(mY, mX) &&
          player.board[mY][mX] === Gameboard.EMPTY
        ) {
          if (addOrRemove === 'add') {
            if (i === 0) {
              boardComponent.cells[mY][mX].classList.add(classStart);
            } else if (i === size - 1) {
              boardComponent.cells[mY][mX].classList.add(classEnd);
            }
            boardComponent.cells[mY][mX].classList.add('hovered');
          } else if (addOrRemove === 'remove') {
            if (i === 0) {
              boardComponent.cells[mY][mX].classList.remove(classStart);
            } else if (i === size - 1) {
              boardComponent.cells[mY][mX].classList.remove(classEnd);
            }
            boardComponent.cells[mY][mX].classList.remove('hovered');
          }
        }
      }
    }
    function cellEnterListener(e) {
      const x = parseInt(e.target.getAttribute('x'), 10);
      const y = parseInt(e.target.getAttribute('y'), 10);
      listenerTemplate(y, x, Gameboard.SHIPS[currentShipIndex].size, 'add');
    }

    function cellLeaveListener(e) {
      const x = parseInt(e.target.getAttribute('x'), 10);
      const y = parseInt(e.target.getAttribute('y'), 10);
      listenerTemplate(y, x, Gameboard.SHIPS[currentShipIndex].size, 'remove');
    }

    return { cellEnterListener, cellLeaveListener };
  })();

  function cellClickListener(e) {
    const x = parseInt(e.target.getAttribute('x'), 10);
    const y = parseInt(e.target.getAttribute('y'), 10);
    if (
      player.placeShip(y, x, Gameboard.SHIPS[currentShipIndex].size, direction)
    ) {
      currentShipIndex += 1;
      render();
    }
  }

  function render() {
    if (Gameboard.SHIPS[currentShipIndex]) {
      // removing and appending to trigger css animation
      shipTypeContainer.removeChild(shipType);
      shipType.textContent = Gameboard.SHIPS[currentShipIndex].type;
      shipTypeContainer.appendChild(shipType);
    } else {
      modal.content.removeChild(shipTypeContainer);
      modal.emit('close', [player]);
      modal.hide();
    }
    for (let y = 0; y < 10; y += 1) {
      for (let x = 0; x < 10; x += 1) {
        if (player.board[y][x] !== Gameboard.EMPTY) {
          boardComponent.cells[y][x].classList.add('occupied');
        }
        if (
          JSON.stringify(player.board[y][x].head) ===
          JSON.stringify([y, x, Gameboard.VERTICAL])
        ) {
          boardComponent.cells[y][x].classList.add('v-ship-start');
        } else if (
          JSON.stringify(player.board[y][x].tail) ===
          JSON.stringify([y, x, Gameboard.VERTICAL])
        ) {
          boardComponent.cells[y][x].classList.add('v-ship-end');
        } else if (
          JSON.stringify(player.board[y][x].head) ===
          JSON.stringify([y, x, Gameboard.HORIZONTAL])
        ) {
          boardComponent.cells[y][x].classList.add('h-ship-start');
        } else if (
          JSON.stringify(player.board[y][x].tail) ===
          JSON.stringify([y, x, Gameboard.HORIZONTAL])
        ) {
          boardComponent.cells[y][x].classList.add('h-ship-end');
        }
      }
    }
  }

  (() => {
    for (let y = 0; y < 10; y += 1) {
      for (let x = 0; x < 10; x += 1) {
        boardComponent.cells[y][x].addEventListener(
          'mouseenter',
          cellEnterListener
        );
        boardComponent.cells[y][x].addEventListener(
          'mouseleave',
          cellLeaveListener
        );
        boardComponent.cells[y][x].addEventListener('click', cellClickListener);
      }
    }
  })();

  modal.content.appendChild(boardComponent.container);

  return { ...modal };
};
