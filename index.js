
document.getElementById('resume-link-1').addEventListener("click", () => {
  window.open("./assets/Prerna_Dave_Resume (5).pdf", "_blank");
})

document.getElementById('resume-link-2').addEventListener("click", () => {
  window.open("https://drive.google.com/file/d/11o1GIF9aJjQwj77oVIVkgrgb17PjJhD_/view?usp=drive_link", "_blank");
})

document.getElementById('resume-link-3').addEventListener("click", () => {
  window.open("https://drive.google.com/file/d/11o1GIF9aJjQwj77oVIVkgrgb17PjJhD_/view?usp=drive_link", "_blank");
})

document.addEventListener("DOMContentLoaded", function () {
  var navCheck = document.getElementById("nav-check");
  var navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navCheck.checked = false;
    });
  });
});