function deleteNth(arr, n) {
    let count = {};
    return arr.filter(ele => {
        count[ele] = (count[ele] || 0) + 1;
        return count[ele] <= n;
    })
}