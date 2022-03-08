function deepCount(a) {
    let count = 0;
    a.forEach(ele => {
        if (typeof ele === 'object') {
            count++;
            count += deepCount(ele)
        } else {
            count++
        }
    })
    return count
}