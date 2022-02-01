String.prototype.camelCase = function () {
    return this.split(' ').filter(word => word !== '').map((word, i) => word[0].toUpperCase() + word.substr(1).toLowerCase()).join('')
}