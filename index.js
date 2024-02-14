
    // Add event listener to form submission
    document.getElementById("myForm").addEventListener("submit", function(event) {
        // Prevent default form submission behavior
        event.preventDefault();

        // Display the response message
        document.getElementById("response-message").style.display = "block";
        document.getElementById("form-text").style.display = "none";
    });
