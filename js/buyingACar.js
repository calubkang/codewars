function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {

    let available = startPriceOld - startPriceNew;
    let months = 0;
    let totalSavings = 0;

    while (available < 0) {

        months++;

        if (months % 2 === 0) {
            percentLossByMonth += 0.5
        }

        startPriceOld -= startPriceOld * percentLossByMonth / 100;
        totalSavings += savingperMonth;
        startPriceNew -= startPriceNew * percentLossByMonth / 100;

        available = startPriceOld + totalSavings - startPriceNew
    }
    return [months, Math.round(available)];
}