// https://www.codewars.com/kata/56541980fa08ab47a0000040/javascript

function printerError(s) {
  const lengthOfS = s.length;
  const numErrors = s
    .split("")
    .filter((char) => char.charCodeAt(0) >= 110).length;
  return `${numErrors}/${lengthOfS}`;
}
