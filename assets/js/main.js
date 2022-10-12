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


imagesEl.append(slides[0]);

// let current = 0;


// // loop inside the array
// for (let i = 0; i < slides.length; i++) {
//     const slideUrl = slides[i];
//     const slideMarkup = `<img class="${i === current ? 'active' : ''}" src="${slideUrl}" alt="">`
//     imagesEl.insertAdjacentHTML('beforeend', slideMarkup)
// }
  











