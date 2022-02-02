const Ship = (length) => {
  const state = Array(length).fill(0);
  const hit = (pos) => {
    if (pos <= length) {
      state[pos - 1] = 1;
      return true;
    }
    return false;
  };
  const isSunk = () => {
    return !state.includes(0);
  };
  return { length, hit, isSunk };
};

module.exports = Ship;
