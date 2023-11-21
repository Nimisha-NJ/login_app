function saveData() {
  let email, password;
  email = document.getElementById("email").value;
  password = document.getElementById("password").value;

  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("inputs"))
    ? JSON.parse(localStorage.getItem("inputs"))
    : [];

    if (user_records.some((v)=>{
       return v.email == email && v.password == password
    })) {
        alert("Login successful")
        let current_user = user_records.filter((v)=>{return v.email == email && v.password == password})[0]
        localStorage.setItem("name" , current_user.name)
        localStorage.setItem("email", current_user.email);
        window.location.href = "login_profile.html"
    } else {
        alert("Login failed"); 
    }
}
