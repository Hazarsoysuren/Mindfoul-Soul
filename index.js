
function setAction(form) {
  document.getElementById("response-message").style.display = "block";
  document.getElementById("form-text").style.display = "none";
  document.getElementById("myForm").style.display = "none";
  return false;
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  // Replace the submit button with text saying "Sent"
  var submitButton = document.getElementById("contactForm").querySelector("button[type='submit']");
  submitButton.parentNode.innerHTML = "<p>Sent</p>";
  return false; // Prevent further event propagation
});

  const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



