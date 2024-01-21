var numeros = [10, 20, 30, 40, 50];
var valores = [10, 'taxas', 30, 'Produtos', 50];
function multiplo5(data) {
    return data.filter(function (value) { return value % 5 === 0; });
}
function filterValue(data) {
    return data.filter(function (value) { return typeof value === 'number'; });
}
console.log(multiplo5(numeros));
console.log(filterValue(valores));
