//Aggancio il container
const containerEl = document.querySelector('.container');
//Creo un div
const divEl = document.createElement('div');
//Inserisco il div nel container
containerEl.append(divEl);
//Aggiungo al div la classe 'images'
divEl.classList.add('images');
//Aggancio il div tramite la sua classe
let imagesEl = document.querySelector('.images');
imagesEl.src = 'img/01.webp';






