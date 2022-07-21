function digital_root(n) {
    let sum = String(n).split('').reduce((s, num) => s + Number(num), 0);
    if (String(sum).length > 1) {
        return digital_root(sum)
    }
    return Number(sum)
}