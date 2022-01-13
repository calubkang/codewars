function twoSum(numbers, target) {
    let res = [];
    numbers.forEach((num, i) => {
        let arr = [...numbers]
        if (arr.slice(0, i).concat(arr.splice(i + 1)).includes(target - num)) {
            res.push(i);
        }
    })
    return res
}