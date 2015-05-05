var bigArray = [];

function addUp(album2) {
	var num = 0;
	var cost = 0;
	for (var i = 0, count = album2.length; i < count; i++) {
		num += Number(album2[i].quantity);
		cost = Number(album2[i].price);
	}
	var subTotal = num * cost;
	var tax = subTotal * .07;
	var finalCost = subTotal + tax;
	return finalCost.toFixed(2);
}

function getAlbumArray() {
	var album = localStorage.getItem("artist");
	var album2 = JSON.parse(album);
	for (var i = 0, count = album2.length; i < count; i++) {
		bigArray.push(album2[i]);
	}
}

function addDeleteBtn() {
	var deleteBtn = document.getElementsByClassName('delete');
	for (var i = 0, count = deleteBtn.length; i < count; i++) {
		deleteBtn[i].onclick = cut;
	}
	function cut() {
		var deletedId = Number(this.id);
		for (var x = 0, increment = bigArray.length; x < increment; x++) {
			if (deletedId == bigArray[x].id) {
				bigArray.splice(bigArray[deletedId], 1);
				}
			}
		cartReview();			
		}	
}

function cartReview() {
	var yourCart = " ";
	var total = addUp(bigArray);
	for (var i = 0, count = bigArray.length; i < count; i++) {
		yourCart += "<tr class='delete'" + "id=" + bigArray[i].id + "><td>" + "<button>Delete</button>" + "</td><td>" + bigArray[i].artist + "</td><td>" + bigArray[i].title + "</td><td>" + bigArray[i].price + "</td><td><input value='" + bigArray[i].quantity + "'/></td></tr>";
		}
//	$("tr").after(yourCart);
	document.getElementById("cartInfo").innerHTML = yourCart;
	document.getElementById("total").innerHTML = "$" + total;
	addDeleteBtn();
}

function checkForm() {
	var phone = document.getElementById('phone').value;
	var address = document.getElementById('address').value;
	var credit = document.getElementById('credit').value;
	var phoneReg = /^[2-9]\d{2}-\d{3}-\d{4}$/;
	var creditReg = /\d{4}-?\d{4}-?\d{4}-?\d{4}/;
	var phoneTest = phoneReg.test(phone);
	var creditTest = creditReg.test(credit);
	if ((phoneTest) && (creditTest) && (address != null) && (address !== "")) {
		window.open("yourorder.html");
	} else {
		alert("Please fill in all form fields");
	}
}

function addFormEvent() {
	document.getElementById('form').addEventListener('submit', checkForm, false);
}

window.onload = function() {
	getAlbumArray();
	cartReview();
	addFormEvent();
};