class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  //Access: O(1)
  get(index) {
    return this.data[index];
  }


  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  //Insert: O(n) because we have to shift
  insert(item) {
    this.shiftItemsRight(item);
    return this.length;
  }

  //Deletion: O(n) because we have to shift
  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItemsLeft(index);
    return item;
  }

  //Search: O(n) because we have to loop through the array
  searchArray(item){
      for (let i = 0; i < this.length; i++){
          if (this.data[i] === item){
              return `'Item was found at index ${i}`;
          }
      }
  }

  shiftItemsLeft(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  shiftItemsRight(item) {
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = item;
    this.length++;
  }
}

const newArray = new myArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.pop();
newArray.deleteAtIndex(0);
newArray.push('are');
newArray.push('nice');
newArray.insert('mini');
newArray.insert('hihi');
newArray.insert('hwllo');
newArray.insert('xau');
console.log(newArray.searchArray('hihi'));
console.log(newArray);
