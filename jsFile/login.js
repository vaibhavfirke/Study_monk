let user = JSON.parse(localStorage.getItem("userInfo")) || [];

let login = document.getElementById("login");

login.addEventListener("click", Login);

function Login() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  if (email.length > 0 && validateEmail(email)) {
    document.querySelector(".Email").style.borderColor = "initial";
  } else {
    document.querySelector(".Email").style.borderColor = "red";
  }

  if (pass.length <= 0) {
    document.querySelector(".Pass").style.borderColor = "red";
  } else {
    document.querySelector(".Pass").style.borderColor = "initial";
  }
if(pass.length>0&&validateEmail(email)){
    let findEmail=user.filter((a)=>a.Email==email&&a.Password==pass);
    console.log(findEmail)
    if(findEmail.length>=1){
        alert("Login Sucessful !");
        localStorage.setItem("token",findEmail[0].Name);
        window.location.href="index.html";
    }else{
        alert("Check your Email and Password !");
    }
}

}
function validateEmail(email) {
  var regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regexPattern.test(email)) {
    return true;
  } else {
    return false;
  }
}
