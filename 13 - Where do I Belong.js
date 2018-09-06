function getIndexToIns(arr, num) {
  
    var numArray = arr.sort((a, b) => a - b);
    numArray.join(",")
    
    for(var i  = 0 ; i < arr.length ; i++){
      if (num < arr[i] || num === arr[i]){
        return i;
      }
    }
    return i
  }
  