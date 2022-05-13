String.prototype.camelCase = function () {
  console.log(
    this.split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("")
  );
};

"test case".camelCase();
"camel case method".camelCase();
"say hello ".camelCase();
" camel case word".camelCase();
"".camelCase();
