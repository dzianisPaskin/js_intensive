Array.prototype.myFilter = function (callback, context) {

  if (!(this instanceof Array)) {
    throw new TypeError('Array.prototype.myFilter was called on wrong type')
  }
  if(typeof callback !== 'function') {
    throw new TypeError(`Array.prototype.myFilter ${callback} is not a function.`)
  }

 
  var resultArr = [];
  
  for (i = 0; i < this.length; i++) {
      if (callback.call(context, this[i], i, obj)) {
        resultArr.push(this[i])
      }
  
  }

  return resultArr;
};
