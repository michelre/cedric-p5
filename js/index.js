var teddies = getTeddies();
teddies.then(function (response) {
    console.log(response)

    var firstTeddy = response[0];
    var secondTeddy = response[1];
    var thirdTeddy = response[2];
    var forthTeddy = response[3];
    var fifthTeddy = response[4];

    const main = document.querySelector('main')
    for(let product of response)
    {
        main.innerHTML += `<div class="parrallax" style="background-image:url('${firstTeddy.imageUrl}');">
<div>
<a id="scrolldown" class="scrolldownVisible" href="#down"></a>
</div>
</div>
<div id="down" class="parrallax" style="background-image:url('${firstTeddy.imageUrl}');"></div>
<div class="parrallax" style="background-image:url('${firstTeddy.imageUrl}');"></div>
<div class="parrallax" style="background-image:url('${firstTeddy.imageUrl}');"></div>
<div class="center2">
<div class="cloud" id="nav">
<a href="#">Je suis ${firstTeddy.name}</a>
</div>
</div>
<div class="text">
<h2>Bienvenue sur le site de OrinoToy, le paradis des oursons mignons.</h2>
</div>
<div class="parrallax2" style="background-image:url('${secondTeddy.imageUrl}');"></div>
<div class="parrallax2" style="background-image:url('${secondTeddy.imageUrl}');"></div>
<div class="parrallax2" style="background-image:url('${secondTeddy.imageUrl}');"></div>
<div class="parrallax2" style="background-image:url('${secondTeddy.imageUrl}');"></div>
<div class="center-cally">
<div class="cloud">
<a href="#">Je suis ${secondTeddy.name}</a>
</div>
</div>
<div class="text2"></div>
<div id="center4">
<div class="cloud"></div>
</div>
<div class="parrallax3" style="background-image:url('${thirdTeddy.imageUrl}');"></div>
<div class="center-twitty">
<div class="cloud">
<a href="#">Voici ${thirdTeddy.name} </a>
</div>
</div>
<div class="parrallax3" style="background-image:url('${thirdTeddy.imageUrl}');"></div>
<div class="parrallax3" style="background-image:url('${thirdTeddy.imageUrl}');"></div>
<div class="parrallax3" style="background-image:url('${thirdTeddy.imageUrl}');"></div>
<div class="center-cutty">
<div class="cloud">
<a href="#">Je m'appelle ${forthTeddy.name}</a>
</div>
</div>
<div class="parrallax4" style="background-image:url('${forthTeddy.imageUrl}');"></div>
<div class="parrallax4" style="background-image:url('${forthTeddy.imageUrl}');"></div>
<div class="center7">
<div class="cloud"></div>
</div>
<div class="parrallax4" style="background-image:url('${forthTeddy.imageUrl}');"></div>
<div class="parrallax4" style="background-image:url('${forthTeddy.imageUrl}');"></div>
<div class="center-shy">
<div class="cloud">
<a href="#">Et moi je suis ${fifthTeddy.name}</a>
</div>
</div>
<div class="parrallax5" style="background-image:url('${fifthTeddy.imageUrl}');"></div>
<div class="parrallax5" tyle="background-image:url('${fifthTeddy.imageUrl}');"></div>
<div class="parrallax5" tyle="background-image:url('${fifthTeddy.imageUrl}');"></div>
<!--            MOUSE LITTLE CLOUD-->
<div id="center-mouse">
<div class="cloud-mouse"></div>
</div>`
    }
})
