// Saaim, saai0013
// Adoption Form JS
// Version 1.0.0

const form = document.querySelector(".adoption-form");

form.addEventListener("submit", function(e) {

    let name = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let experience = document.getElementById("experience").value.trim();

    if (name.length < 2) {
        alert("Please enter a valid name");
        e.preventDefault();
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter a valid email");
        e.preventDefault();
        return;
    }

    if (phone.length < 8) {
        alert("Enter a valid phone number");
        e.preventDefault();
        return;
    }

    if (experience.length < 10) {
        alert("Please write at least 10 characters about your experience");
        e.preventDefault();
        return;
    }

});