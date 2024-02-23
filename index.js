
function setAction(form) {
  document.getElementById("response-message").style.display = "block";
  document.getElementById("form-text").style.display = "none";
  document.getElementById("myForm").style.display = "none";
  return false;
}

  
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



