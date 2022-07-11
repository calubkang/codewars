function sumDigits(number) {
    return String(Math.abs(number)).split('').reduce((s, num) => s + Number(num), 0)
}