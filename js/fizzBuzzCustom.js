var fizzBuzzCustom = function (stringOne = 'Fizz', stringTwo = 'Buzz', numOne = 3, numTwo = 5) {
    let res = [];
    for (let i = 1; i <= 100; i++) {
        if (i % (numOne * numTwo) === 0) {
            res.push(stringOne + stringTwo)
        } else if (i % numOne === 0) {
            res.push(stringOne)
        } else if (i % numTwo === 0) {
            res.push(stringTwo)
        } else {
            res.push(i)
        }
    }
    return res
};