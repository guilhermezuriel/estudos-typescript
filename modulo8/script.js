//Interfaces do DOM
/* querySelector
    - Quando selecionamos um elemento do DOM com o querySelector,
    o objeto retornado dependerá da string que passamos no método
*/
//HTMLVideoElement extends HTML Element -> HTML Element extends Element
document.querySelector('video'); //HTMLVideoElement
document.querySelector('img'); //HTMLImageElement
var video = document.querySelector('#videoprincial'); //Ao passar um id ele identifica como um Element. Mas não sabe assegurar qual classe que é
//video?.volume;-> Retorna um erro
if (video instanceof HTMLVideoElement) {
    video === null || video === void 0 ? void 0 : video.volume;
}
