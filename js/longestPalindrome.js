longestPalindrome = function (s) {
    let palindromes = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length - i; j >= 1; j--) {
            let newStr = s.substr(i, j);
            if (newStr === newStr.split('').reverse().join('')) {
                palindromes.push(newStr.length);
            }
        }
    }
    if (palindromes.length > 0) {
        return Math.max(...palindromes)
    } else { return 0 }
}