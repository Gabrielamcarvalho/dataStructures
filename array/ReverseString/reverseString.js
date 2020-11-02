//Create a function that reverses a string


function reverseString(str) {
  //check input
  if(!str || str.length < 2 || typeof str !== 'string'){
    return 'There is something wrong, this is invalid!';
  }
  const arrStr = [];
  const length = str.length;

  //fill array with string
  for (let i = 0; i < length; i++) {
    arrStr[i] = str.charAt(i);
  }
  //reverse array
  arrStr.reverse();

  return arrStr.join('');
}

//Transform the string in an array, reverse it and transform it again into a String
function reverseStringEasier(str) {
    if (!str || str.length < 2 || typeof str !== 'string') {
      return 'There is something wrong, this is invalid!';
    }
  return str.split('').reverse().join('');
}

const reverseStringFancier = str => [...str].reverse().join('');

const name = 'Gabriela Melnik Carvalho';
console.log(reverseString(name));
console.log(reverseStringEasier(name));
console.log(reverseStringFancier(name));