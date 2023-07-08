let token = localStorage.getItem("token");
if (token) {
  document.getElementById("profile").style.display = "initial";
  document.getElementById("text").innerText = token;
  document.getElementById("text").style.color = "rgb(239, 189, 7)";
  document.getElementById("L_name").style.display = "none";
  document.getElementById("S_name").style.display = "none";
}

document.getElementById("find").addEventListener("click", Search);


  

function Search() {
  let key = document.getElementById("keyword").value;
  let city = document.getElementById("city").value;
  localStorage.setItem("search",JSON.stringify({key,city}));
  window.location.href="search.html"
}
