// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if(target){
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Simple button effect
const btn = document.querySelector(".btn");
if(btn){
  btn.addEventListener("click", () => {
    btn.innerText = "Loading...";
    setTimeout(() => {
      btn.innerText = "Explore Projects";
    }, 1000);
  });
}// Fake signup system (frontend only)
function signupUser(){
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if(name && email && password){
    localStorage.setItem("user", JSON.stringify({name, email, password}));
    alert("Account created successfully!");
    window.location.href = "login.html";
  } else {
    alert("Please fill all fields");
  }
}

// Fake login system
function loginUser(){
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("user"));

  if(user && email === user.email && password === user.password){
    alert("Login successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid credentials");
  }
}
