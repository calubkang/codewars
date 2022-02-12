function validate(n) {
    let nums = String(n).split('');
    let counts;
    nums.length % 2 === 0 ?
        counts = nums.map((num, i) => i % 2 === 0 ? (num * 2 > 9 ? num * 2 - 9 : num * 2) : num) : counts = nums.map((num, i) => i % 2 === 0 ? num : (num * 2 > 9 ? num * 2 - 9 : num * 2))
    return counts.reduce((s, i) => s + Number(i), 0) % 10 == 0

}