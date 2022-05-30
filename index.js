
const openFlash = document.querySelector('.open-flash');
const openPiano = document.querySelector('.open-piano');
const openSpace = document.querySelector('.open-space');

const closeFlash = document.querySelector('.close-flash');
const closePiano = document.querySelector('.close-piano');
const closeSpace = document.querySelector('.close-space')

const windowFlash = document.querySelector('.window-flash');
const windowPiano = document.querySelector('.window-piano');
const windowSpace = document.querySelector('.window-space');

const toggleButton = document.getElementsByClassName('hamburger')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

openFlash.addEventListener('click', () => {
    windowFlash.style.visibility = 'visible';
})
  
closeFlash.addEventListener('click', () => {
    windowFlash.style.visibility = 'hidden';
})

openPiano.addEventListener('click', () => {
  windowPiano.style.visibility = 'visible';
})

closePiano.addEventListener('click', () => {
  windowPiano.style.visibility = 'hidden';
})

openSpace.addEventListener('click', () => {
  windowSpace.style.visibility = 'visible';
})

closeSpace.addEventListener('click', () => {
  windowSpace.style.visibility = 'hidden';
})


toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})