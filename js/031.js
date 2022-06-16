// https://www.codewars.com/kata/59c7e477dcc40500f50005c7/javascript

function isOddHeavy(n) {
  const oddNumbers = n
    .filter((num) => Math.abs(num) % 2 === 1)
    .sort((a, b) => a - b);
  const evenNumbers = n
    .filter((num) => Math.abs(num) % 2 === 0)
    .sort((a, b) => b - a);
  if (
    oddNumbers.length === 0 ||
    (oddNumbers.length === 0 && evenNumbers.length === 0)
  ) {
    return false;
  } else if (oddNumbers.length > 0 && evenNumbers.length === 0) {
    return true;
  }
  if (oddNumbers[0] > evenNumbers[0]) {
    return true;
  } else {
    return false;
  }
}

console.log(isOddHeavy([0, 2, 19, 4, 4])); // true
console.log(isOddHeavy([1, -2, -1, 2])); // false
console.log(isOddHeavy([11, 4, 9, 2, 8])); // true
console.log(isOddHeavy([11, 4, 9, 2, 3, 10])); // false
