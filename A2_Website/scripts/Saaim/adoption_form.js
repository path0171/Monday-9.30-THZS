// Saaim, saai0013
// Adoption Form JS
// Version 1.0.1

var form = document.querySelector(".adoption-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("fullname").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var experience = document.getElementById("experience").value.trim();

  if (name.length < 2) {
    alert("Please enter a valid name");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Enter a valid email");
    return;
  }

  if (phone.length < 8) {
    alert("Enter a valid phone number");
    return;
  }

  if (experience.length < 10) {
    alert("Please write at least 10 characters about your experience");
    return;
  }

  var formData = new FormData(form);
  formData.append("action", "save_adoption");

  fetch("php/data.php", {
    method: "POST",
    body: formData,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.success) {
        alert("Application submitted successfully!");
        form.reset();
      } else {
        alert(data.message);
      }
    })
    .catch(function () {
      alert("Could not submit application. Make sure the PHP server is running.");
    });
});
