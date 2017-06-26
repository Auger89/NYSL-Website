function isValidDate(dateString) {
	// First check for the pattern
	
	if (!(/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))) {
		return false;
	}

	// Parse the date parts to integers
	var parts = dateString.split("/");
	var day = parseInt(parts[1], 10);
	var month = parseInt(parts[0], 10);
	var year = parseInt(parts[2], 10);
	
	// Check the ranges of month and year	
	if (year < 2000 || year > 2100 || month === 0 || month > 12) {
		return false;
	}
	
	// Check the ranges of month and year to make sure the kids are between 4 - 12 years. 48 to 144 months	
	var yearNow = new Date().getFullYear();
	var monthNow = new Date().getMonth() + 1;
	var yearDifference = (yearNow - year) * 12;
	var monthDifference = (monthNow - month);
	var totalDifference = yearDifference + monthDifference;

	if (totalDifference < 48 || totalDifference > 144) {
		return false;
	}

	var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

	// Adjust for leap years
	if (year % 400 == 0 || (year % 100 !== 0 && year % 4 == 0)) {
		monthLength[1] = 29;
	}

	// Check the range of the day
	if (day < 1 && day > monthLength[month - 1]) {
		return false;
	}

	// Return true if the date is valid
	return true;
}

function validateFirstName(firstName) {
	if (firstName.value == "") {
		firstName.style.background = "yellow";
		return "You must fill the First Name field.\n";
	} else {
		firstName.style.background = "white";
		return "";
	}
}

function validateLastName(lastName) {
	if (lastName.value == "") {
		lastName.style.background = "yellow";
		return "You must fill the Last Name field.\n";
	} else {
		lastName.style.background = "white";
		return "";
	}
}

function validateAddress(address) {
	if (address.value == "") {
		address.style.background = "yellow";
		return "You must fill the Address field.\n";
	} else {
		address.style.background = "white";
		return "";
	}
}

function validateCity(city) {
	if (city.value == "") {
		city.style.background = "yellow";
		return "You must fill the City field.\n";
	} else {
		city.style.background = "white";
		return "";
	}
}

function validateZipCode(zipcode) {
	if (zipcode.value == "") {
		zipcode.style.background = "yellow";
		return "You must fill the Zip Code field.\n";
	} else if (/\D/.test(zipcode.value)) {
		zipcode.style.background = "yellow";
		return "Zip Code must have only numbers.\n";
	} else if (zipcode.value.length !== 5) {
		zipcode.style.background = "yellow";
		return "Zip Code must have 5 digits.\n";
	} else {
		zipcode.style.background = "white";
		return "";
	}
}

function validateBirthDate(birthDate) {
	if (birthDate.value == "") {
		birthDate.style.background = "yellow";
		return "You must fill the Birth Date field.\n";
	} else if (!isValidDate(birthDate.value)) {
		birthDate.style.background = "yellow";
		return "You must enter a valid Date! Remember that the players have to be between 4 - 12 years old.\n";
	} else {
		birthDate.style.background = "white";
		return "";
	}
}

function validateGender() {
	if (!(document.getElementById("male").checked || document.getElementById("female").checked)) {
		return "You must select a gender.\n";
	} else {
		return "";
	}
}

function validateParentName(parentName) {
	if (parentName.value == "") {
		parentName.style.background = "yellow";
		return "You must fill the Parent/Guardian field.\n";
	} else {
		parentName.style.background = "white";
		return "";
	}
}

function validatePhone(phone) {
	if (phone.value == "") {
		phone.style.background = "yellow";
		return "You must fill the Phone field.\n";
	} else if ( !(/\d\d\d\-\d\d\d\-\d\d\d\d/.test(phone.value)) ) {
		phone.style.background = "yellow";
		return "You must enter a Phone Number that fits the American Standard (###-###-####).\n";
	} else {
		phone.style.background = "white";
		return "";
	}
}

function validateEmail(email) {
	if (email.value == "") {
		email.style.background = "yellow";
		return "You must fill the Email field.\n";
	} else if ( !(/\.com$/.test(email.value) || /\.edu$/.test(email.value) || /\.gov$/.test(email.value) || /\.net$/.test(email.value) || /\.org$/.test(email.value)) ) {
		email.style.background = "yellow";
		return "The email must end with .com, .edu, .gov, .net, or .org.\n";
	} else {
		email.style.background = "white";
		return "";
	}
}

function validateSchoolsNear() {
	// getting values from dropdown menus
	var s1 = document.getElementById("school1");
	var value1 = s1.options[s1.selectedIndex].value;
	var s2 = document.getElementById("school2");
	var value2 = s2.options[s2.selectedIndex].value;
	
	if (value1 == value2) {
		s1.style.background = "yellow";
		s2.style.background = "yellow";
		return "You have to select diferent closest schools.\n";
	} else {
		s1.style.background = "white";
		s2.style.background = "white";
		return "";
	}
}

function validatePlayPosition() {
	if (!(document.getElementById("play_forward").checked || document.getElementById("play_midfield").checked || document.getElementById("play_defense").checked || document.getElementById("play_goalkeeper").checked)) {
		return "You must select at least one position you normally play.\n";
	} else {
		return "";
	}
}

function validateWantPosition() {
	if (!(document.getElementById("want_forward").checked || document.getElementById("want_midfield").checked || document.getElementById("want_defense").checked || document.getElementById("want_goalkeeper").checked)) {
		return "You must select at least one position you want to play.\n";
	} else {
		return "";
	}
}

function validateSignature(signature) {
	if (signature.value == "") {
		signature.style.background = "yellow";
		return "You must fill the Parent Signature field.\n";
	} else {
		signature.style.background = "white";
		return "";
	}
}

function validateDate(date) {
	if (date.value == "") {
		date.style.background = "yellow";
		return "You must fill the Date field.\n";
	} else {
		date.style.background = "white";
		return "";
	}
}

function validateForm(event) {
	
	var form = event.target;
	var messages = "";
	messages += validateFirstName(form.first_name);
	messages += validateLastName(form.last_name);
	messages += validateAddress(form.address);
	messages += validateCity(form.city);
	messages += validateZipCode(form.zipcode);
	messages += validateBirthDate(form.birth_date);
	messages += validateGender();
	messages += validateParentName(form.parent_name);
	messages += validatePhone(form.phone);
	messages += validateEmail(form.email);
	messages += validateSchoolsNear();
	messages += validatePlayPosition();
	messages += validateWantPosition();
	messages += validateSignature(form.digital_signature);
	messages += validateDate(form.date);
	
	if (messages.length == 0) {
		return true;
	} else {
		alert(messages);
		return false;
	}
}

document.forms.reg.onsubmit = function (event) {
	return validateForm(event);
};

// Disable uniform sizes when "Already have a uniform" is checked. Enable it when unchecked.
document.getElementById("uniform").onclick = function() {
	if (this.checked) {
		document.getElementById("fieldset_toggle").disabled = true;
		document.getElementById("fieldset_toggle").style.color = "grey";
	} else {
		document.getElementById("fieldset_toggle").disabled = false;
		document.getElementById("fieldset_toggle").style.color = "black";

	}
}
