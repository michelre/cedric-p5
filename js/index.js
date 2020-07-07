var teddies = getTeddies();
teddies.then(function (response) {
    console.log(response)

    const collectionName = document.querySelector('#collection-name')
    for(let product of response) {
        collectionName.innerHTML += 
            `<li>
                <a href="${product.name}">${product.name}</a>
            </li>`
    }

    const main = document.querySelector('main')
    for(let product of response) {
        main.innerHTML += 
        `
        <div class="parrallax" style="background-image:url('${product.imageUrl}');">
            <div>
                <a id="scrolldown" class="scrolldownVisible" href="#down"></a>
            </div>
            <div class="center2" style="">
                <div class="cloud" id="nav">
                    <a href="#">${product.name}</a>
                </div>
            </div>
            `   
        
// <div  class="parrallax" style="background-image:url('${firstTeddy.imageUrl}');"></div>
// <div class="parrallax" style="background-image:url('${firstTeddy.imageUrl}');"></div>
// <div class="parrallax" style="background-image:url('${firstTeddy.imageUrl}');"></div>

// 
// 
// 
// 
// <div class="parrallax" style="background-image:url('${secondTeddy.imageUrl}');"></div>
// <div class="parrallax" style="background-image:url('${secondTeddy.imageUrl}');"></div>
// <div class="parrallax" style="background-image:url('${secondTeddy.imageUrl}');"></div>
// <div class="parrallax" style="background-image:url('${secondTeddy.imageUrl}');"></div>
// <div class="center-cally">
// <div class="cloud">
// <a href="#">Je suis ${secondTeddy.name}</a>
// </div>
// </div>
// <div class="text2"></div>
// <div id="center4">
// <div class="cloud"></div>
// </div>
// <div class="parrallax" style="background-image:url('${thirdTeddy.imageUrl}');"></div>
// <div class="center-twitty">
// <div class="cloud">
// <a href="#">Voici ${thirdTeddy.name} </a>
// </div>
// </div>
// <div class="parrallax" style="background-image:url('${thirdTeddy.imageUrl}');"></div>
// <div class="parrallax" style="background-image:url('${thirdTeddy.imageUrl}');"></div>
// <div class="parrallax" style="background-image:url('${thirdTeddy.imageUrl}');"></div>
// <div class="center-cutty">
// <div class="cloud">
// <a href="#">Je m'appelle ${forthTeddy.name}</a>
// </div>
// </div>
// <div class="parrallax" style="background-image:url('${forthTeddy.imageUrl}');"></div>
// <div class="parrallax" style="background-image:url('${forthTeddy.imageUrl}');"></div>
// <div class="center7">
// <div class="cloud"></div>
// </div>
// <div class="parrallax" style="background-image:url('${forthTeddy.imageUrl}');"></div>
// <div class="parrallax" style="background-image:url('${forthTeddy.imageUrl}');"></div>
// <div class="parrallax" style="background-image:url('${fifthTeddy.imageUrl}');"></div>
// <div class="center-shy">
// <div class="cloud">
// <a href="#">Et moi je suis ${fifthTeddy.name}</a>
// </div>
// </div>
// <div class="parrallax" style="background-image:url('${fifthTeddy.imageUrl}');"></div>
// <div class="parrallax" style="background-image:url('${fifthTeddy.imageUrl}');"></div>
// <div class="parrallax" style="background-image:url('${fifthTeddy.imageUrl}');"></div>
// `
    }
})
