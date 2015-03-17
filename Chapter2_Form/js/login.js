function validateForm() { // defines a function called validateForm
	'use strict'; // puts JavaScript into strict mode, better for development
	var email = document.getElementById('email'); // grabs reference to 'email' Id in HTML doc, linking it to the 'email' variable for use in JavaScript
	var password = document.getElementById('password'); // grabs reference to 'password' Id in HTML doc, linking it to the 'password' variable for use in JavaScript
	
	if ( (email.value.length > 0 ) && (password.value.length > 0) ) { // tests whether the length of the email and password entered by the user are created than 0
		return true; // Returns the "true" Boolean value if the lengths are greater than 0	
	} else { // If the lengths aren't greater than 0, this sends an alert to the user with the message below
		alert('Please complete the form!');
		return false; // Returns the "false" Boolean value if the lengths are lesser than 0
	}
}

function init() { // Defines a funciton called init
	'use strict' // Puts JavaScript in strict mode
	if (document && document.getElementById) { // Tests whether browser can support the document object and the getElementById method
		var loginForm = document.getElementById('loginForm'); // Grabs reference to the loginForm Id in the HTML doc, assigning it to the loginForm variable for use in the script
		loginForm.onsubmit = validateForm; // assigns the validateForm function to the onsubmit event, triggering it to run when the from is submitted
	}
}

window.onload = init; // Calls the init function when the window.onload event occurrs