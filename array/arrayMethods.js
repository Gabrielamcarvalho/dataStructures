const array = [1, 2, 50, 32];

const double = [];

//For Each - Loops through the elements but doesn't change the original array
const newArray = array.forEach((num) => {
  double.push(num * 2);
}); //Big O(2n)

//Map - always need to return something. It returns a value and stores it in a new array (mapArray in the example). to loop through a simple array, USE MAP
const mapArray = array.map((num) => num * 2); // Big O(2n)

//Filter - filter an array with a condition and returns the values and it will be store in a new array (filterArray in the example)
const filterArray = array.filter((num) => num > 5); //Big O(2n)

//Reduce - it takes an accumulator and the argument. The accumulator stores a value to use it in the function
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 5); //5 is the accumulator . Big O(2n);

console.log('forEach', double);
console.log('map', mapArray);
console.log('filter', filterArray);
console.log('reduce', reduceArray);
