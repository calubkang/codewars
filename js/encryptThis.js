var encryptThis = function (text) {
    return text.split(' ').map(word => {
        if (word.length === 1) {
            return word.charCodeAt(0)
        } else if (word.length === 2) {
            return word.charCodeAt(0) + word[1]
        } else {
            let rest = word.slice(1);
            let first = rest.substr(rest.length - 1, 1);
            let last = rest.substr(0, 1);
            return word.charCodeAt(0) + first + rest.substr(1, rest.length - 2) + last;
        }
    }).join(' ')
}