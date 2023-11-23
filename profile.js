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




function populateEditForm() {

    window.location.href = "edit.html";

}

function logOut() {
  window.location.href = "login.html";
}