document.addEventListener("DOMContentLoaded", function() {
    const continueButton = document.querySelector(".continue");
    
    continueButton.addEventListener("click", function() {
        const emailInput = document.querySelector("input[type='text']");
        const email = emailInput.value.trim();

        // Simple email validation
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailPattern.test(email)) {
            alert("Email is valid, continuing to next step.");
            // Redirect or proceed to the next page, or you can handle it accordingly.
            // For example, window.location.href = 'nextpage.html';
        } else {
            alert("Please enter a valid email address.");
        }
    });
});
