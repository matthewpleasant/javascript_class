var data = [
	
	album1 = {
	id: 1,
	title: "Way out here",
	artist: "Josh Thompson",
	price: 12.99,
	released: "2010",
	quantity: 0,
	tracklist: ["" ]
	},
	
	album2 = {
	id: 2,
	title: "Tremolo",
	artist: "The Pines",
	price: 12.99,
	released: "2010",
	quantity: 0,
	tracklist: ["" ]
	},
	
	album3 = {
	id: 3,
	title: "Live From Freedom Hall",
	artist: "Lynyrd Skynyrd",
	price: 12.99,
	released: "2010",
	quantity: 0,
	tracklist: ["" ]
	},
	
	album4 = {
	id: 4,
	title: "Achin' and Shakin'",
	artist: "Laura Bell Bundy",
	price: 12.99,
	released: "2010",
	quantity: 0,
	tracklist: ["" ]
	},
	
	album5 = {
	id: 5,
	title: "Here I Am",
	artist: "Marvin Sapp",
	price: 12.99,
	released: "2010",
	quantity: 0,
	tracklist: ["" ]
	},
	
	album6 = {
	id: 6,
	title: "Just James",
	artist: "J Moss",
	price: 12.99,
	released: "2010",
	quantity: 0,
	tracklist: ["" ]
	}

];

var storeData = [];
 
// Function validates the user's login information
// function validateForm() { 
//	'use strict';
//	var email = document.getElementById('email').value;
//	var password = document.getElementById('password').value;
//	if ( (( email === "admin@titanmusicstore.com" ) && ( password === "LogMeIn" )) || ((email === "matthewpleasant@gmail.com") && (password === "password")) ) {
//		return true;
//	} else {
//		alert('Your username or password is incorrect. Please try again.');
//		return false;
//	}
//}

// Function searches through the data array and returns album titles if artist exists in database.
//function search() {
//	'use strict';
//	var searchTerm = document.getElementById('term').value;
//	document.cookie = searchTerm;
//	console.log(cookie);
	
/*	var word = document.getElementById('term').value;
	var flag = false;
	var albumTitle = "Results: ";
	
	for (var i = 0, count = data.length; i < count; i++) {
		if (word === data[i].artist) {
			flag = true;
			albumTitle += data[i].title + " ";
		}
	} 
		
	if (flag === false) {
		alert("No matches found");
	} else {
		alert(albumTitle);
	}
}
} */	

//document.getElementById('searchForm').addEventListener('submit', search, false);
//		document.getElementById('loginForm').addEventListener('submit', validateForm, false);

function increaseCart(album) {
	var cart = document.getElementById('cartinfo');
	var cartCount = Number(document.getElementById('cartinfo').textContent);
	for (var i = 0, count = data.length; i < count; i++) {
		if (album == data[i].artist) {
			++data[i].quantity;
			++cartCount;
			cart.textContent = cartCount;
			if (storeData.indexOf(data[i]) === -1) {
				storeData.push(data[i]);
				}
			}
		} 
	localStorage.setItem("artist", JSON.stringify(storeData));
}

function updateShopping() {
	cartLink = document.getElementById('shoppingCart');
	cartLink.addEventListener('click', function(){ 
		location.assign("shoppingcart.html");
	});
}

function addToCart() {
	var cartBtn = document.getElementsByClassName('add');
	for (var i = 0, count = cartBtn.length; i < count; i++) {
		cartBtn[i].onclick = getAlbumId;
	}
	function getAlbumId() {
		var albumId = this.id;
		increaseCart(albumId);
	}
}

function init() {
	localStorage.clear();
	addToCart();
	updateShopping();
}

window.onload = init;