function firstNonRepeatingLetter(s) {
    let small = s.toLowerCase();
    for (let i = 0; i < s.length; i++) {
        if (small.indexOf(small[i]) === small.lastIndexOf(small[i])) {
            return s[i]
        }
    } return ''
}