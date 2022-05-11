function persistence(num) {
  let count = 0;
  let result = num.toString();
  while (result.length > 1) {
    result = result
      .split("")
      .reduce((acc, curr) => Number(acc) * Number(curr), 1)
      .toString();
    count += 1;
  }
  return count;
}

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));
