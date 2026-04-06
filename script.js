// Smooth scroll (basic)
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        console.log("Navigation clicked");
    });
});

// Form validation
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name === "" || email === "") {
        alert("Please fill all required fields");
        e.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});
