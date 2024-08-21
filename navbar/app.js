alert("connected");
document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-link");
  var currentUrl = window.location.pathname;

  console.log(navLinks);

  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === currentUrl) {
      link.classList.add("active");
    }
  });
});
