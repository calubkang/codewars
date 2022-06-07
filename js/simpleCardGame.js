function winner(deckSteve, deckJosh) {
    let steveScore = 0;
    let joshScore = 0;
    let rank = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
    for (let i = 0; i < deckSteve.length; i++) {
        if (rank.indexOf(deckSteve[i]) > rank.indexOf(deckJosh[i])) {
            steveScore++
        } else if (rank.indexOf(deckSteve[i]) < rank.indexOf(deckJosh[i])) {
            joshScore++
        }
    }

    if (steveScore > joshScore) {
        return `Steve wins ${steveScore} to ${joshScore}`
    } else if (joshScore > steveScore) {
        return `Josh wins ${joshScore} to ${steveScore}`
    } else {
        return 'Tie'
    }
}