// https://www.codewars.com/kata/5626b561280a42ecc50000d1/javascript

function sumDigPow(a, b) {
  const arrLength = b - a + 1;
  const arr = Array.from({ length: arrLength }, (_, idx) => a + idx);
  return arr.filter(
    (num) =>
      num
        .toString()
        .split("")
        .reduce((acc, cur, idx) => acc + cur ** (idx + 1), 0) === num
  );
}

console.log(sumDigPow(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(1, 100)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
console.log(sumDigPow(10, 100)); //  [89]
console.log(sumDigPow(90, 100)); // []
console.log(sumDigPow(90, 150)); // [135]
console.log(sumDigPow(50, 150)); // [89, 135]
console.log(sumDigPow(10, 150)); // [89, 135]
