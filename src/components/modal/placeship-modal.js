import Modal from './modal';
import './placeship-modal.css';
import Player from '../../js/player';
import Gameboard from '../../js/gameboard';

export default () => {
  const player = Player(Gameboard.create());
  const modal = Modal();
  const cells = [];
  const ships = (() => {
    const shipTypes = [
      'Carrier',
      'BattleShip',
      'Destroyer',
      'Submarine',
      'Patrol Boat',
    ];
    const shipSizes = [5, 4, 3, 3, 2];
    let currentShipIndex = 0;
    const nextShip = () => {
      currentShipIndex += 1;
    };
    const getCurrentShipType = () => shipTypes[currentShipIndex];
    const getCurrentShipSize = () => shipSizes[currentShipIndex];
    return { nextShip, getCurrentShipSize, getCurrentShipType };
  })();
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
  const gridContainer = document.createElement('div');

  modal.content.classList.add('psmodal-content-container');
  shipType.classList.add('ship-type');
  gridContainer.classList.add('grid-container');

  modal.setTitle('Place your ships');
  rotateBtn.textContent = 'Rotate';
  shipType.textContent = ships.getCurrentShipType();

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
              cells[mY][mX].classList.add(classStart);
            } else if (i === size - 1) {
              cells[mY][mX].classList.add(classEnd);
            }
            cells[mY][mX].classList.add('hovered');
          } else if (addOrRemove === 'remove') {
            if (i === 0) {
              cells[mY][mX].classList.remove(classStart);
            } else if (i === size - 1) {
              cells[mY][mX].classList.remove(classEnd);
            }
            cells[mY][mX].classList.remove('hovered');
          }
        }
      }
    }
    function cellEnterListener(e) {
      const x = parseInt(e.target.getAttribute('x'), 10);
      const y = parseInt(e.target.getAttribute('y'), 10);
      listenerTemplate(y, x, ships.getCurrentShipSize(), 'add');
    }

    function cellLeaveListener(e) {
      const x = parseInt(e.target.getAttribute('x'), 10);
      const y = parseInt(e.target.getAttribute('y'), 10);
      listenerTemplate(y, x, ships.getCurrentShipSize(), 'remove');
    }

    return { cellEnterListener, cellLeaveListener };
  })();

  function cellClickListener(y, x) {
    if (player.placeShip(y, x, ships.getCurrentShipSize(), direction)) {
      ships.nextShip();
      render();
    }
  }

  function render() {
    if (ships.getCurrentShipType()) {
      // removing and appending to trigger css animation
      shipTypeContainer.removeChild(shipType);
      shipType.textContent = ships.getCurrentShipType();
      shipTypeContainer.appendChild(shipType);
    } else {
      modal.content.removeChild(shipTypeContainer);
      modal.emit('close', [player]);
      modal.hide();
    }
    for (let y = 0; y < 10; y += 1) {
      for (let x = 0; x < 10; x += 1) {
        if (player.board[y][x] !== Gameboard.EMPTY) {
          cells[y][x].classList.add('occupied');
        }
        if (
          JSON.stringify(player.board[y][x].head) ===
          JSON.stringify([y, x, Gameboard.VERTICAL])
        ) {
          cells[y][x].classList.add('v-ship-start');
        } else if (
          JSON.stringify(player.board[y][x].tail) ===
          JSON.stringify([y, x, Gameboard.VERTICAL])
        ) {
          cells[y][x].classList.add('v-ship-end');
        } else if (
          JSON.stringify(player.board[y][x].head) ===
          JSON.stringify([y, x, Gameboard.HORIZONTAL])
        ) {
          cells[y][x].classList.add('h-ship-start');
        } else if (
          JSON.stringify(player.board[y][x].tail) ===
          JSON.stringify([y, x, Gameboard.HORIZONTAL])
        ) {
          cells[y][x].classList.add('h-ship-end');
        }
      }
    }
  }

  (() => {
    for (let y = 0; y < 10; y += 1) {
      cells.push(Array(10));
      for (let x = 0; x < 10; x += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
        cell.setAttribute('x', x);
        cell.setAttribute('y', y);
        cell.addEventListener('mouseenter', cellEnterListener);
        cell.addEventListener('mouseleave', cellLeaveListener);
        cell.addEventListener('click', cellClickListener.bind(cell, y, x));
        cells[y][x] = cell;
      }
    }
  })();

  modal.content.appendChild(gridContainer);

  return { ...modal };
};
