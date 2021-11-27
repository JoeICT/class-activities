const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let popReturn1 = arr.pop();
let popReturn2 = arr.pop();
console.log(popReturn1, popReturn2);
// remove each of the first two items with shift(), saving each item to a variable
let shiftReturn1 = arr.shift();
let shiftReturn2 = arr.shift();
console.log (shiftReturn1, shiftReturn2);
// use push and unshift to add the variables back to the array in numerical order, 0-6

let addNums = nums.push(5, 6);
let addNums2 = nums.Unshift(0, 1);
console.log(nums);
