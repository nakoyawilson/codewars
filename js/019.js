//  https://www.codewars.com/kata/586d6cefbcc21eed7a001155/javascript

function longestRepetition(s) {
  if (s === "") return ["", 0];
  const arr = s.split("");
  let l = 1;
  let c = arr[0];
  let tempL = 1;
  let tempC = "";
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i = j;
      tempL = 1;
    } else {
      tempL++;
      tempC = arr[i];
    }
    if (tempL > l) {
      l = tempL;
      c = tempC;
    }
  }
  return [c, l];
}

console.log(longestRepetition("aaaabb")); // ["a",4]
console.log(longestRepetition("bbbaaabaaaa")); // ["a",4]
console.log(longestRepetition("cbdeuuu900")); // ["u",3]
console.log(longestRepetition("abbbbb")); // ["b",5]
console.log(longestRepetition("aabb")); // ["a",2]
console.log(longestRepetition("")); // ["",0]
console.log(longestRepetition("ba")); // ["b",1]
