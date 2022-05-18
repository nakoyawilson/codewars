function revrot(str, sz) {
  if (str.length === 0 || sz === 0 || str.length < sz) {
    return "";
  }
  const numIterations = Math.floor(str.length / sz);
  const chunks = [];
  let startingChar = 0;
  let endingChar = sz;
  for (let i = 0; i < numIterations; i++) {
    chunks.push(str.slice(startingChar, endingChar));
    startingChar = endingChar;
    endingChar = endingChar + sz;
  }
  return chunks
    .map((chunk) => {
      if (
        chunk.split("").reduce((acc, curr) => acc + Number(curr) ** 3, 0) %
          2 ===
        0
      ) {
        return chunk.split("").reverse().join("");
      } else {
        return chunk.slice(1, sz) + chunk[0];
      }
    })
    .join("");
}

// revrot("1234", 0)
// revrot("", 0)
// revrot("1234", 5)
// s = "733049910872815764"
// revrot(s, 5)
