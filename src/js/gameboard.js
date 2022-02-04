import Ship from './ship';

export default (() => {
  const SIZE = 10;
  const EMPTY = 0;
  const MISSED = 1;
  const HIT = 2;
  const HORIZONTAL = 0;
  const VERTICAL = 1;

  /**
   * @param {number} x x-coordinate
   * @param {number} y y-coordinate
   * @returns true if within bounds of gameboard, false otherwise
   */
  const isWithinBounds = (y, x) => y < 10 && x < 10 && y > -1 && x > -1;

  const create = () => {
    const board = [
      Array(10).fill(EMPTY),
      Array(10).fill(EMPTY),
      Array(10).fill(EMPTY),
      Array(10).fill(EMPTY),
      Array(10).fill(EMPTY),
      Array(10).fill(EMPTY),
      Array(10).fill(EMPTY),
      Array(10).fill(EMPTY),
      Array(10).fill(EMPTY),
      Array(10).fill(EMPTY),
    ];
    /**
     * @param {number} y y-coordinate
     * @param {number} x x-coordinate
     * @param {number} size size of ship
     * @param {number} orientation 0 = horizontal , 1 = vertical
     * @returns true if ship is successfully placed, false otherwise
     */
    const placeShip = (y, x, size, orientation = HORIZONTAL) => {
      const ship = Ship(size);
      for (let i = 0; i < size; i += 1) {
        if (orientation === VERTICAL) {
          if (!(isWithinBounds(y + i, x) && board[y + i][x] === EMPTY)) {
            return false;
          }
        } else if (orientation === HORIZONTAL) {
          if (!(isWithinBounds(y, x + i) && board[y][x + i] === EMPTY)) {
            return false;
          }
        }
      }
      for (let i = 0; i < size; i += 1) {
        if (orientation === VERTICAL) {
          board[y + i][x] = ship;
        } else if (orientation === HORIZONTAL) {
          board[y][x + i] = ship;
        }
      }
      return true;
    };

    const receiveAttack = (y, x) => {
      if (isWithinBounds(y, x)) {
        if (board[y][x] !== EMPTY && board[y][x] !== MISSED) {
          board[y][x].hit();
          board[y][x] = HIT;
          return true;
          // eslint-disable-next-line no-else-return
        } else {
          board[y][x] = MISSED;
        }
      }
      return false;
    };

    /**
     * @returns {[{x:number, y:number}]} Array of objects containing missed hits coordinates
     */
    const missedAttacks = () => {
      const temp = [];
      for (let y = 0; y < SIZE; y += 1) {
        for (let x = 0; x < SIZE; x += 1) {
          if (board[y][x] === MISSED) {
            temp.push({ y, x });
          }
        }
      }
      return temp;
    };

    const allShipsSunk = () => {
      for (let y = 0; y < SIZE; y += 1) {
        for (let x = 0; x < SIZE; x += 1) {
          if (board[y][x].length) {
            if (!board[y][x].isSunk()) {
              return false;
            }
          }
        }
      }
      return true;
    };
    return { allShipsSunk, missedAttacks, receiveAttack, placeShip, board };
  };

  return { create, SIZE, EMPTY, MISSED, HIT, HORIZONTAL, VERTICAL };
})();
