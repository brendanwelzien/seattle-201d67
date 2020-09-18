/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // document.getElementById("").remove();
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO (done <tr>): Find the table body
  
  var tBody = document.querySelector('tbody:nth-child(2)');
  
  // TODO (done): Iterate over the items in the cart
      for (var c in cart.items){
  // TODO (done): Create a TR
      var trElement = document.createElement('tr');
  // TODO (done): Create a TD for the delete link, quantity,  and the item
      var tdDelete = document.createElement('td');
      tdDelete.textContent ='X';
      var tdQuantity = document.createElement('td');
      tdQuantity.textContent = cart.items[c].quantity;
      var tdItem = document.createElement('td');
      tdItem.textContent = cart.items[c].product;

      tBody.appendChild(trElement);
      trElement.appendChild(tdDelete);
      trElement.appendChild(tdQuantity);
      trElement.appendChild(tdItem);

  // TODO (done): Add the TR to the TBODY and each of the TD's to the TR
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
