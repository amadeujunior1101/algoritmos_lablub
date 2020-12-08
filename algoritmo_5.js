// Developer by Amadeu Júnior
// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro
// depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

function arrayItems(array, item1, item2) {
  let searchBy = [item1, item2];
  let arr = array.filter((item) => {
    if (searchBy[0] !== item && searchBy[1] !== item) return true;
  });

  return console.log(arr);
}

arrayItems([5, 4, 3, 2, 5], 5, 3);
