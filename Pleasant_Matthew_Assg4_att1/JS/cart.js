function addToCart() {
	alert("Calling the add function");
}

function removeFromCart() {
	alert("Calling the remove function");
}

function getItems() {
	alert("Calling the get items function");
}

function getTotal() {
	alert("Calling the get total function");
}

function getFunctions() {
	addToCart();
	removeFromCart();
	getItems();
	getTotal();
}

function init() {
	getFunctions();
}

window.onload = init;