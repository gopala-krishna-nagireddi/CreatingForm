// function validateForm(e) {
//   e.preventDefault();
//   resetErrorMessages();

//   const usernameInput = document.getElementById("username");
//   const emailInput = document.getElementById("email");
//   const passwordInput = document.getElementById("password");
//   const confirmPassInput = document.getElementById("confirmPass");
//   const birthDateInput = document.getElementById("birthDate");
//   const genderInputs = document.querySelectorAll('input[name="gender"]');
//   const termsCheckbox = document.getElementById("terms");

//   if (!validateUsername(usernameInput.value)) {
//     showError(
//       usernameInput,
//       "Username must be alphanumeric and between 5 to 15 characters"
//     );
//   } else {
//     usernameInput.classList.add("valid");
//   }

//   if (!validateEmail(emailInput.value)) {
//     showError(emailInput, "Invalid email format");
//   }

//   if (!validatePassword(passwordInput.value)) {
//     showError(
//       passwordInput,
//       "Password must be at least 8 characters long and include a mix of uppercase, lowercase, numbers, and special characters"
//     );
//   }

//   if (passwordInput.value !== confirmPassInput.value) {
//     showError(confirmPassInput, "Passwords do not match");
//   }

//   if (!birthDateInput.value) {
//     showError(birthDateInput, "Please select your date of birth");
//   }

//   let genderSelected = false;
//   genderInputs.forEach((genderInput) => {
//     if (genderInput.checked) {
//       genderSelected = true;
//     }
//   });

//   if (!genderSelected) {
//     showError(genderInputs[0], "Please select your gender");
//   }

//   if (!termsCheckbox.checked) {
//     showError(termsCheckbox, "Please accept terms and conditions");
//   }

//   if (document.querySelectorAll(".err-msg:not(:empty)").length > 0) {
//     e.preventDefault();
//   }
// }

// function validateUsername(username) {
//   return /^[a-zA-Z0-9]{5,15}$/.test(username);
// }

// function validateEmail(email) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// function validatePassword(password) {
//   return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
//     password
//   );
// }

// function showError(inputElement, errorMessage) {
//   const errMsgElement = inputElement.nextElementSibling;
//   errMsgElement.textContent = errorMessage;
//   errMsgElement.style.color = "red";
//   inputElement.style.border = "1px solid red";
// }

// function resetErrorMessages() {
//   const errMsgElements = document.querySelectorAll(".err-msg");
//   const formInputs = document.querySelectorAll("input, select");

//   errMsgElements.forEach((errMsgElement) => {
//     errMsgElement.textContent = "";
//   });

//   formInputs.forEach((input) => {
//     input.style.border = "1px solid #ccc";
//   });
// }

// document.querySelector("form").addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();
  resetErrorMessages();

  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPassInput = document.getElementById("confirmPass");
  const birthDateInput = document.getElementById("birthDate");
  const genderInputs = document.querySelectorAll('input[name="gender"]');
  const termsCheckbox = document.getElementById("terms");

  if (!validateUsername(usernameInput.value)) {
    showError(
      usernameInput,
      "Username must be alphanumeric and between 5 to 15 characters"
    );
  } else {
    usernameInput.classList.add("valid");
  }

  if (!validateEmail(emailInput.value)) {
    showError(emailInput, "Invalid email format");
  }

  if (!validatePassword(passwordInput.value)) {
    showError(
      passwordInput,
      "Password must be at least 8 characters long and include a mix of uppercase, lowercase, numbers, and special characters"
    );
  }

  if (passwordInput.value !== confirmPassInput.value) {
    showError(confirmPassInput, "Passwords do not match");
  }

  if (!birthDateInput.value) {
    showError(birthDateInput, "Please select your date of birth");
  }

  let genderSelected = false;
  genderInputs.forEach((genderInput) => {
    if (genderInput.checked) {
      genderSelected = true;
    }
  });

  if (!genderSelected) {
    showError(genderInputs[0], "Please select your gender");
  }

  if (!termsCheckbox.checked) {
    showError(termsCheckbox, "Please accept terms and conditions");
  }

  if (document.querySelectorAll(".err-msg:not(:empty)").length === 0) {
    displayFormData();
  }
}

function validateUsername(username) {
  return /^[a-zA-Z0-9]{5,15}$/.test(username);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    password
  );
}

function showError(inputElement, errorMessage) {
  const errMsgElement = inputElement.nextElementSibling;
  errMsgElement.textContent = errorMessage;
  errMsgElement.style.color = "red";
  inputElement.style.border = "1px solid red";
}

function resetErrorMessages() {
  const errMsgElements = document.querySelectorAll(".err-msg");
  const formInputs = document.querySelectorAll("input, select");

  errMsgElements.forEach((errMsgElement) => {
    errMsgElement.textContent = "";
  });

  formInputs.forEach((input) => {
    input.style.border = "1px solid #ccc";
  });
}

function displayFormData() {
  const usernameInput = document.getElementById("username").value;
  const emailInput = document.getElementById("email").value;
  const birthDateInput = document.getElementById("birthDate").value;

  const genderInputs = document.querySelectorAll('input[name="gender"]');
  let selectedGender = "";
  genderInputs.forEach((genderInput) => {
    if (genderInput.checked) {
      selectedGender = genderInput.value;
    }
  });

  const countryInput = document.querySelector("select").value;

  const formDataMessage = `User Registration Details:
    Username: ${usernameInput}
    Email: ${emailInput}
    Date of Birth: ${birthDateInput}
    Gender: ${selectedGender}
    Country: ${countryInput}`;

  alert(formDataMessage);
}

document.querySelector("form").addEventListener("submit", validateForm);
