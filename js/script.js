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
        document.getElementById('scrolldown').className = (window.pageYOffset < 20) ? "scrolldown-invisible" : "scrolldownVisible";
    };
});
