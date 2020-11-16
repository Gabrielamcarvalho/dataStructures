//Given two arrays, create a function that let's a user know (true/false) wheather these two arrays contain any common items

function containsCommonItem(arr1, arr2) {
  //loop through first array and create object where properties === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      //if doesn't exist
      const item = arr1[i];
      map[item] = true;
    }
  }

  //loop through second array and check if item in second array exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
} //O(n) time complexity / O(a) Space complexity

//Simpler way with JavaScript
function containsCommonItem2(arr1, arr2) {
  //check the first array, iterate for each item
  //If array2 includes the item from array 1
  //return true
  return arr1.some((item) => arr2.includes(item));
}

const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['s', 'p', 'q'];
const arr3 = ['z', 'x'];
console.log(containsCommonItem(arr1, arr3));
console.log(containsCommonItem2(arr1, arr2));
//2 parameters - arrays
//return true or false
//check if is more important memory/speed etc for the BigO
//brute force(the first idea that comes to the mind): 2 for loops O(n^2) - not the best option - space complexity small
//Comment!!
//Test with many options, example change array to number/null/[] etc
//Can we assume 2 parameters
//How to improve the code
