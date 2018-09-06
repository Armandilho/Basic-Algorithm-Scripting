function largestOfFour(arr){
    var e = [];
    for(var i = 0; i < arr.length; i++){
      e.push(Math.max.apply(null, arr[i]));
    }
    return e;
  }