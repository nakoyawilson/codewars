// https://www.codewars.com/kata/5287e858c6b5a9678200083c/javascript

function narcissistic(value) {
  return (
    String(value)
      .split("")
      .map((num) => Number(num) ** String(value).length)
      .reduce((acc, curr) => acc + curr, 0) === value
  );
}

console.log(narcissistic(7)); // true
console.log(narcissistic(371)); // true
console.log(narcissistic(153)); // true
