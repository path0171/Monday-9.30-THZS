// Hiruna, rana0302
// Pet Selected JS
// Version 1.0.0

var params = new URLSearchParams(window.location.search);
var petId = params.get("pet");

if (!petId) {
  showNotFound();
} else {
  fetch("data/pets.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (!data.pets) {
        showNotFound();
        return;
      }
      var pet = findPet(data.pets, petId);
      if (pet) {
        showPet(pet);
      } else {
        showNotFound();
      }
    })
    .catch(function () {
      showNotFound();
    });
}

function findPet(pets, id) {
  for (var i = 0; i < pets.length; i++) {
    if (pets[i].id === id) {
      return pets[i];
    }
  }
  return null;
}

function showPet(pet) {
  document.title = "Adopt It - " + pet.name;

  document.getElementById("pet-name").textContent = pet.name;
  document.getElementById("pet-breed").textContent = pet.breed;
  document.getElementById("pet-age").textContent = pet.age;
  document.getElementById("pet-gender").textContent =
    pet.gender.charAt(0).toUpperCase() + pet.gender.slice(1);
  document.getElementById("pet-location").textContent = pet.location;
  document.getElementById("pet-colour").textContent = pet.colour;

  document.getElementById("about-title").textContent = "About " + pet.name;
  document.getElementById("about-intro").textContent = pet.aboutIntro;
  document.getElementById("about-subtext").textContent = pet.aboutSubtext;
  document.getElementById("medical-notes").textContent = pet.medicalNotes;

  var aboutList = document.getElementById("about-points");
  aboutList.innerHTML = "";
  for (var i = 0; i < pet.aboutPoints.length; i++) {
    var li = document.createElement("li");
    li.textContent = pet.aboutPoints[i];
    aboutList.appendChild(li);
  }

  var checksList = document.getElementById("checks-list");
  checksList.innerHTML = "";
  for (var j = 0; j < pet.checks.length; j++) {
    var checkLi = document.createElement("li");
    checkLi.textContent = pet.checks[j];
    checksList.appendChild(checkLi);
  }

  var mainImage = document.getElementById("pet-main-image");
  mainImage.src = pet.image;
  mainImage.alt = pet.name;

  var extraBox = document.getElementById("pet-extra-images");
  extraBox.innerHTML = "";
  if (pet.extraImages.length > 0) {
    for (var k = 0; k < pet.extraImages.length; k++) {
      var img = document.createElement("img");
      img.src = pet.extraImages[k];
      img.alt = pet.name + " photo " + (k + 2);
      extraBox.appendChild(img);
    }
    extraBox.style.display = "";
  } else {
    extraBox.style.display = "none";
  }

  var adoptBtn = document.getElementById("adopt-btn");
  adoptBtn.textContent = "Enquire " + pet.name;
  adoptBtn.href = "adoption_form.html";
}

function showNotFound() {
  document.title = "Adopt It - Pet Not Found";
  document.querySelector(".pet-selected").style.display = "none";
  document.getElementById("pet-not-found").style.display = "block";
}
