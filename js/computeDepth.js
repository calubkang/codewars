function computeDepth(x) {
    let nums = [];
    let count = 1;
    let multiplier = x
    while (nums.length < 10) {
        String(x).split('').forEach(dig => {
            if (!nums.includes(dig)) {
                nums.push(dig)
            }
        })
        count += 1;
        x = count * multiplier;
    }
    return count - 1
}