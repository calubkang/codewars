function streetFighterSelection(fighters, position, moves) {
    let res = [], row = position[0], col = position[1];
    moves.forEach(move => {
        if (move === 'up' && row === 1) {
            row--
        } else if (move === 'down' && row === 0) {
            row++
        } else if (move === 'left') {
            col > 0 ? col-- : col = 5
        } else if (move === 'right') {
            col < 5 ? col++ : col = 0
        }
        res.push(fighters[row][col])
    })
    return res
}