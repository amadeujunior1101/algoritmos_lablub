// Developer by Amadeu Júnior
// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

function arrayItems(array, array2) {
  var equals = [];
  array.filter((item) => {
    if (array2.indexOf(item) !== -1) {
      // se for encontrado um valor nos dois arrays
      equals.push(item);
    }
  });

  return console.log(equals);
}

arrayItems([6, 8], [8, 9]);
