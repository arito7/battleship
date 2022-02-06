import './board-component.css';
import '../cell.css';

export default () => {
  /**
   * Holds reference to cells in board [div elements]
   */
  const cells = [];
  const container = document.createElement('div');
  container.classList.add('grid-container');

  const mPopulate = () => {
    for (let y = 0; y < 10; y += 1) {
      cells.push(Array(10));
      for (let x = 0; x < 10; x += 1) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        cell.setAttribute('x', x);
        cell.setAttribute('y', y);
        cells[y][x] = cell;
      }
    }
  };

  /**
   * Added so board can be easily reset when starting a new game
   */
  const resetNode = () => {
    while (container.hasChildNodes()) {
      container.removeChild(container.firstChild);
    }
    mPopulate();
  };

  mPopulate();

  return { container, cells, resetNode };
};
