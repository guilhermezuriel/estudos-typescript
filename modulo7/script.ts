//Instance of 

class Product{
  //Declaração de tipagem em classes  
  nome: string;
  constructor(nome:string){
    this.nome = nome;
  }
}

const livro = new Product('A Guerra dos Tronos');
console.log(livro instanceof Product); //boolean

class Livro extends Product{
  autor:string;
  constructor(nome:string, autor:string){
    super(nome);
    this.autor = autor;
  }
}
class Jogo extends Product{
  jogadores: number;
  constructor(nome: string, jogadores:number){
    super(nome);
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string){
  if(busca === 'O Hobbit'){
    return new Livro('O Hobbit','J R. R. Tolkien');
  }
  if(busca === 'Dark Souls'){
    return new Jogo('Dark Souls', 1);
  }
}

const produto = buscarProduto('O Hobbit'); // produto: Livro | Jogo | undefined

//Verificando que produto é uma instacia de Livro, é impossível termos erro na propriedade autor
if(produto instanceof Livro){
  console.log('Livro' + produto?.autor); 
}

//extends

if(produto instanceof Product){
  console.log(produto.nome); //Apenas mostra a propriedade herdada de Product
}