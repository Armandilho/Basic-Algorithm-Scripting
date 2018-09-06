function repeatStringNumTimes(str, num) {
  var repete = str.split();
  if(num > 0){
    for(var i = 0 ; i < num - 1 ; i++){
      repete.push(str);
    }
  }else{
    repete = [];
  }
  return repete.join("");
}