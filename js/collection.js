var teddies = getTeddies();
teddies.then(function (response) {
    console.log(response)

    const collectionName = document.querySelector('#collection-name')
    for (let product of response) {
        collectionName.innerHTML +=
            `<li>
                <a href="collection.html?id=${product._id}">${product.name}</a>
            </li>`
    }

    var url = new URL(window.location.href);
    var params = new URLSearchParams(url.search);

    getTeddy(params.get("id"))
        .then(function (response) {
            console.log(response)

            const main = document.querySelector("main")
            let goodPrice = Math.round(response.price) / 100;
            let formatPrice = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(goodPrice)

            // console.log(goodPrice)
            // console.log(typeof goodPrice)

            main.innerHTML +=
                `<div id="collection_scrolldown">
                <a id="scrolldown" class="scrolldownVisible" href="#down"></a>
            </div>
            <div id="collection_layout">
                <div id="collection_teddy_img">
                    <img src="${response.imageUrl}">
                    <h2>${response.name}</h2>
                </div>
                <div id="collection_teddy_information">
                    <p id="collection_teddy_description">${response.description}</p>
                    <label for="color-select">Choix de la couleur :</label>
                    <select name="colors" id="color-select">
                    </select>
                    <h3 id="teddy-price">Prix : ${formatPrice}</h3>
                    <form>
                    <button class="add" >Ajouter</button>
                    </form>
                </div>
            </div>`

            let colorChoice = (response.colors);
            select = document.querySelector('#color-select');
            for (let i = 0; i < colorChoice.length; i++) {
                let option = document.createElement('option');
                option.value = colorChoice[i];
                option.innerHTML = colorChoice[i];
                select.appendChild(option);
                choice = select.selectedIndex  // Récupération de l'index du <option> choisi
                valeur_cherchee = select.options[choice].value;

                // localStorage.setItem('colorChoice', document.querySelector('#color-select option').value);
                // localStorage.setItem('teddyChoice', teddyChoice);

            }

            let teddyChoice = (response._id);
            // var selectedColor = change_valeur();
            // colorChoice = document.querySelector('#color-select').options.selectedIndex;

            // console.log(selectedColor)
            console.log(colorChoice)

            const product = [
                selectedTeddy = teddyChoice,
                teddyColor = valeur_cherchee,
            ]

            // function change_valeur() {
            //     select = document.querySelector("#color-select");
            //     choice = select.selectedIndex  // Récupération de l'index du <option> choisi
            //     valeur_cherchee = select.options[choice].value; // Récupération du texte du <option> d'index "choice"

            console.log(valeur_cherchee)

            const addCart = document.querySelector('.add');

            addCart.addEventListener('click', () => {
                localStorage.setItem('teddyChoice', teddyChoice);
                localStorage.setItem('colorChoice', valeur_cherchee);
                localStorage.setItem('addToCart', product);

            })
        });




})
