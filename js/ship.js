const Ship = (length) => {
  let life = length;
  const hit = () => {
    if (life) {
      life -= 1;
      return true;
    }
    return false;
  };
  const isSunk = () => !life;

  return { length, hit, isSunk };
};

module.exports = Ship;
