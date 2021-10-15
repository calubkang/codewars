function addBinary(a, b) {
    let num = a + b; // get the sum
    let binary = ''  // empty string for binary code
    for (let i = highest(num); i >= 0; i--) {  //create function to return highest power of 2
        if (num - 2 ** i >= 0) {
            num -= 2 ** i
            binary += '1'
        } else {
            binary += '0'
        }
    }
    return binary;
}

function highest(num) { //this will give you the highest binary number to begin subtracting
    let count = 0;
    while (num > 2) {
        num /= 2;
        count += 1;
    }
    return count
}