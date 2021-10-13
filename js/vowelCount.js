function getCount(str) {
    let vowelsCount = 0;
    let vowels = 'aeiou';
    str.split('').forEach(char => {
        if (vowels.includes(char)) {
            vowelsCount += 1
        }
    })
    return vowelsCount;
}