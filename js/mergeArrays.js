function mergeArrays(arr1, arr2) {
    arr1.forEach(num => {
        if (!arr2.includes(num)) {
            arr2.push(num);
        }
    })
    return arr2.sort((a, b) => a - b);
}