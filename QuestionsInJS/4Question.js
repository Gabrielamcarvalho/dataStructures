// Given an array return the witch number was repeated first (recurring character)


function returningChar(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
               if(arr[i] === arr[j]){
                   return arr[i];
               } 
        }
    }
    return undefined;
} //not efficient, O(n^2)


function returningChar2(arr){
    let map = {};
    for(let i = 0; i < arr.length; i++){
        if(map[arr[i]] !== undefined){ //if element already exists in the obj 
            // map[arr[0]] -> map[2] -> doesnt exist yet. loop continue, when it exists return 
            return arr[i];
        } else {
            map[arr[i]] = i; //adding elements in the map obj
            //map[arr[0]] -> map[2] = 1; 
        }
        console.log(map);
    }
    return undefined;
} //O(n)



const arr = [2, 5, 1, 2, 3, 5, 1, 2, 4];

console.log(returningChar(arr));
console.log(returningChar2(arr));







