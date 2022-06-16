// https://www.codewars.com/kata/53046ceefe87e4905e00072a/javascript

function palindrome(string) {
  const arr = string
    .toLowerCase()
    .split("")
    .filter((char) => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122);
  let i = arr.length - 1;
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      return false;
    }
    i--;
  }
  return true;
}

console.log(palindrome("Amore, Roma")); //  true
console.log(palindrome("A man, a plan, a canal: Panama")); //  true
console.log(palindrome("No 'x' in 'Nixon'")); // true
console.log(palindrome("Abba Zabba, you're my only friend")); //  false
