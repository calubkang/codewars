function solution(string) {
    let count = 0
    string.split('').forEach((char, i) => {
        if (char === char.toUpperCase()) {
            string = string.substring(0, i + count) + ' ' + string.substring(i + count);
            count += 1
        }
    })
    return string
}