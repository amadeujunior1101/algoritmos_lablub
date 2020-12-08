// Developer by Amadeu Júnior
// 8) Implemente um método que remova os aninhamentos de um array de arrays para
// um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

function arrayItems(array) {
  let arrayFlat = array.flat();

  console.log(arrayFlat);
}

arrayItems([1, 2, [3], [4, 5]]);
