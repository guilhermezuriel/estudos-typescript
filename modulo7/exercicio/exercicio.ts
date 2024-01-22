//Substitua o href do elemento a id= origamid, substitua o http:// por https://
const link = document.getElementById('origamid');

//link?.href -> return um erro de que não existe 

if(link){
  console.dir(link); //Object
}
//No Prototype do link temos um HTML Anchor Element, e no seu Prototype temos o HTML Element
//Logo, HTML Anchor Element extends HTML Element

if(link instanceof HTMLAnchorElement){
  link.href = link.href.replace("http://", "https:// ")
}