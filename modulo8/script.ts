//Interfaces do DOM

/* querySelector 
    - Quando selecionamos um elemento do DOM com o querySelector, 
    o objeto retornado dependerá da string que passamos no método 
*/
//HTMLVideoElement extends HTML Element -> HTML Element extends Element
document.querySelector('video'); //HTMLVideoElement
document.querySelector('img'); //HTMLImageElement

const video = document.querySelector('#videoprincial'); //Ao passar um id ele identifica como um Element. Mas não sabe assegurar qual classe que é
//video?.volume;-> Retorna um erro
if(video instanceof HTMLVideoElement){
  video.volume;
}

const links = document.querySelectorAll(".link"); //NodeList
links.forEach((link)=>{
  if(link instanceof HTMLAnchorElement){
    console.log(link.href)
  }
})
const arrayLinks = Array.from(links)