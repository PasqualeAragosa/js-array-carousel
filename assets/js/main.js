//Seleziono il carosello
const carouselEl = document.querySelector('.carousel');

//Array di immagini
const imagesList = [
    "assets/img/01.webp",
    "assets/img/02.webp",
    "assets/img/03.webp",
    "assets/img/04.webp",
    "assets/img/05.webp",
];

//Creo una variabile per tenere traccia dell'immagine corrente
let imageCurr = 0;

//Scorro tutte le immagini
for (let i = 0; i < imagesList.length; i++) {
    const  imageNow = imagesList[i];
    const imageMark = `<img class="${i === imageCurr ? 'active' : ''}" src="${imageNow}" alt="">`;
    carouselEl.insertAdjacentHTML("afterbegin", imageMark);
}









