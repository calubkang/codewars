function solution(roman) {
    let value = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    return roman.split('').reduce((s, rom, i, arr) => value[rom] < value[arr[i + 1]] ? s - value[rom] : s + value[rom], 0)
}