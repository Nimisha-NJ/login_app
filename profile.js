// DISPLAYING THE IMAGE

const getRandomUrl = () => {
  const apiUrl = "https://i.pravatar.cc/300";
  const randomUserId = Math.floor(Math.random() * 1000) + 1;
  const imageUrl = `${apiUrl}?u=${randomUserId}`;
  return imageUrl;
};

const displayImage = () => {
  const userImage = document.getElementById("userImage");
  userImage.src = getRandomUrl();
};
displayImage();

let latestUser; // Declare latestUser at a higher scope

// Fetch the stored inputs from localStorage

const storedInputs = localStorage.getItem("inputs");

// Check if there are any stored inputs
if (storedInputs) {
  const inputs = JSON.parse(storedInputs);

  // Fetch the last user data from the inputs array
  latestUser = inputs[inputs.length - 1];

  // Update the profile page content
  document.querySelector(
    ".card-title"
  ).textContent = `Hello ${latestUser.name}`;
  document.querySelector(
    ".card-text"
  ).innerHTML = `Name: ${latestUser.name}<br> Email: ${latestUser.email}`;
} else {
  // when there are no stored inputs
  console.log("No user data available");
}

// Function to populate name and email in edit.html
function populateEditForm() {
  localStorage.setItem("latestUser", JSON.stringify(latestUser));

  // Redirect to edit.html
  window.location.href = "edit.html";
}
