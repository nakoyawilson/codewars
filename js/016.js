// https://www.codewars.com/kata/554ca54ffa7d91b236000023/javascript

function deleteNth(arr, n) {
  const frequencyCounter = {};
  const uniqueNumbers = Array.from(new Set(arr));
  arr.forEach(
    (ele) => (frequencyCounter[ele] = (frequencyCounter[ele] || 0) + 1)
  );
  uniqueNumbers.forEach((ele) => {
    if (frequencyCounter[ele] > n) {
      const numToDelete = frequencyCounter[ele] - n;
      for (let i = 0; i < numToDelete; i++) {
        arr.splice(arr.lastIndexOf(ele), 1);
      }
    }
  });
  return arr;
}

console.log(deleteNth([20, 37, 20, 21], 1));
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
