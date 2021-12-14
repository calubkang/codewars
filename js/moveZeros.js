function moveZeros(arr) {
    let filtered = arr.filter(value => value !== 0);
    const difference = arr.length - filtered.length
    for (let i = 0; i < difference; i++) {
        filtered.push(0)
    }
    return filtered
}