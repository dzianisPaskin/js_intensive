const selectFromInterval = (arrOfNums, fValOfIntrvl, sValOfIntrvl) => {
  
  if(!Array.isArray(arrOfNums)) {
    throw new Error('You have to pass an array')
  } else if(arrOfNums.some(n=> typeof n !== 'number' || isNaN(n))) {
    throw new Error('You have to pass an array containing only numbers')
  } else if (isNaN(fValOfIntrvl) || isNaN(sValOfIntrvl) || typeof fValOfIntrvl !== 'number' || typeof sValOfIntrvl !== 'number') {
    throw new Error('Invalid number!')
  } else {
    let arr = arrOfNums;
    const aMax = Math.max(fValOfIntrvl, sValOfIntrvl) ;
    const bMin = Math.min(fValOfIntrvl, sValOfIntrvl);

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      if (val < bMin || val > aMax) {
        arr.splice(i, 1);
        i--;
      }
    }
    console.log(arr)
  }
}

