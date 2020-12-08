// Developer by Amadeu Júnior
// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

function arrayItems(array) {
  var arr = array.filter((item, i) => array.indexOf(item) === i);

  return console.log(arr);
}

arrayItems([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]);
