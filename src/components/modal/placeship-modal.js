import Modal from './modal';
import './placeship-modal.css';
import Player from '../../js/player';
import Gameboard from '../../js/gameboard';

export default () => {
  const container = Modal();
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
  container.setTitle('Place your ships');

  const rotateBtn = document.createElement('button');
  rotateBtn.textContent = 'Rotate';
  container.content.appendChild(rotateBtn);

  const shipType = document.createElement('p');
  shipType.textContent = ships.getCurrentShipType();
  container.content.appendChild(shipType);

  const player = Player(Gameboard.create());

  const gridContainer = document.createElement('div');
  gridContainer.classList.add('psmodal-container');

  rotateBtn.addEventListener('click', () => {
    changeDirection();
  });

  const { cellEnterListener, cellLeaveListener } = (() => {
    function listenerTemplate(y, x, size, addOrRemove) {
      for (let i = 0; i < size; i += 1) {
        if (direction === Gameboard.HORIZONTAL) {
          if (
            Gameboard.isWithinBounds(y, x + i) &&
            player.board[y][x + i] === Gameboard.EMPTY
          ) {
            if (addOrRemove === 'add') {
              if (i === 0) {
                cells[y][x + i].classList.add('psmodal-h-ship-start');
              } else if (i === size - 1) {
                cells[y][x + i].classList.add('psmodal-h-ship-end');
              }
              cells[y][x + i].classList.add('psmodal-hovered');
            } else if (addOrRemove === 'remove') {
              if (i === 0) {
                cells[y][x + i].classList.remove('psmodal-h-ship-start');
              } else if (i === size - 1) {
                cells[y][x + i].classList.remove('psmodal-h-ship-end');
              }
              cells[y][x + i].classList.remove('psmodal-hovered');
            }
          }
        } else if (direction === Gameboard.VERTICAL) {
          if (
            Gameboard.isWithinBounds(y + i, x) &&
            player.board[y + i][x] === Gameboard.EMPTY
          ) {
            if (addOrRemove === 'add') {
              cells[y + i][x].classList.add('psmodal-hovered');
              if (i === 0) {
                cells[y + i][x].classList.add('psmodal-v-ship-start');
              } else if (i === size - 1) {
                cells[y + i][x].classList.add('psmodal-v-ship-end');
              }
            } else if (addOrRemove === 'remove') {
              cells[y + i][x].classList.remove('psmodal-hovered');
              if (i === 0) {
                cells[y + i][x].classList.remove('psmodal-v-ship-start');
              } else if (i === size - 1) {
                cells[y + i][x].classList.remove('psmodal-v-ship-end');
              }
            }
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
      shipType.textContent = ships.getCurrentShipType();
    } else {
      container.content.removeChild(shipType);
    }
    for (let y = 0; y < 10; y += 1) {
      for (let x = 0; x < 10; x += 1) {
        if (player.board[y][x] !== Gameboard.EMPTY) {
          cells[y][x].classList.add('psmodal-occupied');
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

  container.content.appendChild(gridContainer);

  return container;
};
