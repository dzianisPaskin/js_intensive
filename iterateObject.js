let myIterable = {  
  [Symbol.iterator]:  function() {

    if(this.from > this.to) {
      throw new Error('the value of from must be less than to')
    } else if(!myIterable.hasOwnProperty('from') || !myIterable.hasOwnProperty('to')) {
     throw new Error('Specify the properties of the object "from" and "to".')
    } else if(typeof this.from !== 'number' || typeof this.to !== 'number') {
      console.log(this.from)
      throw new Error('The values must be the numbers!')
    }

    return {
      
      current: this.from,
      last: this.to,
      
      next() {   
        if (this.current <= this.last) {
          return { done: false, value: this.current++ }
        } else {
          return { done: true }
        }
      }
    }
  }
}


// Big O: O(1)