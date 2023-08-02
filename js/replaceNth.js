function replaceNth(text, n, oldValue, newValue) {

  if (n < 1) {
    return text
  }

  let count = 1

  return text.split('')
  .map(char => {
    if (char !== oldValue) {
      return char
    } else {
      if (count === n) {
        count = 1
        return newValue
      } else {
        count++
        return char
      }
    }
  })
  .join('')
}

console.log(replaceNth("Vader said: No, I am your father!", 2, 'a', 'o'), "Vader soid: No, I am your fother!")
console.log(replaceNth("Vader said: No, I am your father!", 4, 'a', 'o'), "Vader said: No, I am your fother!")

