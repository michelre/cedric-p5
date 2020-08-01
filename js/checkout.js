const cartContainer = document.querySelector('#cart-container')
cartContainer.innerHTML += '<h2 style="margin-bottom:2vh">Mon panier</h2>'

// Récupérer le contenu du localStorage (key: cart)
const cart = JSON.parse(localStorage.getItem('cart')) || []
let quantity = 1;

console.log(cart)

// Prévoir le cas ou le panier est vide (afficher un message)
if (cart.length === 0) {
    cartContainer.innerHTML = '<h3>Le panier est vide</h3>'
}
else if (cart.length >= 1) {

    // Itérer sur chaque produit du tableau pour récupérer son détail sur l'API

    for (let property in cart) {
        let choosenTeddy = cart[property].selectedTeddy;
        let choosenColor = cart[property].teddyColor;

        console.log(choosenTeddy)

        var teddies = getTeddies();
        teddies.then(function (response) {
            console.log(response)

            for (let property in cart) {

                let name = choosenTeddy;
                let goodPrice = Math.round(response[property].price) / 100;
                let formatPrice = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(goodPrice)
                

                console.log(typeof quantity)

                cart.forEach(addLine)

                function addLine() {

                    TR = document.createElement("tr", (e) => {
                        e.preventDefault();});

                    TD1 = document.createElement("td");
                    TXT1 = document.createTextNode(name);
                    TD1.appendChild(TXT1);
                    TR.appendChild(TD1);


                    TD2 = document.createElement("td");
                    TXT2 = document.createTextNode(choosenColor);
                    TD2.appendChild(TXT2);
                    TR.appendChild(TD2);

                    TD3 = document.createElement('td');
                    TXT3 = document.createTextNode(quantity);
                    BTN3 = document.createElement('button');
                    BTN3.innerHTML = '+';
                    BTN3.setAttribute('class', 'orderQuantity');

                    BTN32 = document.createElement('button');
                    BTN32.innerHTML = '-';
                    BTN32.setAttribute('class', 'orderQuantityMinus');

                    let quantityChoosen = 1;

                    function addOne() {
                        quantityChoosen++;
                        document.querySelector('.orderQuantity').innerHTML = quantityChoosen;

                    console.log(typeof quantity)
                    }  
                    
                    // function substract(quantity) {
                    //     if (document.getElementById(nom).value > 0)
                    //         document.getElementById(nom).value--;
                    // }
                    
                    BTN3.addEventListener('click', (addOne));

                    console.log()

                    TD3.appendChild(BTN3);
                    TD3.appendChild(BTN32);
                    TD3.appendChild(TXT3);
                    TR.appendChild(TD3);


                    TD4 = document.createElement('td');
                    TXT4 = document.createTextNode(formatPrice);
                    TD4.appendChild(TXT4);
                    TR.appendChild(TD4);
                    

                    document.getElementById('order').appendChild(TR);


                    
                }




                // Ajouter les évènements de suppression d'un produit, suppression du panier complet, changement de quantité


                // La validation du formulaire

                // Si le formulaire est valide et que le panier n'est pas vide, on peut envoyer la requête POST pour valider la commande
                // const form = document.querySelector('#form');
                // form.addEventListener('submit', (e) => {
                //     e.preventDefault();
                //     const lastName = e.target.last_name.value
                //     const firstName = e.target.first_name.value
                // })

                // Rediriger vers la page de validation de commande
            }

        }

        )
    }
}