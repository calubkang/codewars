function howManyPizzas(n) {
    let fraction = (n ** 2) / 64;
    let pizzas = Math.floor(fraction);
    let slices = Math.round((fraction - pizzas) * 8);
    return `pizzas: ${pizzas}, slices: ${slices}`
}