function openOrSenior(data) {
    return data.map(nums => nums[0] >= 55 && nums[1] > 7 ? 'Senior' : 'Open')
}