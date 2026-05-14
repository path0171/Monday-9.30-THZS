const storedName = localStorage.getItem('userName');
if (storedName) {
    document.getElementById('profile-name').textContent = storedName;
}

function signOut() {
    localStorage.removeItem('userName');
    window.location.href = 'homepage.html';
}

const applyButton = document.querySelector(".profile-button");

applyButton.addEventListener("click", function(event) {
    alert("Redirecting to the adoption application form.");
});

const profileSections = document.querySelectorAll(".profile-info");

profileSections.forEach(section => {
    section.addEventListener("mouseover", function() {
        section.style.transform = "scale(1.02)";
        section.style.transition = "0.3s ease";
    });

    section.addEventListener("mouseout", function() {
        section.style.transform = "scale(1)";
    });
});