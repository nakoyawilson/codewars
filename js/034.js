// https://www.codewars.com/kata/546937989c0b6ab3c5000183

function encryptor(key, message) {
  const shift = key % 26;
  return message
    .split("")
    .map((char) => {
      if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
        return String.fromCharCode(
          char.charCodeAt(0) + shift > 90
            ? char.charCodeAt(0) + shift - 26
            : char.charCodeAt(0) + shift < 65
            ? char.charCodeAt(0) + shift + 26
            : char.charCodeAt(0) + shift
        );
      } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
        return String.fromCharCode(
          char.charCodeAt(0) + shift > 122
            ? char.charCodeAt(0) + shift - 26
            : char.charCodeAt(0) + shift < 97
            ? char.charCodeAt(0) + shift + 26
            : char.charCodeAt(0) + shift
        );
      } else {
        return char;
      }
    })
    .join("");
}
