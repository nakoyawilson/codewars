// https://www.codewars.com/kata/62ca07aaedc75c88fb95ee2f/javascript

function ascendDescend(length, minimum, maximum) {
  if (maximum < minimum || length === 0) {
    return "";
  } else if (maximum - minimum === 0) {
    return `${minimum}`.repeat(length);
  }
  const ascendArr = Array.from(
    { length: maximum - minimum + 1 },
    (_, idx) => minimum + idx
  );
  const decendArr = ascendArr.slice(0, -1).reverse();
  const ascendFullStr = ascendArr.join("");
  const ascendPartialStr = ascendArr.slice(1).join("");
  const decendStr = decendArr.join("");
  let str = ascendFullStr + decendStr;
  while (str.length < length) {
    str += ascendPartialStr + decendStr;
  }
  return str.slice(0, length);
}

console.log(ascendDescend(5, 1, 3)); // "12321"
console.log(ascendDescend(14, 0, 2)); // "01210121012101"
console.log(ascendDescend(11, 5, 9)); // "56789876567"
console.log(ascendDescend(10, 1, 1));
console.log(ascendDescend(11, 10, 12)); // "10111211101"
console.log(ascendDescend(1, -5, -4)); // "-"
console.log(ascendDescend(157, -17, -9));
console.log(ascendDescend(9987, 4097, 4999));
