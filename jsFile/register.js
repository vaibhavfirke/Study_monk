

let register=document.getElementById("register");

register.addEventListener("click",submit);
let user = JSON.parse(localStorage.getItem("userInfo"))||[];
function submit(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let pass=document.getElementById("password").value;
    let Re_pass=document.getElementById("Re_password").value;
     
    if(name.length==0){
       let n= document.querySelector(".Name");
       n.style.borderColor = "red"; 
       
    }else {
        let n= document.querySelector(".Name");
        n.style.borderColor = "initial";
    }
    if(pass!=Re_pass|| pass.length==0&&Re_pass.length==0){
        let n= document.querySelector(".Pass");
        let m= document.querySelector(".Rpass");
        n.style.borderColor = "red"; 
        m.style.borderColor = "red"; 
        
     }else {
         let n= document.querySelector(".Pass");
         let m= document.querySelector(".Rpass");
         n.style.borderColor = "initial";
         m.style.borderColor = "initial";
     }
     if(!validateEmail(email)||email.length==0){
        let n= document.querySelector(".Email");
        n.style.borderColor = "red"; 
        
     }else {
         let n= document.querySelector(".Email");
         n.style.borderColor = "initial";
     }
     let info={Name:name,Email:email,Password:pass}
    if(name&&email&&pass&&Re_pass&&pass==Re_pass){
       
        let validate=user.filter((a)=>a.Email==email);
       
      if(user.length>0&&validate.length>0){
        alert("Email already Exisist !");
        window.location.href="login.html"
      }else{
        user.push(info)
        localStorage.setItem("userInfo",JSON.stringify(user));
        alert("User Register Sucessfull !")
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