function bingo(ticket, win) {
    let count = 0;
    for (let pair of ticket) {
        for (let char of pair[0]) {
            if (char.charCodeAt(0) === pair[1]) {
                count += 1
            }
        }
    }
    if (count >= win) {
        return "Winner!"
    } else {
        return "Loser!"
    }
}