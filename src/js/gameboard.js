import Ship from './ship';

export default (() => {
  const SIZE = 10;
  const EMPTY = 0;
  const MISSED = 1;
  const HIT = 2;
  const HORIZONTAL = 0;
  const VERTICAL = 1;

  const SHIPS = [
    { type: 'Carrier', size: 5 },
    { type: 'BattleShip', size: 4 },
    { type: 'Destroyer', size: 3 },
    { type: 'Submarine', size: 3 },
    { type: 'Patrol Boat', size: 2 },
  ];
  /**
   * @param {number} x x-coordinate
   * @param {number} y y-coordinate
   * @returns true if within bounds of gameboard, false otherwise
   */
  const isWithinBounds = (y, x) => y < SIZE && x < SIZE && y > -1 && x > -1;

  const create = () => {
    let ships;
    let board;

    const isAttackableCell = (y, x) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      board[y][x] !== HIT && board[y][x] !== MISSED;

    const isPlaceable = (y, x) => board[y][x] === EMPTY;

    const reset = () => {
      ships = [];
      board = [
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
    };

    reset();

    /**
     * @param {number} y y-coordinate
     * @param {number} x x-coordinate
     * @param {number} size size of ship
     * @param {number} orientation 0 = horizontal , 1 = vertical
     * @returns true if ship is successfully placed, false otherwise
     */
    const placeShip = (y, x, size, orientation = HORIZONTAL) => {
      const ship = Ship(size);
      ships.push(ship);
      let mX;
      let mY;

      for (let i = 0; i < size; i += 1) {
        mX = orientation === HORIZONTAL ? x + i : x;
        mY = orientation === VERTICAL ? y + i : y;
        if (!(isWithinBounds(mY, mX) && isPlaceable(mY, mX))) {
          return false;
        }
      }

      for (let i = 0; i < size; i += 1) {
        mX = orientation === HORIZONTAL ? x + i : x;
        mY = orientation === VERTICAL ? y + i : y;
        // properties to help with constructing ui
        if (i === 0) {
          ship.head = [mY, mX, orientation];
        } else if (i === size - 1) {
          ship.tail = [mY, mX, orientation];
        }
        board[mY][mX] = ship;
      }
      return true;
    };

    /**
     * @param {Number} y y-coordinate
     * @param {Number} x x-coordinate
     * @returns {Boolean} true if valid attack false otherwise
     */
    const receiveAttack = (y, x) => {
      if (isWithinBounds(y, x) && isAttackableCell(y, x)) {
        if (board[y][x].hit) {
          board[y][x].hit();
          board[y][x] = HIT;
          // eslint-disable-next-line no-else-return
        } else {
          board[y][x] = MISSED;
        }
        return true;
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

    /**
     * Instance
     */
    return {
      reset,
      allShipsSunk,
      missedAttacks,
      receiveAttack,
      placeShip,
      board,
      ships,
    };
  };

  /**
   * Factory Static
   */
  return {
    create,
    SIZE,
    SHIPS,
    EMPTY,
    MISSED,
    HIT,
    HORIZONTAL,
    VERTICAL,
    isWithinBounds,
  };
})();
