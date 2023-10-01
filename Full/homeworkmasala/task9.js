function findSmallestInteger(arr) {
  return Math.min(...arr);
}

const array1 = [34, 15, 88, 2];
console.log(findSmallestInteger(array1)); 

const array2 = [34, -345, -1, 100];
console.log(findSmallestInteger(array2)); 



// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.