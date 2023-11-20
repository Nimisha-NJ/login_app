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
    alert("Please Enter the required fields");
    return;
  }

  const data = {
    id: Date.now(),
    name: newName,
    email: newEmail,
    password: newPassword,
    completed: false,
  };

  inputs.push(data);

  // Clear the input fields
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";

  console.log(inputs); // for testing

  localStorage.setItem("inputs", JSON.stringify(inputs));

  // Redirect to profile.html only after pushing data to inputs
  updateProfilePage();
};

const signInButton = document.getElementById("signin-btn"); 
signInButton.addEventListener("click", addInputs);

// Function to update profile page
function updateProfilePage() {
  window.location.href = "profile.html";
}
