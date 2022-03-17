function travel(r, zipcode) {
    if (zipcode === '') {
        return ':/'
    }
    let adds = r.split(',').filter(address => {
        return address.split(' ').splice(address.split(' ').length - 2).join(' ') === zipcode
    });
    let strAndTown = [];
    let num = [];
    adds.forEach(address => {
        let arr = address.split(' ').filter((x, i) => i < address.split(' ').length - 2);
        num.push(arr[0]);
        strAndTown.push(arr.splice(1).join(' '))
    })

    return `${zipcode}:${strAndTown.join(',')}/${num.join(',')}`
}