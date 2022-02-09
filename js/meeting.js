function meeting(s) {
    return s.toUpperCase()
        .split(';')
        .map(name => name.split(':').reverse())
        .sort()
        .map(name => `(${name[0]}, ${name[1]})`)
        .join('');
}