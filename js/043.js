// https://www.codewars.com/kata/53b138b3b987275b46000115/javascript

function compareVersions(version1, version2) {
  const v1 = version1.split(".").map((num) => parseInt(num));
  const v2 = version2.split(".").map((num) => parseInt(num));
  if (v1.length > v2.length) {
    v2.push(0);
  } else if (v2.length > v1.length) {
    v1.push(0);
  }
  if (v1.every((num, idx) => num === v2[idx])) {
    return true;
  } else {
    for (let i = 0; i < v1.length; i++) {
      if (v1[i] !== v2[i]) {
        return v1[i] >= v2[i];
      }
    }
  }
}

console.log(compareVersions("11", "10")); // true
console.log(compareVersions("11", "11")); // true
console.log(compareVersions("10.4.6", "10.4")); // true
console.log(compareVersions("10.4", "10.4.8")); // false
console.log(compareVersions("10.4", "11")); // false
console.log(compareVersions("10.4", "10.10")); // false
console.log(compareVersions("10.4.9", "10.5")); // false
console.log(
  compareVersions("94.10.152.41.103.23.148", "94.10.152.182.144.17.148.133")
); // false
