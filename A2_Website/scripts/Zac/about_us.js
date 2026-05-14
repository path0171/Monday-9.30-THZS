var sections = document.querySelectorAll(".fade-in");

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

sections.forEach(function (section) {
  observer.observe(section);
});
