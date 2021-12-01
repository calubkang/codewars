function makeBackronym(string) {
    return string.toUpperCase().split('').map(function (s) {
        return dict[s];
    }).join(' ');
}