const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");

let inputs = [];

// Retrieve data from localStorage when the page loads
window.addEventListener("load", () => {
  const storedInputs = localStorage.getItem("inputs");
  if (storedInputs) {
    inputs = JSON.parse(storedInputs);
  }
});

let addInputs = () => {
  let newName = nameInput.value.trim();
  let newEmail = emailInput.value.trim();
  let newPassword = passwordInput.value.trim();

  if (newName === "" || newEmail === "" || newPassword === "") {
    alert("Please enter the required fields");
    return;
  }

  const data = {
    id: Date.now(),
    name: newName,
    email: newEmail,
    password: newPassword,
  };

  inputs.push(data);

  // Clear the input fields
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";

  console.log(inputs); // for testing

  localStorage.setItem("inputs", JSON.stringify(inputs));

  let user_records = JSON.parse(localStorage.getItem("inputs")) || [];
  let current_user = user_records.find(
    (v) => v.email === newEmail && v.password === newPassword
  );

  if (current_user) {
    localStorage.setItem("name", current_user.name);
    localStorage.setItem("email", current_user.email);
    localStorage.setItem("id", current_user.id);
    window.location.href = "profile.html";
  } else {
    alert("Login failed");
  }
};


const signInButton = document.getElementById("signin-btn");
signInButton.addEventListener("click", addInputs);
