class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    //used _ just to show it is a private property, even that you can actually can access
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      //if is empty
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  } //O(1)

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      //if exists
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    } //O(1) if no collisions
    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        //if not empty
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  } // O(n) because it has to loop to the entire hashTable to get the items

  values() {
    const valueArrays = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        //if exists
        valueArrays.push(this.data[i][0][1]);
      }
    }
    return valueArrays;
  } // O(n) because it has to loop to the entire hashTable to get the items
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 45);
myHashTable.set('orange', 2);
console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());
console.log(myHashTable.values());
