function findUniq(arr) {
  const frequencyCounter = {};
  arr.forEach(
    (num) => (frequencyCounter[num] = (frequencyCounter[num] || 0) + 1)
  );
  for (ele in frequencyCounter) {
    if (frequencyCounter[ele] === 1) {
      return Number(ele);
    }
  }
}

findUniq([1, 0, 0]);
findUniq([0, 1, 0]);
findUniq([0, 0, 1]);
findUniq([1, 1, 1, 2, 1, 1]);
findUniq([1, 1, 2, 1, 1]);
findUniq([3, 10, 3, 3, 3]);
findUniq([0, 0, 0.55, 0, 0]);
