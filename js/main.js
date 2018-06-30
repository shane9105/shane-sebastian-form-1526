// Shortcut for printing in JavaScript console


// getting references;
const main = document.querySelector(".main");
const form = document.querySelector("form");
const fullname = document.getElementById("fname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


const collectedData = {
	fullName: null,
	email: null,
	message: null
};

const errors = {};

function validateForm(ev) {

	ev.preventDefault();

	// validate full name
	
	if (fullname.value !== "") {
		collectedData.fullName = fullname.value;
		delete errors.ev;
	} else {
		errors.ev = "Full name is missing";
	}



	// validate email
	
	if (email.value !== "") {
		if (pattern.test(email.value)) {
			collectedData.email = email.value;
			delete errors.em;
		} else {
			errors.em = "Email is invalid";
		}
	} else {
		errors.em = "Email is missing";
	}


	// validate message
	
	if (message.value !== "") {
		collectedData.message = message.value;
		delete errors.msg;
	} else {
		errors.msg = "Message name is missing.";
	}


	// provide feedback or error-report
	
	if (Object.keys(errors).length === 0) {
		console.log(collectedData);
	} else {
		console.log(errors)
	}

}

form.addEventListener("submit", validateForm);
