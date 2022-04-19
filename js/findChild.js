function findChildren(string) {
    let alpha = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
    return string.split('')
        .sort((a, b) => alpha.indexOf(a) - alpha.indexOf(b))
        .join('')
};