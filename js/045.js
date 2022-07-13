// https://www.codewars.com/kata/586305e8916e244b66001a93

const mirror = (obj) => {
  const newObj = { ...obj };
  for (const item in newObj) {
    newObj[item] = item.split("").reverse().join("");
  }
  return newObj;
};
