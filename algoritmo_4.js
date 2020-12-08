// Developer by Amadeu Júnior
// 4) Implemente um método que a partir de um array de arrays, converta em um
//objeto com chave e valor.
// Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

function convertToObject(array) {
  let position = [];

  for (let index = 0; index < array.length; index++) {
    position[index] = array[index];
  }
  return console.log({
    [position[0][0]]: position[0][1],
    [position[1][0]]: position[1][1],
  });
}

convertToObject([
  ["c", 2],
  ["d", 4],
]);
