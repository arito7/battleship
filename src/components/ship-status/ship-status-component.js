import Gameboard from '../../js/gameboard';
import './ship-status-component.css';

export default () => {
  const container = document.createElement('div');
  container.classList.add('ships');
  Gameboard.SHIPS.forEach((ship) => {
    const mship = document.createElement('div');
    const shipType = document.createElement('p');
    const shipHealthContainer = document.createElement('div');

    mship.classList.add('ship');
    shipHealthContainer.classList.add('ship-slots');

    shipType.textContent = ship.type;
    for (let i = 0; i < ship.size; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      shipHealthContainer.appendChild(cell);
    }

    mship.appendChild(shipType);
    mship.appendChild(shipHealthContainer);

    container.appendChild(mship);
  });
  return container;
};
