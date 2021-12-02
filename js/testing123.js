var number = function (array) {
    let numbered = [];
    array.forEach((str, index) => numbered.push(`${index + 1}: ${str}`));
    return numbered
}