//Aggancio il div tramite la sua classe "images" nel DOM
const imagesEl = document.querySelector('.images');

//Creo un array di immagini
const slides = [
    "assets/img/01.webp",
    "assets/img/02.webp",
    "assets/img/03.webp",
    "assets/img/04.webp",
    "assets/img/05.webp",
];

//Creo una variabile per tenere traccia dell'immagine attiva
let current = 0;

// Scorro tutte le immagini
    //aggancio il percorso dell'immagine corrente
    //salvo in una variabile il markup
    //inserisco il markup nel DOM
for (let i = 0; i < slides.length; i++) {
    const imageSrc = slides[i];
    const imageMarkup = `<img class="${i === current ? 'active' : ''}" src="${imageSrc}" alt="">`;
    imagesEl.insertAdjacentHTML('beforeend', imageMarkup);
}
  











