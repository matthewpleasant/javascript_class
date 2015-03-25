// login.js 
// This script validates the user's login information


function validateForm() { 
	'use strict'; 
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	
	if ( (( email === "admin@titanmusicstore.com" ) && ( password === "LogMeIn" )) || ((email === "matthewpleasant@gmail.com") && (password === "password")) ) {
		return true;
	} else {
		alert('Your username or password is incorrect. Please try again.');
		return false;
	}
}
	
function init() { 
	'use strict'; 
	if (document && document.getElementById) { 
		var loginForm = document.getElementById('loginForm'); 
		loginForm.onsubmit = validateForm;
	}
}

window.onload = init;