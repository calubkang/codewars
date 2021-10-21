function oddOrEven(array) {
    let sum = array.reduce((sum, current) => sum + current, 0);
    if (sum % 2 !== 0) return "odd";
    return "even";
}