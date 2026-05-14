// Zac, path0171
// Contact Us JS
// Version 1.0.0

var form = document.getElementById("contact-form");
var confirmation = document.getElementById("confirmation");
var resetBtn = document.getElementById("reset-btn");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  form.style.display = "none";
  confirmation.style.display = "block";
});

resetBtn.addEventListener("click", function () {
  form.reset();
  confirmation.style.display = "none";
  form.style.display = "block";
});
