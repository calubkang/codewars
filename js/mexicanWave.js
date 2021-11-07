function wave(str) {
    let wave = []
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == false) { }
        else {
            arr[i] = arr[i].toUpperCase();
            wave.push(arr.join(''));
            arr[i] = arr[i].toLowerCase()
        }
    }
    return wave
}