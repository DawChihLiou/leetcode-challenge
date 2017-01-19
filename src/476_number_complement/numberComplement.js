/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    return parseInt((num >>> 0)
      .toString(2)
      .split('')
      .reduce((acc, curr) => curr == 1 ? acc += 0 : acc += 1, ''), 2);
};
