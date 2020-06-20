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


//let i = 0; // Start point
//let images = [];
//let time = 500;
//
//
//// Image List
//images[0] = "img/teddy_1.jpg";
//images[1] = "img/teddy_2.jpg";
//images[2] = "img/teddy_3.jpg";
//images[3] = "img/teddy_4.jpg";
//images[4] = "img/teddy_5.jpg";
//
//// Change images
//function changeImg(){
//    document.slide.src = images[i];
//
//    if(i < images.length - 1){
//        i++;
//    }else {
//        i = 0;
//    }
//
//    setTimeout("changeImg()", time);
//}
//
//window.onload = changeImg;
