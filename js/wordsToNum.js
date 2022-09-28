function wordsToMarks(string) {
  const alpha = ' abcdefghijklmnopqrstuvwxyz';
  return string.split('').reduce((total, curr) => total + alpha.indexOf(curr), 0)
}