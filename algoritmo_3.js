// Developer by Amadeu Júnior
// 3) Implemente um método que limpe os itens desnecessários de um array (false,
// undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

function cleanArray(array) {
  let searchBy = [undefined, ""];

  for (let index = 0; index < searchBy.length; index++) {
    let index_array = array.indexOf(searchBy[index]);
    while (index_array >= 0) {
      array.splice(index_array, 1);
      index_array = array.indexOf(searchBy);
    }
  }

  return console.log(array);
}

cleanArray([1, 2, "", undefined]);
