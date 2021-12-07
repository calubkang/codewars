function incrementString(string) {
    if (isNaN(string[string.length - 1])) {
        return string + '1'
    }
    let alpha = '';
    let numStr = '';
    string.split('').forEach(char => isNaN(char) ? alpha += char : numStr += char);
    let num = (parseInt(numStr) + 1).toString();
    let numZeros = numStr.length - num.length;
    let zeros = '';
    for (let i = 0; i < numZeros; i++) {
        zeros += '0'
    }
    return alpha + zeros + num

}