var capitals = function (word) {
    let indices = [];
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) === word.charAt(i).toUpperCase()) {
            indices.push(i)
        }
    }
    return indices;
}