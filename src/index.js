import header from './header';
import home from './home';
import menu from './menu';
import staff from './staff'

header();
home();

const mainHomeDiv = document.querySelector(".main-body");

const ul = document.querySelector("ul");
ul.addEventListener('click', (e) => {
    if (e.target.innerHTML == 'Menu') {
        mainHomeDiv.classList.add("hidden");
        menu();
    } else if (e.target.innerHTML == 'Staff') {
        mainHomeDiv.classList.add("hidden");
        staff()
    }
});
