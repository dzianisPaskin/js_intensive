class Queue {
  constructor() {
    this.items = [];
  }


  enequeue(item) {
    this.items.push(item)
  }

  dequeue() {
    return this.item.shift()
  }

  peek() {
    return  this.items[0]
  }

  getSize() {
    return this.item.length;
  }

  isEmpty() {
    return this.getSize() === 0;
  }

}