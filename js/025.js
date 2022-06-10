// https://www.codewars.com/kata/58e26b5d92d04c7a4f00020a/javascript

function palindrome(num) {
    if (typeof num !== "number" || num < 0) {
      return "Not valid"
    } else if (num.toString().length === 1) {
      return false
    } else {
      const frequency = {}
      num.toString().split("").forEach(num => frequency[num] = (frequency[num] || 0) + 1)
      let count = 0
      for (let ele in frequency) {
        if (num.toString().length % 2 === 0 && frequency[ele] % 2 !== 0) {
            return false
          } else if (num.toString().length % 2 !== 0 && frequency[ele] % 2 !== 0) {
            count++
          }
      }
      if (count <= 1) {
        return true
      } else {
        return false
      }
    }
}

palindrome(1212) // true
palindrome(89698) // true
palindrome(7653356) // true
palindrome(100134) // false
palindrome(13598) // false
palindrome("ACCDDCCA") // "Not valid"
palindrome("1212") // "Not valid"
palindrome(-4505) // "Not valid"