
function setAction(form) {
  document.getElementById("response-message").style.display = "block";
  document.getElementById("form-text").style.display = "none";
  document.getElementById("myForm").style.display = "none";
  return false;
}

document.getElementById("myBtn").addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World";
  event.preventDefault();
});

document.getElementById('send-button').addEventListener('click', function(event) {
  replaceButton();
});

function replaceButton() {
  // Hide the button
  document.getElementById('send-button').style.display = 'none';

  // Display the replacement text
  document.getElementById('replacement-text').style.display = 'inline';
}
  
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



