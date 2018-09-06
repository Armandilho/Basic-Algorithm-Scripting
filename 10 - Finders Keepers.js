function findElement(arr, func) {
    let num = 0;
    
    for(var i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num) === true) {
        return num;
      }
    }
    
    return undefined;
  }