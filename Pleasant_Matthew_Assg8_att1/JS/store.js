var data = [
	
	album1 = {
	id: 1,
	title: "Diamond Rugs",
	artist: "Diamond Rugs",
	price: "$12.00",
	released: "2015",
	quantity: "4",
	tracks: ["Voo Doo Doll", "Thunk", "Couldn't Help It", "Meant To Be"]
	},

	album2 = {
	id: 2,
	title: "Morning Phase",
	artist: "Beck",
	price: "$12.00",
	released: "2014",
	quantity: "5",
	tracklist: ["Cycle", "Morning", "Heart is a Drum", "Say Goodbye"]	
	},

	album3 = {
	id: 3,
	title: "To Pimp a Butterfly",
	artist: "Kendrick Lemar",
	price: "$12.00",
	released: "2015",
	quantity: "5",
	tracklist: ["Wesley's Theory", "For Free?", "King Kunta", "Institutionalized"]	
	},
	
	album4 = {
	id: 4,
	title: "Goon",
	artist: "Tobias Jesso Jr.",
	price: "$12.00",
	released: "2015",
	quantity: "4",
	tracklist: ["Can't Stop Thinking About You", "How could you babe", "Without You", "Can We Still Be Friends", "The Wait"]
	},
		
	album5 = {
	id: 5,
	title: "Good Bad Not Evil",
	artist: "Black Lips",
	price: "$12.00",
	released: "2007",
	quantity: "3",
	tracklist: ["I saw a ghost", "O Katrina!", "Vendi Vidi Vici", "It Feels Alright", "Navajo" ]
	}

];

function show(array) {
	'use strict';
	for (var x in array) {
		alert(array[x].title);
	}
}

function init() {
	'use strict';
	show(data);
}

window.onload = init;