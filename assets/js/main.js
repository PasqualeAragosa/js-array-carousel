const slides = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp'
];

//Seleziono elementi della DOM
const slidesElement = document.querySelector('.slides');
const nextEl = document.querySelector('.next');
const prevEl = document.querySelector('.prev');

//Seleziono l'indice dell'immagine 
let activeImg = 0;

//Inserisco dinamicamente le immagini
for (let i = 0; i < slides.length; i++) {
    const slideUrl = slides[i];
    const imgMarkup = `<img src="${slideUrl}" alt="" class="img-fluid ${i === activeImg ? 'active' : ''}">`;
    slidesElement.insertAdjacentHTML('beforeend', imgMarkup); 
}

let nextSlide;

//Aggiungo event Listener alla freccia next
nextEl.addEventListener('click', function() {
    //Seleziono l'immagine attiva
    const activeSlideEl = document.querySelector('.slides > img.active');
    //Rimuovo la classe active dall'immagine attiva
    activeSlideEl.classList.remove('active');
    //Inremento l'indice
    activeImg++;
    console.log('activeImg: ', activeImg);
    //Creo un array selezionando tutte le immagini
    const allSlides = document.getElementsByClassName('img-fluid');
    //
    if (activeImg === 5) {
        activeImg = 0;
    } else {
        //Seleziono l'immagine successiva
        nextSlide = allSlides[activeImg];
    }
    //Gli aggiungo la classe active
    nextSlide.classList.add('active');

});

let prevSlide;

//Aggiungo event Listener alla freccia prev
prevEl.addEventListener('click', function() {
    const activeSlideEl = document.querySelector('.slides > img.active');
    activeSlideEl.classList.remove('active');
    activeImg--;
    console.log('activeImg: ', activeImg);
    const allSlides = document.getElementsByClassName('img-fluid');
    if (activeImg === -1) {
        activeImg = 4;
        console.log('if - activeImg: ', activeImg);
    } else {
        prevSlide = allSlides[activeImg];
    }
    prevSlide = allSlides[activeImg];
    prevSlide.classList.add('active');
});