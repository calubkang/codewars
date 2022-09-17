var majorityElement = function (nums) {
  let counts = {};
  nums.forEach(num => {
    if (counts[num]) {
      counts[num]++
    } else {
      counts[num] = 1
    }
  });
  for (let count in counts) {
    if (counts[count] > nums.length / 2) {
      return count
    }
  }
};