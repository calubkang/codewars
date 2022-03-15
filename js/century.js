function whatCentury(year) {
    let cent = String(Math.ceil(Number(year) / 100))
    if (cent[1] === '1' && cent !== '11') {
        cent += 'st'
    } else if (cent[1] === '2' && cent !== '12') {
        cent += 'nd'
    } else if (cent[1] === '3' && cent !== '13') {
        cent += 'rd'
    } else {
        cent += 'th'
    }
    return cent
}