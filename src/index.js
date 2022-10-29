import  header from './header';
// import { createHomeTab } from './home'
import home from './home';

header();
home();

const ul = document.querySelector("ul");
ul.addEventListener('click', (e) => {
    if (e.target.innerHTML !== 'Home') {
        console.log(e.target)
    }
});