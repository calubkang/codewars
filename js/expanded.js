function expandedForm(num) {
    let length = String(num).length;
    let res = [];
    String(num).split('').forEach((el, i) => {
        if (Number(el) > 0) {
            res.push(el.padEnd(length - i, '0'))
        }
    })
    return res.join(' + ')
}