var checkIfPangram = function (sentence) {
  let chars = new Set();
  sentence.split(' ').join('').split('').forEach(char => chars.add(char));
  return chars.size === 26
};