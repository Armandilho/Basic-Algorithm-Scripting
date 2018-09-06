function mutation(arr) {
    var sorted = [];
    var words = arr;
    var verific = true
  
  //colocar tudo em minusculo
    for (var i = 0; i < words.length; i++) {
        sorted.push(words[i].toLowerCase());
      }

    var a1 = sorted[0].split("");
    var b1 = sorted[1].split("");
  
    for(var j = 0 ; j < b1.length ; j++ ){

      if(a1.indexOf(b1[j]) === -1){
        verific = false;
      }
       
    }
    return verific;
}