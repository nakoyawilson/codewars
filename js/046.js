// https://www.codewars.com/kata/530e15517bc88ac656000716/javascript

function rot13(message) {
  return message
    .split("")
    .map((char) => {
      if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        const shift = char.charCodeAt(0) + 13;
        return String.fromCharCode(shift > 90 ? shift - 26 : shift);
      } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
        const shift = char.charCodeAt(0) + 13;
        return String.fromCharCode(shift > 122 ? shift - 26 : shift);
      } else {
        return char;
      }
    })
    .join("");
}

console.log(rot13("test")); // "grfg"
console.log(rot13("Test")); // "Grfg"
