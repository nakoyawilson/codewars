// https://www.codewars.com/kata/57f625992f4d53c24200070e/javascript

function bingo(ticket, win) {
  const miniWins = ticket
    .map((subArr) =>
      subArr[0].split("").some((char) => char.charCodeAt(0) === subArr[1])
    )
    .filter((ele) => ele === true).length;

  return miniWins >= win ? "Winner!" : "Loser!";
}

const test1 = bingo(
  [
    ["ABC", 65],
    ["HGR", 74],
    ["BYHT", 74],
  ],
  2
);
const test2 = bingo(
  [
    ["ABC", 65],
    ["HGR", 74],
    ["BYHT", 74],
  ],
  1
);
const test3 = bingo(
  [
    ["HGTYRE", 74],
    ["BE", 66],
    ["JKTY", 74],
  ],
  3
);

console.log(test1);
console.log(test2);
console.log(test3);
