function removeSmallest(numbers) {
    if (numbers.length < 2) {
        return []
    }
    let smallest = Math.min(...numbers);
    let res = [];
    numbers.forEach((num, i) => {
        if (i !== numbers.indexOf(smallest)) {
            res.push(num)
        }
    })
    return res
}