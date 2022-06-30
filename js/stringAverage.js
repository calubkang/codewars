function averageString(str) {
    let numbers = {
        'zero': 0,
        'one': 1,
        'two': 2,
        'three': 3,
        'four': 4,
        'five': 5,
        'six': 6,
        'seven': 7,
        'eight': 8,
        'nine': 9
    }
    let nums = str.split(' ');
    let div = nums.length
    let average = Math.floor(nums.reduce((s, num) => numbers[num] + s, 0) / div);
    for (let num in numbers) {
        if (numbers[num] === average) {
            return num
        }
    }
    return 'n/a'
}