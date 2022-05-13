function scramble(str1, str2) {
    let target = {}, scramble = {};
    for (let char of str2) {
        target[char] ? target[char]++ : target[char] = 1
    }
    for (let char of str1) {
        scramble[char] ? scramble[char]++ : scramble[char] = 1
    }
    for (let char in target) {
        if (target[char] > scramble[char] || !scramble[char]) {
            return false
        }
    }
    return true
}