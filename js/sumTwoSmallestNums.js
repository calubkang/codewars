function sumTwoSmallestNumbers(numbers) {
    let smallestTwo = numbers.sort((a, b) => a - b).splice(0, 2);
    return smallestTwo[0] + smallestTwo[1];
}