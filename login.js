// Add an event listener to the login button
document.querySelector(".btn-primary").addEventListener("click", loginUser);

// Function to handle login

function loginUser() {
    
     event.preventDefault();

  // Get the entered email and password
  const enteredEmail = document.querySelector("#email-input").value.trim();
  const enteredPassword = document
    .querySelector("#password-input")
    .value.trim();

  // Validate if the email and password are not empty
  if (enteredEmail === "" || enteredPassword === "") {
    alert("Please enter both email and password");
    return;
  }

  // Fetch the stored inputs from localStorage
  const storedInputs = localStorage.getItem("inputs");

  // Check stored inputs
  if (storedInputs) {
    const inputs = JSON.parse(storedInputs);

    // Check if there's a user with the entered credentials
    const loggedInUser = inputs.find(
      (user) => user.email === enteredEmail && user.password === enteredPassword
    );

    if (loggedInUser) {
      alert("Login successful!");
      // Redirect to profile.html
      window.location.href = "profile.html";
    } else {
      // Invalid credentials
      alert("Invalid email or password. Please try again.");
    }
  } else {
    // No stored inputs
    alert("No user data available. Please sign up.");
  }

}
// Retrieve data from localStorage when the page loads

window.addEventListener("load", () => {
  const storedInputs = localStorage.getItem("inputs");
  if (storedInputs) {
    inputs = JSON.parse(storedInputs);
  }
});