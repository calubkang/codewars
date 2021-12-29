function order(words) {
    let res = [];
    let wordsArr = words.split(' ');
    for (let i = 1; i <= wordsArr.length; i++) {
        wordsArr.forEach(word => {
            if (word.includes(i.toString())) {
                res.push(word)
            }
        })
    }
    return res.join(' ')
}