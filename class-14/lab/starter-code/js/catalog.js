/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO (done): Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
    for (var p = 0; p < Product.allProducts.length; p++){
      var listProducts = document.createElement('option');
      listProducts.textContent = Product.allProducts[p].name;
      listProducts.name = Product.allProducts[p].name;
      
      selectElement.appendChild(listProducts);
    }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  
  // TODO (done): Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}
var cart = [];
// TODO (done): Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO (done): suss out the item picked from the select list
  // TODO (done): get the quantity
  // TODO: using those, add one item to the Cart
    var selectedItem = document.getElementById('items');
    var nameOfItem = selectedItem.value;
    var getQuantity = document.getElementById('quantity');
    var quantityOfItem = getQuantity.value;

   cart.addItem(nameOfItem, quantityOfItem,);
  
}

var totalQuantity = 0;

// TODO (done): Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  for (var i = 0; i < cart.length; i++);
  totalQuantity = totalQuantity + cart[i];
  itemCount.textContent = totalQuantity;
  console.log(cart[i]);
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  var getPreviewEl = document.getElementById('cartContents');
  var cartPreview = document.createElement('ul')
  
  for (var i = 0; i < cart.length; i++) {
    console.log(cart[i]);
    var previewList = document.createElement('li');
    previewList.textContent = `${cart[i].nameOfItem, cart[i].quantityOfItem}`;
  cartPreview.appendChild(previewList);
  }
  getPreviewEl.appendChild(cartPreview);



  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
