/*
First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:

The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
The values are the price (in US dollars) of one share of Apple stock at that time.
So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.
For example:

const stockPrices = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPrices);

Returns 6 (buying for $5 and selling for $11)
*/

const getMaxProfit = (stockPrices) => {
    let maxPrice = [];
    let lowestPrice;

    for (let i = 1; i < stockPrices.length; i++) {
        if (i === 1) {
            maxPrice[0] = stockPrices[i];
            maxPrice[1] = i;
        } else {
            if (maxPrice[0] < stockPrices[i]) {
                maxPrice[0] = stockPrices[i];
                maxPrice[1] = i;
            }
        }
    }

    for (let i = maxPrice[1] - 1; i > 0; i--) {
        if (i === maxPrice[1] - 1) {
            lowestPrice = stockPrices[i];
        } else {
            if (lowestPrice > stockPrices[i]) {
                lowestPrice = stockPrices[i];
            }
        }
    }

    return maxPrice[0] - lowestPrice
}

console.log(getMaxProfit([10, 7, 5, 8, 11, 9]));