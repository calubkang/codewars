function findMissingLetter(array) {
    let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let indexDiff = alpha.indexOf(array[0])
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== alpha[i + indexDiff]) {
            return alpha[i + indexDiff]
        }
    }

}