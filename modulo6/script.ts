//null -> tipo primitivo que representa ausência de valor

const button = document.querySelector('button');
//Necessário fazer verificação se o elemento existe
button?.click();

//undefined -> variável existe na memória mas nenhum valor foi definido a ela

let total;

console.log(total);

//Propriedades opcionais 
interface Product{
  nome?: string;
}

const livro: Product={
}

