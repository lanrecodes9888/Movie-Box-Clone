import { generateAboutMovie, hideNav } from "./Scripts/header.js";

generateAboutMovie()
hideNav()

const main = document.querySelector('.js-main');

main.addEventListener('click', () => {
  document.querySelector('.js-nav').style.display = 'none';
  document.querySelector('.js-movie-container').addEventListener('click', () => {
    document.querySelector('.js-nav').style.display = 'none';
  });
  
})
