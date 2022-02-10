function tripledouble(num1, num2) {
    let tripDubs = new Set();

    String(num1).split('').forEach((dig1, i1, arr1) => {
        if (dig1 === arr1[i1 + 1] && dig1 === arr1[i1 + 2]) {
            String(num2).split('').forEach((dig2, i2, arr2) => {
                if (dig1 === dig2 && dig2 === arr2[i2 + 1]) {
                    tripDubs.add(dig1)
                    arr2 = arr2.filter(n => n == dig2);
                }

            })
            arr1.filter(n => n == dig1);
        }
    })
    return tripDubs.size > 0 ? 1 : 0
}