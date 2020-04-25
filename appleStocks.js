const stockPrices = [40, 8, 11, 10, 25];

getMaxProfit = (stockPrices) => {
    let maxProfit = 0
    let ownedStocks = [stockPrices[0]]

    for(let i = 1; i < stockPrices.length; i++){
            let diff = stockPrices[i] - Math.min(...ownedStocks)
            if(diff > maxProfit){
                maxProfit = diff
            } 
            ownedStocks.push(stockPrices[i])
        }
    return maxProfit
}

console.log(getMaxProfit(stockPrices))

var maxProfit = function(prices) {
    
    let stockMax = 0
    let maxDif = 0
    
    for(let i = prices.length -1 ; i >= 0; i-- ){
        stockMax = Math.max(prices[i], stockMax)
        maxDif = Math.max(maxDif, stockMax - prices[i])
    }
    return maxDif
};