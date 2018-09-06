function factorialize(num){
  var valor = 1
  while(num > 0){
    valor = valor * num
    num--;
  }
  return valor;
}