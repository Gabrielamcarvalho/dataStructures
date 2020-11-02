function mergeSortedArrays(arr1, arr2) {
  let mergedArr = [];

  //check input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  //filling the mergedArr with both arrays
  arr1.forEach((item) => mergedArr.push(item));
  arr2.forEach((item) => mergedArr.push(item));

  //sort array
  mergedArr.sort((a, b) => a - b);


  return mergedArr;
}


//join array 1 with array 2 and return it sorted
function mergeSortedArraysAgain(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

console.log(mergeSortedArrays([0, 4, 31], [4, 6, 30]));
console.log(mergeSortedArraysAgain([0, 3, 4, 31], [4, 6, 30]));
