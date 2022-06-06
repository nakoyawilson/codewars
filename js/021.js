// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/javascript

const multiplicationTable = (size) => {
  return Array.from({ length: size }).map((row, rowIdx) =>
    Array.from({ length: size }, (_, idx) => (idx + 1) * (rowIdx + 1))
  );
};

console.log(multiplicationTable(3)); // [[1,2,3], [2,4,6], [3,6,9]]
