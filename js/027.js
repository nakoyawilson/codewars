// https://www.codewars.com/kata/51e056fe544cf36c410000fb/javascript

function topThreeWords(text) {
  const input = text.replace(/[^\w ']/g, "").toLowerCase();
  const wordFrequencies = {};
  input
    .split(" ")
    .filter((word) => word && word !== "'")
    .forEach(
      (word) => (wordFrequencies[word] = (wordFrequencies[word] || 0) + 1)
    );
  let first = 0;
  let second = 0;
  let third = 0;
  const result = [undefined, undefined, undefined];
  for (let word in wordFrequencies) {
    if (wordFrequencies[word] > first) {
      third = second;
      result[2] = result[1];
      second = first;
      result[1] = result[0];
      first = wordFrequencies[word];
      result[0] = word;
    } else if (
      wordFrequencies[word] > second ||
      wordFrequencies[word] === first
    ) {
      third = second;
      result[2] = result[1];
      second = wordFrequencies[word];
      result[1] = word;
    } else if (wordFrequencies[word] > third) {
      third = wordFrequencies[word];
      result[2] = word;
    }
  }
  return result.filter((answer) => answer);
}

// console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e")); // ['e','d','a']
// console.log(topThreeWords("a a c b b")); // ['a','b','c']
// console.log(
//   topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// ); // ['e','ddd','aa']
// console.log(topThreeWords("  //wont won't won't ")); // ["won't", "wont"]
// console.log(topThreeWords("  , e   .. ")); // ["e"]
// console.log(topThreeWords("  ...  ")); // []
console.log(topThreeWords("  '  ")); // []
// console.log(topThreeWords(
//   `In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.`
// )); // ['a','of','on']
