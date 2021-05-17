(function() {
    const stockPrices = [10, 7, 5, 8, 11, 9];

    // function getMaxProfit(stockPrices) {
    //     let maxProfit = 0;
    //     // loop thru each item
    //     for (let i = 0; i < stockPrices.length; i++) {
    //         // pick the first item as the buy
    //         const buy = stockPrices[i];
    //         for (let j = i + 1; j < stockPrices.length; j++) {
    //             const sell = stockPrices[j];
    //             let profit = 0;
    //             if (buy < sell) {
    //                 profit = sell - buy;
    //             }
    //             // store the difference update if its larger than the previously set one
    //             if (profit > maxProfit) {
    //                 maxProfit = profit
    //             }
    //         }
    //     }
    //     // at the end of the loop return the highest one
    //     return maxProfit;
    // }

    function getMaxProfit(stockPrices) {
        let minPrice = stockPrices[0];
        let maxProfit = 0;

        for (let i = 0; i < stockPrices.length; i++) {
            const currentPrice = stockPrices[i];

            minPrice = Math.min(minPrice, currentPrice);

            const potentialProfit = currentPrice - minPrice;

            maxProfit = Math.max(potentialProfit, maxProfit)

        }

        return maxProfit;

    }

    console.log(getMaxProfit(stockPrices));
})()




