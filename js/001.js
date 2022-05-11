function sortArray(array) {
  const oddArr = array
    .filter((num) => Math.abs(num) % 2 === 1)
    .sort((a, b) => a - b);
  return array.map((ele) => (ele % 2 ? oddArr.shift() : ele));
}
