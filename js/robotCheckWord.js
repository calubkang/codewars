function Robot() {
    this.words = ['i', 'already', 'know', 'the', 'word', 'thank', 'you', 'for', 'teaching', 'me', 'do', 'not', 'understand', 'input']
}

Robot.prototype.learnWord = function (string) {
    if (!/^[A-Za-z]*$/.test(string) || !string) {
        return 'I do not understand the input'
    }
    if (this.words.includes(string.toLowerCase()) || this.words.includes(string)) {
        return `I already know the word ${string}`
    } else {
        this.words.push(string.toLowerCase());
        return `Thank you for teaching me ${string}`
    }
}