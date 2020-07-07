const burger = document.querySelector('.burger');
const cercle = document.querySelector('.cercle');
const menu = document.querySelector('.menug');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

cercle.addEventListener('click', () => {
    cercle.classList.toggle('active');

});

document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function(ev) {
        document.getElementById('scrolldown').className = (window.pageYOffset < 20) ? "scrolldownVisible" : "scrolldownInvisible";

        document.getElementById('down').className = (window.pageYOffset < 18) ? "textVisible" : "textInvisible";

        document.getElementById('scrolltotop').className = (window.pageYOffset > 100) ? "scrolltotopVisible" : "scrolltotopInvisible";}
        });

//MENU BURGER TEDDIES

const showTeddies = document.querySelector('#collection');
var teddiesList = document.querySelector('#collection-name');

console.log(teddiesList)

showTeddies.onclick = function() {
    teddiesList.querySelector('li').style.top = 'auto';
}


