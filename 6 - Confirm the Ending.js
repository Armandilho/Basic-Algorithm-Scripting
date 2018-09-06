
function confirmEnding(str, target) {
  var revstr = str.split("").reverse().join("");
  var revtarget = target.split("").reverse().join("");
  var resultado = false;
  if(revstr.substring(0, target.length) == revtarget){
    resultado = true;
  }else{
    resultado = false;
  }
  return resultado
}