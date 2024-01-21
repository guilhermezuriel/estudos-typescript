//Crie uma função chamada toNumber
// A função pode receber number | string
var toNumber = function (value) {
  if (!(typeof value === 'string' || typeof value === 'number')) {
    throw new Error('Value deve ser um número ou uma string');
  }
  return Number(value);
};
var value = true;
toNumber(value);
console.log(typeof '200');
