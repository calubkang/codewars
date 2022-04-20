function disemvowel(str) {
    let vowels = 'aeiouAEIOU';
    return str.split('').filter(char => !vowels.includes(char)).join('')
}