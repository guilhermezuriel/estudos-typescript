//Crie uma função chamada toNumber
// A função pode receber number | string


const toNumber = (value: number | string)=>{
    if(! ((typeof value === 'string') || (typeof value === 'number'))){
      throw new Error('Value deve ser um número ou uma string');
    }
    return Number(value);    
}

let value = 200;

toNumber(value);