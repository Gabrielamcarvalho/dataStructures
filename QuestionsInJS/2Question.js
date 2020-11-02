// Write a small program that will add all the items in an array of numbers and return the total using the Array sum function if it exists or using your custom function.

const sum = (arr) => {
  const sum = arr.reduce((accumulator, value) => {
    return accumulator + value;
  });

  return sum;
};

let arr = [1, 2, 3, 4];
console.log(sum(arr));
