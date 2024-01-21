async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();
  console.log(data);
  showProduct(data);
}

fetchProduct();
//Introdução a definição da tipagem por interfaces
interface API{
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;
  empresaFabricante: {
    fundacao: number;
    nome: string;
    pais: string
  };
  empresaFundadora: {
    fundacao: number;
    nome: string;
    pais: string
  };
}

function showProduct(data:API) {
  document.body.innerHTML = `
      <div>
        <h2>${data.nome}</h2>
        <p>${data.preco}</p>
        <p>${data.descricao}</p>
      </div>
    `;
}
