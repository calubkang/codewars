function high(x) {
    let words = x.split(' ');
    let scores = [];
    words.forEach(word => {
        scores.push(score(word))
    })
    return words[scores.indexOf(Math.max(...scores))]
}

function score(str) {
    let alpha = ' abcdefghijklmnopqrstuvwxyz';
    return str.split('').reduce((sum, char) => sum + alpha.indexOf(char), 0)
}