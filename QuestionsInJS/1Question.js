// Write a program that prints the numbers from 1 to 100. But for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz

const printNumber = () => {
  let arr = [];
  let newarr = [];

  for (let i = 1; i <= 100; i++) {
    arr.push(i);
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      arr[i] = 'FizzBuzz';
    } else if (arr[i] % 3 === 0) {
      arr[i] = 'Fizz';
    } else if (arr[i] % 5 === 0) {
      arr[i] = 'Buzz';
    }
  }
  console.log(arr.toString());
};

printNumber();
