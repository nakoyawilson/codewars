// https://www.codewars.com/kata/5b1b27c8f60e99a467000041/javascript

function anagramDifference(w1, w2) {
  if ((w1.length === 0) & (w2.length === 0)) {
    return 0;
  }
  const w1CharCount = {};
  const w2CharCount = {};
  w1.split("").forEach(
    (char) => (w1CharCount[char] = (w1CharCount[char] || 0) + 1)
  );
  w2.split("").forEach(
    (char) => (w2CharCount[char] = (w2CharCount[char] || 0) + 1)
  );
  let numToRemove = 0;
  for (let char in w1CharCount) {
    if (!w2CharCount.hasOwnProperty(char)) {
      numToRemove += w1CharCount[char];
    } else if (
      w2CharCount.hasOwnProperty(char) &&
      w1CharCount[char] > w2CharCount[char]
    ) {
      numToRemove += w1CharCount[char] - w2CharCount[char];
    }
  }
  for (let char in w2CharCount) {
    if (!w1CharCount.hasOwnProperty(char)) {
      numToRemove += w2CharCount[char];
    } else if (
      w1CharCount.hasOwnProperty(char) &&
      w2CharCount[char] > w1CharCount[char]
    ) {
      numToRemove += w2CharCount[char] - w1CharCount[char];
    }
  }
  return numToRemove;
}

console.log(anagramDifference("", "")); // 0
console.log(anagramDifference("a", "")); // 1
console.log(anagramDifference("", "a")); // 1
console.log(anagramDifference("ab", "a")); // 1
console.log(anagramDifference("ab", "cd")); // 4
console.log(anagramDifference("aab", "a")); // 2
console.log(anagramDifference("a", "aab")); // 2
console.log(anagramDifference("codewars", "hackerrank")); // 10
