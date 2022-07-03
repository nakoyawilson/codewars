// https://www.codewars.com/kata/52dbae61ca039685460001ae/javascript

function change(string) {
  let returnStr = "";
  for (let i = 97; i <= 122; i++) {
    returnStr += string.toLowerCase().includes(String.fromCharCode(i)) ? 1 : 0;
  }
  return returnStr;
}
