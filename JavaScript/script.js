//CART 

// Get the cart button and cart popup
const cartButton = document.getElementById('cart-button');
const cartPopup = document.getElementById('cart-popup');

// When the cart button is clicked, show the cart popup
cartButton.addEventListener('click', function() {
    cartPopup.style.display = 'block';
});

// Get the close button for the cart popup
const closePopupButton = document.querySelector('.close-popup');

// When the close button is clicked, hide the cart popup
closePopupButton.addEventListener('click', function() {
    cartPopup.style.display = 'none';
});

// Close the cart popup when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target == cartPopup) {
        cartPopup.style.display = 'none';
    }
});
