function generateHashtag(str) {
    if (str.replace(/\s/g, '') === '') {
        return false
    }

    let res = '#'
    str.split(' ').forEach(word => {
        res += word.charAt(0).toUpperCase() + word.slice(1)
    })
    if (res.length <= 140) {
        return res
    }
    return false


}