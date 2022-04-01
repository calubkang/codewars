function sortTheInnerContent(words) {
    return words.split(' ').map(word => word.length < 2 ? word : word[0] + word.slice(1, word.length - 1).split('').sort().reverse().join('') + word.slice(word.length - 1)).join(' ');
}