// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/javascript

function longestConsec(strarr, k) {
  if (strarr.length === 0 || k <= 0 || k > strarr.length) {
    return "";
  }
  const maxIndex = strarr.length - k;
  let longestStr = "";
  for (let i = 0; i <= maxIndex; i++) {
    // let tempStr = "";
    // for (let j = 0; j < k; j++) {
    //   tempStr += strarr[i + j];
    // }
    let tempStr = strarr.slice(i, i + k).join("");
    if (tempStr.length > longestStr.length) {
      longestStr = tempStr;
    }
  }
  return longestStr;
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
); //, "abigailtheta"
console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  )
); //, "oocccffuucccjjjkkkjyyyeehh"
console.log(longestConsec([], 3)); //, ""
console.log(
  longestConsec(
    [
      "itvayloxrp",
      "wkppqsztdkmvcuwvereiupccauycnjutlv",
      "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
    ],
    2
  )
); //"wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
console.log(
  longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2)
); //, "wlwsasphmxxowiaxujylentrklctozmymu"
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)
); //, ""
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)); //, "ixoyx3452zzzzzzzzzzzz"
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15)
); //, ""
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0)); //, ""
