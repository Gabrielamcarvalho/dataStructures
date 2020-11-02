class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
  } //O(1)

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  } //O(1)

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }

    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }

    const newNode = new Node(value);

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;

    return this.printList();
  } //O(n) because we have to traverse

  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      return this.printList();
    }

    if (index >= this.length) {
      return console.error('Error, you entered an invalid index');
    }

    const leader = this.traverseToIndex(index - 1);
    const del = leader.next;

    leader.next = del.next;
    this.length--;

    return this;
  }

  //we have to traverse for lookup. O(n)
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  reverse() {
    if (!this.head.next) {
      //or if length ===1
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = this.head.next;

    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;

    return this.printList();
  }
}

const myLinkedList = new LinkedList(15);
myLinkedList.append(16);
myLinkedList.append(5);
myLinkedList.prepend(3);
myLinkedList.printList();
myLinkedList.insert(2, 20);
myLinkedList.insert(3, 34);
myLinkedList.remove(3);
myLinkedList.printList();
myLinkedList.reverse();
