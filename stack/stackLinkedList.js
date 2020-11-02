class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  //LAST IN FIRST OUT!!!
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top; // we hold the top if we don't want javascript to transform in garbage, if we don't need we can delete this part.
    this.top = this.top.next;
    this.length--;
    return this;
  }

  //isEmpty
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop();
console.log(myStack);
//Because discord was the last entered it will be the first taken out

//Discord
//Udemy
//google
