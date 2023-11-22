let nameElement = document.getElementById("name");
let emailElement = document.getElementById("email");
let changePasswordCheckbox = document.getElementById("changePassword");
let newPasswordElement = document.getElementById("newPassword");

let name = localStorage.getItem("name");
let email = localStorage.getItem("email");
let id = Number(localStorage.getItem("id"));
nameElement.value = name;
emailElement.value = email;

function updateProfile() {
  const index = inputs.findIndex((user) => user.id === id);
  // If the user is found in the array, update the values
  if (index !== -1) {
    inputs[index].name = nameElement.value;
    inputs[index].email = emailElement.value;

    // If the changePassword checkbox is checked, update the password
    if (changePasswordCheckbox.checked) {
      inputs[index].password = newPasswordElement.value; // Use newPasswordElement.value instead of newPassword
    }

    // Save the updated inputs array to localStorage
    localStorage.setItem("inputs", JSON.stringify(inputs));
    localStorage.setItem("name", nameElement.value);
    localStorage.setItem("email", emailElement.value);

    document.getElementById("name").innerText = nameElement.value;
    document.getElementById("email").innerText = emailElement.value;
  }

  alert("Profile saved!");

  window.location.href = "profile.html";
}
