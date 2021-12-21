function alphabetPosition(text) {
    let alpha = ' abcdefghijklmnopqrstuvwxyz';
    let nums = [];
    text.toLowerCase().split(' ').join('').split('').forEach(char => {
        if (alpha.includes(char)) {
            nums.push(alpha.indexOf(char))
        }
    })
    return nums.join(' ')
}