// Developer by Amadeu Júnior
// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

function invertArray(array) {
  let invert_Array = array.map((item, index, array) => {
    return array[array.length - index - 1];
  });
  return console.log(invert_Array);
}

invertArray([1, 2, 3, 4]);
