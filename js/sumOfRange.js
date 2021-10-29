function getSum(a, b) {
    const nums = [a, b].sort((a, b) => a - b);
    let sum = 0;
    for (let i = nums[0]; i <= nums[1]; i++) {
        sum += i
    }
    return sum
}