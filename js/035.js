// https://www.codewars.com/kata/52761ee4cffbc69732000738/javascript

function goodVsEvil(good, evil) {
  const goodWorth = [1, 2, 3, 3, 4, 10];
  const evilWorth = [1, 2, 2, 2, 3, 5, 10];
  const goodTotal = good
    .split(" ")
    .reduce((acc, curr, idx) => acc + curr * goodWorth[idx], 0);
  const evilTotal = evil
    .split(" ")
    .reduce((acc, curr, idx) => acc + curr * evilWorth[idx], 0);
  return `Battle Result: ${
    goodTotal > evilTotal
      ? "Good triumphs over Evil"
      : goodTotal < evilTotal
      ? "Evil eradicates all trace of Good"
      : "No victor on this battle field"
  }`;
}

console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1")); // 'Battle Result: Evil eradicates all trace of Good'
console.log(goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0")); // 'Battle Result: Good triumphs over Evil'
console.log(goodVsEvil("1 0 0 0 0 0", "1 0 0 0 0 0 0")); // 'Battle Result: No victor on this battle field'
