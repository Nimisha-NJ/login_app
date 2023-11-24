function saveData() {
  let email, password;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  let user_records = JSON.parse(localStorage.getItem("inputs")) || [];

  if (
    user_records.some((v) => {
      return v.email == email && v.password == password;
    })
  ) {
    alert("Login successful");
    
    let current_user = user_records.find(
      (v) => v.email == email && v.password == password
    );
if (current_user) {
    localStorage.setItem("name" , current_user.name)
    localStorage.setItem("email", current_user.email);
    localStorage.setItem("id", current_user.id);
    window.location.href = "profile.html";
} else {
   alert("Login failed") 
}



    
  } else {
    alert("Login failed");
  }
}
