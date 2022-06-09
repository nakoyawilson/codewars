// https://www.codewars.com/kata/52c31f8e6605bcc646000082/javascript

function twoSum(numbers, target) {
  const tempArr = numbers.map((num) => num).sort((a, b) => a - b);
  let i = 0;
  let j = tempArr.length - 1;
  while (i < j) {
    if (tempArr[i] + tempArr[j] === target) {
      return [
        numbers.indexOf(tempArr[i]),
        numbers.lastIndexOf(tempArr[j]),
      ].sort((a, b) => a - b);
    } else if (tempArr[i] + tempArr[j] < target) {
      i++;
    } else {
      j--;
    }
  }
}

console.log(twoSum([1, 2, 3], 4)); // [0,2]
console.log(twoSum([1234, 5678, 9012], 14690)); // [1,2]
console.log(twoSum([2, 2, 3], 4)); // [0,1]
