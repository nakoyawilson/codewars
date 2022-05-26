// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/javascript

function wave(str) {
  if (str.length === 0) {
    return [];
  }
  const arrLength = str.length;
  return Array.from({ length: arrLength }, () => str)
    .map(
      (ele, idx) =>
        ele.slice(0, idx) + ele[idx].toUpperCase() + ele.slice(idx + 1)
    )
    .filter((_, idx) => str[idx] !== " ");
}

console.log(wave("hello"));
console.log(wave("codewars"));
console.log(wave(""));
console.log(wave("two words"));
console.log(wave(" gap "));
