
const navbar = document.getElementById("navbar");
const navbtn = document.getElementById("navbtn");
navbtn.addEventListener("click", function () {
  navbar.classList.toggle("visible");
  navbtn.classList.toggle("rotate");
});