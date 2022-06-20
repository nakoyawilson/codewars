// https://www.codewars.com/kata/58df8b4d010a9456140000c7/javascript

function palindrome(num) {
  if (num < 0 || typeof num !== "number") {
    return "Not valid";
  }
  let looking = true;
  let nearestPalindrome = 0;
  let subtract = num;
  let add = num;
  while (looking) {
    if (
      subtract.toString() ===
        subtract.toString().split("").reverse().join("") &&
      subtract.toString().length > 1
    ) {
      nearestPalindrome = subtract;
      looking = false;
    } else if (
      add.toString() === add.toString().split("").reverse().join("") &&
      add.toString().length > 1
    ) {
      nearestPalindrome = add;
      looking = false;
    }
    subtract -= 1;
    add += 1;
  }
  return nearestPalindrome;
}

console.log(palindrome(8)); // 11
console.log(palindrome(281)); // 282
console.log(palindrome(1029)); // 1001
console.log(palindrome(1221)); // 1221
console.log(palindrome("BGHHGB")); // "Not valid"
console.log(palindrome("11029")); // "Not valid"
console.log(palindrome(-1029)); // "Not valid"
