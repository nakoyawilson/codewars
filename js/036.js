// https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e/javascript

function getDay(day, isLeap) {
  const daysInMonth = [
    ["January", 31],
    ["February", isLeap ? 29 : 28],
    ["March", 31],
    ["April", 30],
    ["May", 31],
    ["June", 30],
    ["July", 31],
    ["August", 31],
    ["September", 30],
    ["October", 31],
    ["November", 30],
    ["December", 31],
  ];
  const totalDays = [daysInMonth[0][1]];
  for (let i = 1; i < 12; i++) {
    totalDays.push(totalDays[i - 1] + daysInMonth[i][1]);
  }
  for (let j = 0; j < 12; j++) {
    if (day <= totalDays[j]) {
      return `${daysInMonth[j][0]}, ${j === 0 ? day : day - totalDays[j - 1]}`;
    }
  }
}

console.log(getDay(15, false)); // "January, 15"
console.log(getDay(41, false)); // "February, 10"
console.log(getDay(59, false)); // "February, 28"
console.log(getDay(60, false)); // "March, 1"
console.log(getDay(60, true)); // "February, 29"
console.log(getDay(365, false)); // "December, 31"
console.log(getDay(366, true)); // "December, 31"
