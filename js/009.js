// https://www.codewars.com/kata/55911ef14065454c75000062/javascript

function multiply(a, b) {
  return (BigInt(a) * BigInt(b)).toString();
}

console.log(multiply("2", "0"));
console.log(multiply("0", "30"));
console.log(multiply("0000001", "3"));
console.log(multiply("1009", "03"));
console.log(multiply("2", "0"));
console.log(multiply("0", "30"));
console.log(multiply("0000001", "3"));
console.log(multiply("1009", "03"));
console.log(multiply("98765", "56894"));
console.log(multiply("1020303004875647366210", "2774537626200857473632627613"));
console.log(multiply("58608473622772837728372827", "7586374672263726736374"));
console.log(multiply("9007199254740991", "9007199254740991"));
