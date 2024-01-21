const numeros = [10,20,30,40,50];
const valores = [10, 'taxas', 30, 'Produtos', 50];

function multiplo5(data: number[]){
  return data.filter(value => value%5 === 0);
}

function filterValue(data: (string | number)[]){
  return data.filter(value => typeof value === 'number');
}

console.log(multiplo5(numeros));
console.log(filterValue(valores))