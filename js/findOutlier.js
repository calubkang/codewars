function findOutlier(integers) {
    integers.sort((a, b) => a % 2 === 0 ? -1 : 1);
    return integers[0] % 2 === integers[1] % 2 ? integers[integers.length - 1] : integers[0]
}