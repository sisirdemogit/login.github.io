$(document).ready(function () {
	// console.log();
	// Reset the password input and the button
	var passwordInput = $(".buttonGroup > input[type='password']");
	var passwordVTB = $(".buttonGroup > button[type='button']");

	passwordInput.attr({ "type": "password" });

	passwordVTB.children("i");
	console.log(passwordVTB.children("i"));
});