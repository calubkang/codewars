function christmasTree(height) {
    let str = '';

    for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i);
        let stars = '*'.repeat(i * 2 - 1);
        str += spaces + stars + spaces;

        if (i !== height) {
            str += '\n'
        }

    }
    return str
}