class Stack {
  constructor() {
    this.stack = [];
  }
  push(item) {
    this.stack.push(item);
  }
  pop() {
    this.stack.pop();
  }
  peek() {
    if(this.stack.length == 0) {
      return null
    }
    return this.items[this.items.lenght - 1]
  }
  getSize() {
    return this.items.length
  }
  isEmpty() {
    return this.getSize() === 0
  }
 }
