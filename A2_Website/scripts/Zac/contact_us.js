// Zac, path0171
// Contact Us JS
// Version 1.0.3

var form = document.getElementById("contact-form");
var confirmation = document.getElementById("confirmation");
var resetBtn = document.getElementById("reset-btn");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var formData = new FormData(form);
  formData.append("action", "save_contact");

  fetch("php/data.php", {
    method: "POST",
    body: formData,
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (data.success) {
        form.style.display = "none";
        confirmation.style.display = "block";
      } else {
        alert(data.message);
      }
    })
    .catch(function () {
      alert("Could not send message. Make sure the PHP server is running.");
    });
});

resetBtn.addEventListener("click", function () {
  form.reset();
  confirmation.style.display = "none";
  form.style.display = "block";
});
