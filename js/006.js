function comp(array1, array2){
  if (!array1 || !array2 || array1.length !== array2.length) {
    return false;
  }
  const arr1 = array1.sort((a, b) => a - b).map(num => num ** 2);
  const arr2 = array2.sort((a, b) => a - b)
  let same = true;
  arr1.forEach((num, idx) => {
    if (num !== arr2[idx]) {
      same = false;
    }
  })
  return same;
}