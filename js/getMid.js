function getMiddle(s) {
    return s.length % 2 === 0 ? s.split('').splice(s.length / 2 - 1, 2).join('') : s.split('').splice(s.length / 2, 1).join('')
}