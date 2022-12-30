class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return `${this.value}`;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //adds a node at the end of the list
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  //remove node from end of list
  pop() {
    if (!this.tail) {
      return false;
    }

    const poppedNode = this.tail;

    if (this.head !== this.tail) {
      const newTail = this.getNodeAtIndex(this.length - 2);

      newTail.next = null;

      this.tail = newTail;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length--;

    return poppedNode;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  //remove first item in list
  shift() {
    if (!this.head) return false;

    const shiftedNode = this.head;

    const newHead = this.head.next;

    if (!newHead) {
      this.tail = newHead;
    }

    this.head = newHead;

    this.length--;

    return shiftedNode;
  }

  //return node at given index
  getNodeAtIndex(index) {
    if (index >= this.length || index < 0) return null;

    let currentNode = this.head;
    let currentIndex = 0;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  //change the node at the given index
  setNodeAtIndex(val, index) {
    const foundNode = this.getNodeAtIndex(index);

    if (foundNode) {
      foundNode.value = val;
      return foundNode;
    }

    return null;
  }

  //insert a new node at the index with the given value
  insertAtIndex(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      return this.unshift(val);
    }

    if (index === this.length) {
      return this.push(val);
    }

    const newNode = new Node(val);
    const after = this.getNodeAtIndex(index);
    const before = this.getNodeAtIndex(index - 1);
    newNode.next = after;
    before.next = newNode;

    this.length++;
    return this;
  }

  // remove node from index
  removeFrom(index) {
    if (index < 0 || index >= this.length) {
      return false;
    }

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    const before = this.getNodeAtIndex(index - 1);
    const removedNode = this.getNodeAtIndex(index);
    before.next = removedNode.next;
    removedNode.next = null;

    this.length--;
    return removedNode;
  }

  printList() {
    if (this.head) {
      let current = this.head;
      while (current.next) {
        console.log(current);
        current = current.next;
      }
      console.log(current);
    } else {
      console.log("empty list");
    }
  }
}

