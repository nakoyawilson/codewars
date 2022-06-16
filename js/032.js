// https://www.codewars.com/kata/52ad1db4b2651f744d000394/javascript

function reindeers(presents) {
  if (presents > 180) {
    throw new Error("The number of presents is too high");
  }
  return Math.ceil(presents / 30) + 2;
}

console.log(reindeers(0)); // must return 2
console.log(reindeers(1)); // must return 3
console.log(reindeers(30)); // must return 3
console.log(reindeers(200)); // must throw an error
