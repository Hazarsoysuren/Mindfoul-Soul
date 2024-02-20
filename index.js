
function setAction(form) {
  document.getElementById("response-message").style.display = "block";
  document.getElementById("form-text").style.display = "none";
  document.getElementById("myForm").style.display = "none";
  return false;
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get the submit button
  var submitButton = document.getElementById("contactForm").querySelector("button[type='submit']");

  // Create a new element for the "Sent" message
  var sentMessage = document.createElement("p");
  sentMessage.textContent = "Sent";

  // Replace the submit button with the "Sent" message
  submitButton.parentNode.replaceChild(sentMessage, submitButton);
});
  const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



