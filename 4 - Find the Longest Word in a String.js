function findLongestWordLength(str) {
  var i = 0;
  var tamanho = 0;
  var valorfinal = 0;
  var teste = str.split(" ");
  for(i = 0; i < teste.length ; i++){
    tamanho = teste[i].length;
    if(tamanho > valorfinal){
      valorfinal = tamanho;
    }
  }
  return(valorfinal)
}