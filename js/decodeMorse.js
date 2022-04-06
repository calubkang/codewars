let decodeMorse = function (morseCode) {
    return morseCode.split('   ').filter(ele => ele !== '').map(word => word.split(' ').map(code => MORSE_CODE[code]).join('')).join(' ')
}