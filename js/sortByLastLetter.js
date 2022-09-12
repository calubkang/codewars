function last(x) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    return x.split(' ').sort((a, b) => {
        return alpha.indexOf(a[a.length - 1]) - alpha.indexOf(b[b.length - 1])
    })
}