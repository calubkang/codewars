function inArray(array1, array2) {
    return array1.filter(sub => {
        return array2.some(word => word.includes(sub))
    }).sort()
}