// Hiruna, rana0302
// Log In JS
// Version 1.0.1

if (localStorage.getItem("userName")) {
  window.location.href = "profile_page.html";
}

function signup() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirm = document.getElementById("confirm-password").value;
  var error = document.getElementById("error-message");

  if (name === "" || email === "" || password === "" || confirm === "") {
    error.textContent = "Please fill in all fields.";
    return;
  }

  if (password !== confirm) {
    error.textContent = "Passwords do not match.";
    return;
  }

  if (!email.includes("@")) {
    error.textContent = "Please enter a valid email address.";
    return;
  }

  var formData = new FormData();
  formData.append("action", "save_user");
  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);

  fetch("php/data.php", {
    method: "POST",
    body: formData,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.success) {
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        window.location.href = "profile_page.html";
      } else {
        error.textContent = data.message;
      }
    })
    .catch(function () {
      error.textContent =
        "Could not sign up. Make sure the PHP server is running.";
    });
}
