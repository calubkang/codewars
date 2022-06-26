function shortestStepsToNum(num) {
    let count = 0;

    if (num % 2 && num > 1) {
        count++;
        num--;
    }
    while ((num % 2 === 0) && num > 1) {
        count++;
        num /= 2;
        if (num % 2 && num > 1) {
            count++;
            num--
        }
    }

    return count
}