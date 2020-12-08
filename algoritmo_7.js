// Developer by Amadeu Júnior
// 7) Implemente um método que compare a igualdade de dois arrays e retorne um
// valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

function arrayItems(array, array2) {
  if (array.sort().join(",") === array2.sort().join(",")) {
    return console.log(true);
  } else return console.log(false);
}

arrayItems([1, 2, 3, 4], [1, 2, 3, 4]);
