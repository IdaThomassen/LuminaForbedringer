console.log("Heloooo");

const købNuBtn = document.getElementById("KØB-NU-button");

købNuBtn.addEventListener("click", function () {
  this.classList.toggle("active");

  // Skifter tekst baseret på om knappen har klassen "active"
  if (this.classList.contains("active")) {
    this.textContent = "TILFØJET";
  } else {
    this.textContent = "KØB NU";
  }
});


const nav = document.getElementById("topNav");

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    nav.classList.add("scrolled"); // Shows the Navbar background when scrolled to the top
  } else {
    nav.classList.remove("scrolled"); // removes the background and adds the blur when scrolling down
  }
});

// Run on page load in case user refreshes mid-scroll
if (window.scrollY === 0) {
  nav.classList.add("scrolled");
}
