function looseChange(cents) {

    let res = {
        'Nickels': 0,
        'Pennies': 0,
        'Dimes': 0,
        'Quarters': 0
    }

    if (cents <= 0) {
        return res
    }

    res['Quarters'] = Math.floor(cents / 25);
    cents -= res['Quarters'] * 25;
    res['Dimes'] = Math.floor(cents / 10);
    cents -= res['Dimes'] * 10;
    res['Nickels'] = Math.floor(cents / 5);
    cents -= res['Nickels'] * 5;
    res['Pennies'] = Math.floor(cents);

    return res
}