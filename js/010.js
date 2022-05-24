// https://www.codewars.com/kata/5616868c81a0f281e500005c/javascript

function rank(st, we, n) {
  if (st === "") {
    return "No participants";
  } else if (n > we.length) {
    return "Not enough participants";
  }
  const nameArr = st.split(",");
  const pointsArr = nameArr.map(
    (ele, idx) =>
      (ele
        .toLowerCase()
        .split("")
        .reduce((acc, cur) => acc + (cur.charCodeAt(0) - 96), 0) +
        ele.length) *
      we[idx]
  );
  const rankArr = nameArr.map((ele, idx) => {
    const obj = {
      name: ele,
      points: pointsArr[idx],
    };
    return obj;
  });
  rankArr.sort((a, b) => {
    if (a.points === b.points) {
      return a.name < b.name ? -1 : 1;
    }
    return b.points - a.points;
  });
  console.log(rankArr);
  return rankArr[n - 1].name;
}

console.log(
  rank(
    "Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin",
    [4, 2, 1, 4, 3, 1, 2],
    4
  )
);
console.log(rank("Lagon,Lily", [1, 5], 2));
console.log(
  rank(
    "Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin",
    [4, 2, 1, 4, 3, 1, 2],
    8
  )
);
console.log(rank("", [4, 2, 1, 4, 3, 1, 2], 6));
console.log(
  rank("William,Willaim,Olivia,Olivai,Lily,Lyli", [1, 1, 1, 1, 1, 1], 1)
);
