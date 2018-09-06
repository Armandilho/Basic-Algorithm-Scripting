function frankenSplice(arr1, arr2, n) {
    var primeiralista = arr1;
    var segundalista = arr2.slice();
    
    var reserva = segundalista.splice(n, (arr2.length - n));
  
    for(var i = n ; i < n + primeiralista.length ; i++){
      segundalista[i] = primeiralista[i - n];
    }
    
    var tamanho = segundalista.length;
    var teste = reserva.length;
    
    for(var j = tamanho; j < tamanho + teste ; j++){
      segundalista[j] = reserva[j - tamanho];
    }
  
    return segundalista;
    
  }
  // array, array, number - > array
  // Insert the first array into the second starting from the index.
  
  //um loop que vai apagar, a partir de index, todos os elementos da segunda array
  //então vai inserir, a partir de index todos os elementos da primeira array na
  //segunda, e depois disso vai inserir os elementos da segunda array que foram
  //removidos.
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));