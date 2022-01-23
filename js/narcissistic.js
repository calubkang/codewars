function narcissistic(value) {
    let arr = String(value).split('');
    return arr.reduce((s, x) => s + Number(x) ** (arr.length), 0) === value
}