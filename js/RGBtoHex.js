function rgb(r, g, b) {
    let conv = {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: 'A',
        11: 'B',
        12: 'C',
        13: 'D',
        14: 'E',
        15: 'F',
    }

    let getFirstHex = function (num) {
        if (num < 0) {
            num = 0
        } else if (num > 255) {
            num = 255
        }
        return Math.floor(num / 16)
    }

    let getSecondHex = function (num) {
        if (num < 0) {
            num = 0
        } else if (num > 255) {
            num = 255
        }
        return num % 16
    }

    return [r, g, b].map(num => conv[getFirstHex(num)] + conv[getSecondHex(num)]).join('')
}