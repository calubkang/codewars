function cakes(recipe, available) {
    let num = [];
    if (Object.keys(recipe).every(item => item in available)) {
        Object.keys(recipe).forEach(ing => {
            num.push(Math.floor(available[ing] / recipe[ing]))
        })
    } else return 0
    num.sort((a, b) => a - b);
    return num[0]

}