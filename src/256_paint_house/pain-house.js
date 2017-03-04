/**
 * There are a row of n houses, each house can be painted with one of the 
 * three colors: red, blue or green. The cost of painting each house with a 
 * certain color is different. You have to paint all the houses such that no 
 * two adjacent houses have the same color.
 *
 * The cost of painting each house with a certain color is represented by a 
 * n x 3 cost matrix. For example, costs[0][0] is the cost of painting house 
 * 0 with color red; costs[1][2] is the cost of painting house 1 with color 
 * green, and so on... Find the minimum cost to paint all houses.
 *
 * Note:
 *  All costs are positive integers.
 * 
 * Solution Reference:
 *  https://discuss.leetcode.com/topic/21311/simple-java-dp-solution
 *  
 *  "The 1st row is the prices for the 1st house, we can change the matrix to 
 *  present sum of prices from the 2nd row. i.e, the costs[1][0] represent 
 *  minimum price to paint the second house red plus the 1st house."
 *
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    if (!costs.length) return 0;
    
    let n = costs.length;
  
    // going through the houses and record the minimum total cost for each color
    for (let i = 1; i < n; i++) {
        costs[i][0] += Math.min(costs[i-1][1], costs[i-1][2]);
        costs[i][1] += Math.min(costs[i-1][0], costs[i-1][2]);
        costs[i][2] += Math.min(costs[i-1][0], costs[i-1][1]);
    }

    return Math.min(costs[n-1][0], costs[n-1][1], costs[n-1][2]);
};
