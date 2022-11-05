import header from './header';
import home from './home';
import menu from './menu';
import staff from './staff';
import footer from './footer';

header();
home();
menu()
staff()
footer()


const ul = document.querySelector("ul");

function render(e) {
    const homeDiv = document.querySelector(".main-body");
    const menuDiv = document.querySelector(".menu-div");
    const staffDiv = document.querySelector(".staff-main");
    
    const homeLi = document.querySelector(".home-li")
    const menuLi = document.querySelector(".menu-li")
    const staffLi = document.querySelector(".staff-li")
    
    const hide = (elemOne, elemTwo) => {
        elemOne.classList.add("hidden");
        elemTwo.classList.add("hidden");
    }
    
    const show = (elem) => {
        elem.classList.remove("hidden");
    }
    
    const addUnderline = (elem) => {
        elem.classList.add("underline");
    }
    
    const removeUnderline = (elemOne, elemTwo) => {
        elemOne.classList.remove("underline");
        elemTwo.classList.remove("underline");
    }

    if (e.target.innerHTML == 'Menu') {
        show(menuDiv);
        hide(homeDiv, staffDiv);
        addUnderline(menuLi);
        removeUnderline(homeLi, staffLi);
    } else if (e.target.innerHTML == 'Staff') {
        show(staffDiv);
        hide(homeDiv, menuDiv);
        addUnderline(staffLi);
        removeUnderline(homeLi, menuLi);
    } else {
        show(homeDiv);
        hide(menuDiv, staffDiv);
        addUnderline(homeLi);
        removeUnderline(menuLi, staffLi);
    }
}

ul.addEventListener('click', render)