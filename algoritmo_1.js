// Developer by Amadeu Júnior
// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

let arr = [];
function newArray(quant, char_) {
  for (let index = 0; index < quant; index++) {
    arr.push(char_);
  }
  return console.log(arr);
}

newArray(3, "a");
