import header from './header';
import home from './home';
import menu from './menu';

header();
home();


const mainHomeDiv = document.querySelector(".body-center-div");

const ul = document.querySelector("ul");
ul.addEventListener('click', (e) => {
    if (e.target.innerHTML == 'Menu') {
        mainHomeDiv.classList.add("hidden");
        menu();
    }
});
