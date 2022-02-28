function solve(s) {

    let alpha = ' abcdefghijklmnopqrstuvwxyz';
    let vowels = 'aeiou';

    return s.split('')
        .map(char => vowels.includes(char) ? ' ' : char)
        .join('')
        .split(' ')
        .map(sub => {
            let count = 0;
            for (let i = 0; i < sub.length; i++) {
                count += alpha.indexOf(sub[i])
            }
            return count
        }).sort((a, b) => b - a)
    [0]

};