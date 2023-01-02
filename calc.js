class Calculator {
  constructor(numX, numY) {
    if (arguments.length > 2 || arguments.length < 2) {
      throw new Error("The number of parameters entered is not correct.");
    } else if (!Number.isFinite(numX) || !Number.isFinite(numY)) {
      throw new Error("Not a number has been entered.");
    }
    this.numX = numX;
    this.numY = numY;
  }

  setX(x) {
    if (arguments.length === 0 || !Number.isFinite(x)) {
      throw new Error("The data is not correct.");
    }
    this.numX = x;
  }

  setY(y) {
    if (arguments.length === 0 || !Number.isFinite(y)) {
      throw new Error("The data is not correct.");
    }
    this.numY = y;
  }

  logSum() {
    console.log((this.numX + this.numY).toFixed(2));
  }

  logMul() {
    console.log((this.numX * this.numY).toFixed(2));
  }

  logSub() {
    console.log((this.maxNum - this.minNum).toFixed(2));
  }

  logDiv() {
    console.log(this.numX % this.numY);
  }
}

const calc = new Calculator(3.54545, 4);
