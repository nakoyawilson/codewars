// https://www.codewars.com/kata/511f11d355fe575d2c000001/javascript

function twoOldestAges(ages) {
  ages.sort((a, b) => b - a);
  return ages.length >= 2 ? [ages[0], ages[1]].sort((a, b) => a - b) : ages;
}

console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
console.log(twoOldestAges([6, 5, 83, 5, 3, 18]));
