// https://www.codewars.com/kata/5fefee21b64cc2000dbfa875/javascript

function minPermutation(n) {
  if (n === 0) {
    return 0;
  }
  const numAsArr = Math.abs(n).toString().split("");
  const zeros = numAsArr.filter((num) => num === "0");
  const nonZeroNums = numAsArr
    .filter((num) => num !== "0")
    .sort((a, b) => +a - +b, 0);
  return (
    +[nonZeroNums[0], ...zeros, ...nonZeroNums.slice(1)].join("") *
    (n >= 0 ? 1 : -1)
  );
}

console.log(minPermutation(-20));
console.log(minPermutation(-32));
console.log(minPermutation(0));
console.log(minPermutation(10));
console.log(minPermutation(29394));
console.log(minPermutation(-565050));
