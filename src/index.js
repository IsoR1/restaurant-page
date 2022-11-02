import header from './header';
import home from './home';
import menu from './menu';
import contact from './contact'

header();
home();

const mainHomeDiv = document.querySelector(".body-center-div");

const ul = document.querySelector("ul");
ul.addEventListener('click', (e) => {
    if (e.target.innerHTML == 'Menu') {
        mainHomeDiv.classList.add("hidden");
        menu();
    } else if (e.target.innerHTML == 'Contact') {
        mainHomeDiv.classList.add("hidden");
        contact()
    }
});
