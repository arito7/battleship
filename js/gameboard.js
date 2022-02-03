const Ship = require('./ship');

const Gameboard = () => {
  const SIZE = 10;
  const EMPTY = 0;
  const MISSED = 1;
  const X = 0;
  const Y = 1;
  let board = Array(10).fill(Array(10).fill(EMPTY));

  /**
   *
   * @param {number} x x-coordinate
   * @param {number} y y-coordinate
   * @returns true if within bounds of gameboard, false otherwise
   */
  const isWithinBounds = (x, y) =>
    board[x] === undefined ? false : board[x][y] === undefined ? false : true;

  /**
   * @param {number} x x-coordinate
   * @param {number} y y-coordinate
   * @param {number} size size of ship
   * @param {number} orientation 0 = X-coordinate , 1 = Y-coordinate
   * @returns true if ship is successfully placed, false otherwise
   */
  const placeShip = (x, y, size, orientation = X) => {
    const tempBoard = [...board];
    const ship = Ship(size);
    for (let i = 0; i < size; i += 1) {
      if (orientation === X) {
        if (isWithinBounds(x + i, y) && board[x + i][y] === EMPTY) {
          tempBoard[x + i][y] = ship;
        } else {
          return false;
        }
      } else if (orientation === Y) {
        if (isWithinBounds(x, y + i) && board[x][y + i] === EMPTY) {
          tempBoard[x][y + i] = ship;
        } else {
          return false;
        }
      }
    }
    board = tempBoard;
    return true;
  };

  const receiveAttack = (x, y) => {
    if (isWithinBounds(x, y)) {
      if (board[x][y] !== EMPTY) {
        board[x][y].hit();
        return true;
        // eslint-disable-next-line no-else-return
      } else {
        board[x][y] = MISSED;
      }
    }
    return false;
  };

  /**
   * @returns {[{x:number, y:number}]} Array of objects containing missed hits coordinates
   */
  const missedAttacks = () => {
    const temp = [];
    for (let x = 0; x < SIZE; x += 1) {
      for (let y = 0; y < SIZE; y += 1) {
        if (board[x][y] === MISSED) {
          temp.push({ x, y });
        }
      }
    }
    return temp;
  };

  const allShipsSunk = () => {
    for (let x = 0; x < SIZE; x += 1) {
      for (let y = 0; y < SIZE; y += 1) {
        if (board[x][y].length) {
          if (!board[x][y].isSunk()) {
            return false;
          }
        }
      }
    }
    return true;
  };

  return { placeShip, receiveAttack, missedAttacks, allShipsSunk };
};

module.exports = Gameboard;
