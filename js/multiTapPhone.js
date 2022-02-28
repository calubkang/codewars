function presses(phrase) {
    let letters = {
        '*#1ADGJMPTW ': 1,
        '0BEHKNQUX': 2,
        'CFILORVY': 3,
        'SZ234568': 4,
        '79': 5
    }
    let count = 0;
    phrase.toUpperCase().split('').forEach(char => {
        for (let presses in letters) {
            if (presses.includes(char)) {
                count += letters[presses]
            }
        }
    })
    return count
}