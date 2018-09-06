function reverseString(str){
    return str.split("").reverse().join("");
  }

//alternativa com loop
function reverseString(str){
    var reverse = [];
    for(var i = str.length - 1 ; i >= 0 ; i--){
      reverse.push(str[i]);
    }
    return reverse.join("");;
  }