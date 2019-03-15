/* The variables below are the form inputs which will 
   be highlighted red when the user makes an invalid input. */

var signupFormConfirmPassword = document.getElementById("signup-confirm-password");
var signupFormPassword = document.getElementById("signup-password");
var signupFormEmail = document.getElementById("signup-email");

// CSS Effects on Sign-up/in form
function showSignUp() // When user selects "Don't Have an Account? Create One"
{
	var createAccountForm = document.getElementById("signup-form");
	var loginForm = document.getElementById("login-form");
	loginForm.style.display = "none";
	createAccountForm.style.display = "block";
}
function showLogin() // When user selects "Already Have an Account? Sign In"
{
	var createAccountForm = document.getElementById("signup-form");
	var loginForm = document.getElementById("login-form");
	createAccountForm.style.display = "none";
	loginForm.style.display = "block";
}
function resetCSS() { // Resets CSS applied to sign-up or signin forms by other functions
	document.getElementById("signup-email").style.border = "none";
	document.getElementById("signup-password").style.border = "none";
	document.getElementById("signup-confirm-password").style.border = "none";
}

// User input validation
function validateEmail(email)	// Uses regex and returns true if a valid e-mail format is inputted
{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validEmail = re.test(String(email).toLowerCase());

    if (validEmail == true) {
    	return true;
    }
    else {
    	signupFormEmail.style.border = "solid 3px red";
    	alert("The e-mail you entered is invalid. Please try again.")
    	return false;
    }
}
function validatePassword(password) // Returns true if user inputs a valid password
{
	if (password.length <= 40 && password.length >= 6) {
		return true;
	}
	else {
		signupFormPassword.style.border = "solid 3px red";
		alert("The password you entered is not 6-40 characters long. Please try again.");
		return false;
	}
}
function confirmPassword() {
	var password = document.getElementById("signup-password").value;
	var confirmPassword = document.getElementById("signup-confirm-password").value;

	if (password == confirmPassword) {
		return true;
	}
	else {
		signupFormConfirmPassword.style.border = "solid 3px red";
		alert("The two passwords you entered do not match. Please try again.");
		return false;
	}
}

// User authentication via Firebase
function createAnAccount() // Sends user input to Firebase to process
{
	event.preventDefault();
	resetCSS(); // Resets any red border CSS previously applied as a result of an invalid input
	var email = document.getElementById("signup-email").value;
	var password = document.getElementById("signup-password").value;

	if (validateEmail(email) == true && validatePassword(password) == true && confirmPassword()) {
		//
	}
}
function login() {
	event.preventDefault();
	resetCSS(); // Resets any red border CSS previously applied as a result of an invalid input
	var email = document.getElementById("login-email").value; // Retrieves e-mail that user inputs
	var password = document.getElementById("login-password").value; // Retrieves password that user inputs
	var rememberMeCheckbox = document.getElementById("remember-me").checked;

	if (validateEmail(email) && validatePassword(password)) { 
		if (rememberMeCheckbox == true) {
			//
		}
		else {
			//
		}
	}
}