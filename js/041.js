// https://www.codewars.com/kata/5202ef17a402dd033c000009/javascript

function titleCase(title, minorWords) {
  const minorWordsArr = minorWords ? minorWords.toLowerCase().split(" ") : [];
  return title
    .split(" ")
    .map((word, index) => {
      if (minorWordsArr.includes(word.toLowerCase()) && index !== 0) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    })
    .join(" ");
}

console.log(titleCase("")); // ''
console.log(titleCase("a clash of KINGS", "a an the of")); // 'A Clash of Kings'
console.log(titleCase("THE WIND IN THE WILLOWS", "The In")); // 'The Wind in the Willows'
console.log(titleCase("the quick brown fox")); // 'The Quick Brown Fox'
