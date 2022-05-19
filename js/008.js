// https://www.codewars.com/kata/58039f8efca342e4f0000023/javascript

function changer(str) {
  return str
    .toLowerCase()
    .split("")
    .map((char) =>
      char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 && char !== "z"
        ? String.fromCharCode(char.charCodeAt(0) + 1)
        : char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 && char === "z"
        ? "A"
        : char
    )
    .map((char) =>
      char === "e" || char === "i" || char === "o" || char === "u"
        ? char.toUpperCase()
        : char
    )
    .join("");
}

changer("Cat30");
changer("Alice");
changer("sponge1");
changer("Hello World");
changer("dogs");
changer("z");
