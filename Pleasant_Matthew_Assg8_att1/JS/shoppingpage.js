function showCart() {
	var artist = document.getElementById("artist");
	var album = localStorage.getItem("artist");
	var album2 = JSON.parse(album);
	var yourCart = "";
	for (var i = 0, count = album2.length; i < count; i++) {
		yourCart += album2[i].artist + ", " + album2[i].title + "<br>";
	}
	artist.innerHTML = yourCart;
	
}

function checkLogin() {
	var loggedIn = localStorage.getItem("user");
	if (loggedIn) {
		location.assign("checkout.html"); //HOW TO OPEN IN SAME WINDOW, NEW TAB?
	} else {
		alert("Please log in");
		location.assign("login.html");
	}
}

window.onload = function() {
	showCart();
	document.getElementById('checkout').addEventListener('click', checkLogin, false);
};