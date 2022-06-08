
function encodeStr(s, shift) {
    let lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
    let upperAlpha = lowerAlpha.toUpperCase()

    let res = '';
    res += s[0].toLowerCase();
    res += lowerAlpha[(lowerAlpha.indexOf(res[0]) + shift) % 26];

    s.split('').forEach(char => {
        if (/^[A-Za-z]*$/.test(char)) {
            char === char.toLowerCase() ? res += lowerAlpha[(lowerAlpha.indexOf(char) + shift) % 26] : res += upperAlpha[(upperAlpha.indexOf(char) + shift) % 26]
        } else {
            res += char
        }
    })
    let resArr = [];
    let ln = res.length
    for (let i = 0; i < ln; i += Math.ceil(ln / 5)) {
        resArr.push(res.slice(i, i + Math.ceil(ln / 5)))
    }
    return resArr
}

function decode(arr) {
    let lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';
    let upperAlpha = lowerAlpha.toUpperCase();
    let res = '';
    let shift = lowerAlpha.indexOf(arr[0][1]) - lowerAlpha.indexOf(arr[0][0]);
    let code = arr.join('');
    for (let i = 2; i < code.length; i++) {
        if (/^[A-Za-z]*$/.test(code[i])) {
            code[i] == code[i].toLowerCase() ? res += lowerAlpha[(lowerAlpha.indexOf(code[i]) - shift + 26) % 26] : res += upperAlpha[(upperAlpha.indexOf(code[i]) - shift + 26) % 26]

        } else {
            res += code[i]
        }
    }
    return res
}