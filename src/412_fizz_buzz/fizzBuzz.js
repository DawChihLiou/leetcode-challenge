/**
 * Write a program that outputs the string representation of numbers from 1 to n.
 *
 * But for multiples of three it should output “Fizz” instead of the number and 
 * for the multiples of five output “Buzz”. For numbers which are multiples of 
 * both three and five output “FizzBuzz”.
 *
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var output = [];
    
  for (var i = 1; i <= n; i++)
    output.push((i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i.toString());
    
  return output;
};
