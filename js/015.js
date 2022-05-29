// https://www.codewars.com/kata/558c04ecda7fb8f48b000075/javascript

function same(aArr, bArr) {
  const a = [];
  const b = [];
  aArr.forEach((ele) => ele.forEach((num) => a.push(num)));
  bArr.forEach((ele) => ele.forEach((num) => b.push(num)));

  return a.sort((a, b) => a - b).join("") === b.sort((a, b) => a - b).join("");
}

// function same(aArr, bArr) {
//   const a = aArr
//     .flat()
//     .sort((a, b) => a - b)
//     .join("");
//   const b = bArr
//     .flat()
//     .sort((a, b) => a - b)
//     .join("");
//   return a === b;
// }

console.log(
  same(
    [
      [2, 5],
      [3, 6],
    ],
    [
      [5, 2],
      [3, 6],
    ]
  )
);
console.log(
  same(
    [
      [2, 5],
      [3, 6],
    ],
    [
      [6, 3],
      [5, 2],
    ]
  )
);
console.log(
  same(
    [
      [2, 5],
      [3, 6],
    ],
    [
      [6, 3],
      [2, 5],
    ]
  )
);
console.log(
  same(
    [
      [2, 3],
      [3, 4],
    ],
    [
      [4, 3],
      [2, 4],
    ]
  )
);
console.log(
  same(
    [
      [2, 3],
      [3, 2],
    ],
    [[2, 3]]
  )
);
console.log(same([], []));
