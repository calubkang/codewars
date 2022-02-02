function titleCase(title, minorWords) {
    if (title === '') {
        return ''
    }
    let minor;
    if (minorWords != null) {
        minor = minorWords.split(' ').map(word => word.toLowerCase());
        return title.split(' ').map((word, i) => {
            if (i === 0 || !minor.includes(word.toLowerCase())) {
                return word[0].toUpperCase() + word.substr(1).toLowerCase()
            }
            else {
                return word.toLowerCase()
            }
        }).join(' ')
    } else {
        return title.split(' ').map(word => word[0].toUpperCase() + word.substr(1).toLowerCase()).join(' ')
    }
}