function anagrams(word, words) {
    let res = [];
    let sortedWord = word.split('').sort().join('');
    for (let cur of words) {
        let sortedCur = cur.split('').sort().join('');
        if (sortedCur === sortedWord) {
            res.push(cur)
        }
    }
    return res
}