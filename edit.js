// Retrieve latestUser from localStorage
const latestUser = JSON.parse(localStorage.getItem("latestUser"));

// Populate the input fields in edit.html with the latest user data
document.getElementById("name").value = latestUser.name;
document.getElementById("email").value = latestUser.email;
