// https://www.codewars.com/kata/5a7f58c00025e917f30000f1/javascript

function longest(str) {
  if (str.length <= 1) return str;
  let start = 0;
  let count = 1;
  let tempStart = 0;
  let tempCount = 1;
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
      tempCount++;
    } else if (arr[i] < arr[i - 1] && tempCount > count) {
      count = tempCount;
      start = tempStart;
      tempCount = 1;
      tempStart = i;
    } else {
      tempCount = 1;
      tempStart = i;
    }
  }
  if (tempCount > count) {
    return str.slice(tempStart, tempStart + tempCount);
  } else {
    return str.slice(start, start + count);
  }
}

console.log(longest("asd")); // 'as'
console.log(longest("nab")); // 'ab'
console.log(longest("abcdeapbcdef")); // 'abcde'
console.log(longest("asdfaaaabbbbcttavvfffffdf")); // 'aaaabbbbctt'
console.log(longest("asdfbyfgiklag")); // 'fgikl'
console.log(longest("z")); // 'z'
console.log(longest("zyba")); // 'z'
