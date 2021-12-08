function zeros(n) {
    while (n !== 0) {
        return Math.floor(n / 5) + zeros(Math.floor(n / 5))
    } return 0
}