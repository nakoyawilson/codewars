// https://www.codewars.com/kata/52b757663a95b11b3d00062d/javascript

function toWeirdCase(string) {
  return string
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((char, idx) =>
          idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        )
        .join("")
    )
    .join(" ");
}

//  'ThIs Is A TeSt'
console.log(toWeirdCase("This is a test"));
