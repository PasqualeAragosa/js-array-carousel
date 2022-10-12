//Aggancio il div tramite la sua classe "images" nel DOM
const imagesEl = document.querySelector('.images');

//Creo un array di immagini
const slides = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp',
];


imagesEl.append(slides[0]);



//Scorro tutte le immagini
// for (let i = 0; i < slides.length; i++) {
//     const slideEl = slides[i];
//     const slideMarkup = `<img class="active" src=>`;
    
// }








