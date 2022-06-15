function findSenior(list) {
    const oldestAge = list.sort((a, b) => b.age - a.age)[0].age;
    return list.filter(dev => oldestAge === dev.age)
}