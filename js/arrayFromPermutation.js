var buildArray = function (nums) {
  return nums.map((num, i, arr) => arr[arr[i]])
};