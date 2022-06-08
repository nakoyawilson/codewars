// https://www.codewars.com/kata/58235a167a8cb37e1a0000db/javascript

function numberOfPairs(gloves) {
  const occurrences = {};
  gloves.forEach(
    (glove) => (occurrences[glove] = (occurrences[glove] || 0) + 1)
  );
  let count = 0;
  for (let color in occurrences) {
    count += Math.floor(occurrences[color] / 2);
  }
  return count;
}

let tests = [
  [["red", "red"], 1],
  [["red", "green", "blue"], 0],
  [["gray", "black", "purple", "purple", "gray", "black"], 3],
];

tests.forEach((test) => {
  console.log(numberOfPairs(test[0]));
});
