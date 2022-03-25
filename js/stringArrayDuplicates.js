function dup(s) {
    return s.map(word => {
        return word.split('').filter((char, i, arr) => char !== arr[i + 1]).join('')
    })
    
};