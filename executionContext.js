Array.prototype.myFilter = function (callback, context) {

  let thisArg = this
  let obj = Object(this)

  if (!(this instanceof Array)) {
    throw new TypeError('Array.prototype.myFilter was called on wrong type')
  }
  if(typeof callback !== 'function') {
    throw new TypeError(`Array.prototype.myFilter ${callback} is not a function.`)
  }

  if(arguments.length > 1) {
    thisArg = context;
  }
  var resultArr = [];
  
  for (i = 0; i < this.length; i++) {
    if(i in obj) {
      if (callback.call(thisArg, this[i], i, obj)) {
        resultArr.push(this[i])
      }
    }
  
  }

  return resultArr;
};
