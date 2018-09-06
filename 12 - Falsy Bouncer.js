function bouncer(arr) {
    for(var i = 0 ; i < arr.length ; i++){
      console.log(!!(arr[i]));
    }
    return arr;
  }
  
  bouncer([7, "ate", "", false, 9]);