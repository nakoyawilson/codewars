// https://www.codewars.com/kata/58539230879867a8cd00011c/javascript

function findChildren(dancingBrigade) {
  const frequencyCounter = {};
  dancingBrigade
    .split("")
    .forEach(
      (char) => (frequencyCounter[char] = (frequencyCounter[char] || 0) + 1)
    );
  const arr = [];
  for (let key in frequencyCounter) {
    if (key === key.toUpperCase()) {
      arr.push(
        `${key}${key.toLowerCase().repeat(frequencyCounter[key.toLowerCase()])}`
      );
    }
  }
  return arr.sort().join("");
}

console.log(findChildren("beeeEBb")); // "BbbEeee"
// console.log(findChildren("uwwWUueEe")); // "EeeUuuWww"
// console.log(findChildren("abBA")); // "AaBb"
// console.log(findChildren("AaaaaZazzz")); // "AaaaaaZzzz"
// console.log(findChildren("CbcBcbaA")); // "AaBbbCcc"
// console.log(findChildren("xXfuUuuF")); // "FfUuuuXx"
