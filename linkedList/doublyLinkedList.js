class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  } //O(1)

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;

    return this;
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
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;

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
    leader.prev = del.prev;
    this.length--;

    return this.printList();
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
}

const myLinkedList = new DoublyLinkedList(15);
myLinkedList.append(16);
myLinkedList.append(5);
myLinkedList.prepend(3);
myLinkedList.insert(2, 20);
myLinkedList.insert(3, 34);
myLinkedList.remove(3);
