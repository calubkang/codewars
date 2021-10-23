function highAndLow(numbers) {
    const numArray = numbers.split(' ');
    let high = Math.max(...numArray);
    let low = Math.min(...numArray);
    return `${high} ${low}`
}