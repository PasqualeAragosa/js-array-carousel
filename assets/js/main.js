const imagesArray = [
  'assets/img/01.webp',
  'assets/img/02.webp',
  'assets/img/03.webp',
  'assets/img/04.webp',
  'assets/img/05.webp'
]
const classArray = [
  'spiderman',
  'ratchet',
  'fortnite',
  'cat',
  'avengers'
]
const slidesEl = document.querySelector('.slides');
const thumbsEl = document.querySelector('.thumbs');
const topEl = document.querySelector('.top');
const downEl = document.querySelector('.down');

let current = 0;

for (let i = 0; i < imagesArray.length; i++) {
  //Salvo il percorso dell'immagine
  const imagePath = imagesArray[i];
  //Salvo il percorso della classe
  const classPath = classArray[i];
  //Aggiungo 1 alla volta le immagini lasciando active la prima
  slidesEl.insertAdjacentHTML('afterbegin', `<img class= "image_slides ${classPath} ${i === current ? 'active' : ''}" src="${imagePath}" alt="">`);
  //Aggiungo 1 alla volta le immagini lasciando non opaca la prima
  thumbsEl.insertAdjacentHTML('afterbegin', `<img class= "image_thumbs ${classPath} ${i === current ? 'opacity' : ''}" src="${imagePath}" alt="">`);
}

let nextSlide;
let nextThumb;

topEl.addEventListener('click', function() {
  //Quando clicco il pulsante top la classe active passa all'immagine successiva(lo stesso per la thumb)
  //Seleziono l'immagini active
  const activeImg =  document.querySelector('.slides > img.active');
  //Seleziono l'immagine opacity_none
  const opacityImg = document.querySelector('.thumbs > img.opacity');
  //Rimuovo la variabile active
  activeImg.classList.remove('active');
  opacityImg.classList.remove('opacity');
  //Incremento la variabile contatore
  current++;
  const allImg = document.getElementsByClassName('image_slides');
  const allThumbs = document.getElementsByClassName('image_thumbs');
  if (current === 5) {
    current = 0;
    nextSlide = allImg[current];
    nextThumb = allThumbs[current];
  } else {
    nextSlide = allImg[current];
    nextThumb = allThumbs[current];
  }
  //Assegno la classe active all'immagine seguente
  nextSlide.classList.add('active');
  nextThumb.classList.add('opacity');
});

let prevSlide;
let prevThumb;

downEl.addEventListener('click', function() {
  //Quando clicco il pulsante top la classe active passa all'immagine successiva(lo stesso per la thumb)
  //Seleziono l'immagini active
  const activeImg =  document.querySelector('.slides > img.active');
  //Seleziono l'immagine opacity_none
  const opacityImg = document.querySelector('.thumbs > img.opacity');
  //Rimuovo la variabile active
  activeImg.classList.remove('active');
  opacityImg.classList.remove('opacity');
  //Incremento la variabile contatore
  current--;
  const allImg = document.getElementsByClassName('image_slides');
  const allThumbs = document.getElementsByClassName('image_thumbs');
  if (current === -1) {
    current = 4;
    prevSlide = allImg[current];
    prevThumb = allThumbs[current];
  } else {
    prevSlide = allImg[current];
    prevThumb = allThumbs[current];
  }
  //Assegno la classe active all'immagine seguente
  prevSlide.classList.add('active');
  prevThumb.classList.add('opacity');
});

