function to_nato(words) {
    return words.toLowerCase().split(' ').join('').split('').map(char => NATO[char] ? NATO[char] : char).join(' ');
}