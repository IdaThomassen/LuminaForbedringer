console.log("Hello");

// køb knap
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

// navigation bar scroll effect
const nav = document.getElementById("topNav");

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    nav.classList.add("scrolled"); // Shows the Navbar background when scrolled to the top
  } else {
    nav.classList.remove("scrolled"); // removes the background and adds the blur when scrolling down
  }
});

// kommer snart //
const button = document.getElementById("tilmeld-knap");
const emailField = document.getElementById("email");

button.addEventListener("click", () => {
  if (emailField.value.trim() === "") {
    alert("Indtast venligst en e-mail.");
    return;
  }

  button.textContent = "Tilmeldt";
  button.disabled = true;
});

// footer bunden //
const footerBtn = document.getElementById("footerSubmitBtn");
const footerEmail = document.getElementById("footerEmail");

footerBtn.addEventListener("click", () => {
  if (footerEmail.value.trim() === "") {
    alert("Indtast venligst en e-mail.");
    return;
  }

  footerBtn.textContent = "Tilmeldt";
  footerBtn.disabled = true;
});


// Run on page load in case user refreshes mid-scroll
if (window.scrollY === 0) {
  nav.classList.add("scrolled");
}
