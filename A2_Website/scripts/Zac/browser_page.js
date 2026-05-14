// Zac, path0171
// Browser Page JS
// Version 1.0.0

var searchInput = document.getElementById("search-input");
var typeBtns = document.querySelectorAll(".type-btn");
var genderBtns = document.querySelectorAll(".gender-btn");
var locationCheckboxes = document.querySelectorAll(".location-checkbox");
var resetBtn = document.getElementById("reset-filters");
var noResults = document.getElementById("no-results");

var activeType = "all";
var activeGender = "all";

function applyFilters() {
  var searchVal = searchInput.value.toLowerCase();

  var checkedLocations = [];
  locationCheckboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      checkedLocations.push(checkbox.value);
    }
  });

  var cards = document.querySelectorAll(".pet-card");
  cards.forEach(function (card) {
    var name = card.getAttribute("data-name");
    var breed = card.getAttribute("data-breed");
    var type = card.getAttribute("data-type");
    var gender = card.getAttribute("data-gender");
    var location = card.getAttribute("data-location");

    var matchesSearch = name.includes(searchVal) || breed.includes(searchVal);
    var matchesType = activeType === "all" || type === activeType;
    var matchesGender = activeGender === "all" || gender === activeGender;
    var matchesLocation = checkedLocations.length === 0 || checkedLocations.includes(location);

    if (matchesSearch && matchesType && matchesGender && matchesLocation) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });

  var sections = document.querySelectorAll(".pet-type-section");
  var anyVisible = false;

  sections.forEach(function (section) {
    var sectionCards = section.querySelectorAll(".pet-card");
    var hasVisible = false;

    sectionCards.forEach(function (card) {
      if (card.style.display !== "none") {
        hasVisible = true;
      }
    });

    if (hasVisible) {
      section.style.display = "";
      anyVisible = true;
    } else {
      section.style.display = "none";
    }
  });

  noResults.style.display = anyVisible ? "none" : "block";
}

typeBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    typeBtns.forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");
    activeType = btn.getAttribute("data-type");
    applyFilters();
  });
});

genderBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    genderBtns.forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");
    activeGender = btn.getAttribute("data-gender");
    applyFilters();
  });
});

searchInput.addEventListener("input", function () {
  applyFilters();
});

locationCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    applyFilters();
  });
});

resetBtn.addEventListener("click", function () {
  searchInput.value = "";
  activeType = "all";
  activeGender = "all";

  typeBtns.forEach(function (btn) {
    btn.classList.remove("active");
  });
  document.querySelector(".type-btn[data-type='all']").classList.add("active");

  genderBtns.forEach(function (btn) {
    btn.classList.remove("active");
  });
  document.querySelector(".gender-btn[data-gender='all']").classList.add("active");

  locationCheckboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });

  applyFilters();
});
