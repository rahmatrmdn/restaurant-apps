import './../styles/main.css';
import './../styles/responsive.css';
import './../styles/skip-link.css'
import parseJSON, {data} from "./data";
import {showRestaurants} from './restaurants';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

document.addEventListener("DOMContentLoaded", function () {
    showRestaurants(parseJSON(data));
});

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});



