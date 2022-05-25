function sortThePile(pileOfTowels, weeklyUsedTowels) {

    weeklyUsedTowels.forEach(numTowels => {

        let sortedTowels = pileOfTowels
            .splice(pileOfTowels.length - numTowels)
            .sort()
            .reverse();

        pileOfTowels = pileOfTowels.concat(sortedTowels)

    });

    return pileOfTowels
}