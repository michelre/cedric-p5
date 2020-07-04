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

        document.getElementById('scrolltotop').className = (window.pageYOffset > 100) ? "scrolltotopVisible" : "scrolltotopInvisible";}
});

function souris(event)
{
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById('coordonnes').value = x + ', ' + y;

    var element = document.getElementById('center-mouse');
    element.style.position = 'absolute';
    element.style.left = x + 'px';
    element.style.top = y + 'px';
}

