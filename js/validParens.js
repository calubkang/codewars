function validParentheses(parens) {
    if (parens.length === 0) {
        return true
    }
    let count = 0;
    for (let i = 0; i < parens.length; i++) {
        parens[i] === '(' ? count++ : count--;
        if (count < 0) {
            return false
        }
    }
    return count === 0
}