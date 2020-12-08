// Developer by Amadeu Júnior
// 9) Implemente um método divida um array por uma quantidade passada por
// parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

function arrayItems(array, quantity) {
  var chunk = [],
    i; // declara array vacio e indice de for
  for (
    i = 0;
    i <= array.length;
    i += quantity // loop que recorre el array
  )
    chunk.push(array.slice(i, i + quantity)); // push al array el tramo desde el indice del loop hasta el valor size + el indicador
  return console.log(chunk);
}

arrayItems([1, 2, 3, 4, 5], 2);
