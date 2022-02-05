export default (length) => {
  let mLife = length;
  const life = mLife;
  const hit = () => {
    if (mLife) {
      mLife -= 1;
      return true;
    }
    return false;
  };
  const isSunk = () => !mLife;

  return { life, length, hit, isSunk };
};
