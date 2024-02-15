
function setAction(form) {
    document.getElementById("response-message").style.display = "block";
    document.getElementById("form-text").style.display = "none";
    document.getElementById("myForm").style.display = "none";
    return false;
  }

  const navToggle = document.querySelector(".nav-toggle")
  const navLinks = document.querySelector(".nav-links")
  const NavToggleLabel = document.querySelector(".nav-toggle-label")

 navToggle.addEventListener("click", () =>  {
   navToggle.classList.add("active")
   NavToggleLabel.classList.add("active")
   navLinks.classList.add("active")
 })