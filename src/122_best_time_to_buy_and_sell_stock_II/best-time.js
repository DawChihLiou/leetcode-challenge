/**
 * Say you have an array for which the ith element is the price of a given stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete as many transactions 
 * as you like (ie, buy one and sell one share of the stock multiple times). However, you 
 * may not engage in multiple transactions at the same time (ie, you must sell the stock 
 * before you buy again).
 *
 * Solution reference: 
 *  https://discuss.leetcode.com/topic/726/is-this-question-a-joke/12
 *
 *  "it may not be obvious if one doesn't get the intuition right. No short allowed, to 
 *  max you profit, you will just need capture every uptick, that's it." - @ethan3
 *
 *  * @param {number[]} prices
 *   * @return {number}
 *    */
var maxProfit = function(prices) {
    let profit = 0;
    
    for (let i = 1; i < prices.length; i++)
        if (prices[i] > prices[i-1]) profit += prices[i] - prices[i-1];
    
    return profit;
};

var maxProfit2 = function(prices) {
    return prices.reduce((profit, price, i, prices) => 
            i > 0 && price > prices[i-1] ? profit + price - prices[i-1] : profit, 0);
};
