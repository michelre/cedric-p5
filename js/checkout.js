const cartContainer = document.querySelector('#cart-container')

// Récupérer le contenu du localStorage (key: cart)
const cart = JSON.parse(localStorage.getItem('cart')) || []

// Prévoir le cas ou le panier est vide (afficher un message)
if(cart.length === 0){
    cartContainer.innerHTML = '<h2>Le panier est vide</h2>'
}

// Itérer sur chaque produit du tableau pour récupérer son détail sur l'API


// Ajouter les évènements de suppression d'un produit, suppression du panier complet, changement de quantité


// La validation du formulaire

// Si le formulaire est valide et que le panier n'est pas vide, on peut envoyer la requête POST pour valider la commande
const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const lastName = e.target.last_name.value
    const firstName = e.target.first_name.value
})

// Rediriger vers la page de validation de commande
