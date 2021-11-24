const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let firstA = arr.indexOf("a");
let firstB = arr.indexOf("b");
let firstC = arr.indexOf("c");

console.log("first A...")
// find the last index of "a", "b", and "c"
let lastA = arr.lastIndexOf("a");
let lastB = arr.lastIndexOf("b");
let lastC = arr.lastIndexOf("c");

console.log("fist A...", firstA, "first B...", firstB, "first C...", firstC);

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

function removeDups(array, letter){
let firstindex = array.indexOf(letter);
let lastindex = array.lastIndexOf(letter);

while (firstindex !== lastindex) {
  array.splice(lastindex, 1);
  lastindex = array.lastIndexOf(letter);
}
return array
};
