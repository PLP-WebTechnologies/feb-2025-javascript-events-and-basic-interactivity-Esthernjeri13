// Enter button event
const enterBtn = document.getElementById("enter-btn");
const shopSection = document.getElementById("shop-section");
enterBtn.addEventListener("click", () => {
  shopSection.classList.remove("hidden");
  enterBtn.style.display = "none";
  document.body.style.backgroundColor = "#1a0000";
});

// Magic button interaction
const magicBtn = document.getElementById("magic-btn");
magicBtn.addEventListener("click", function () {
  this.innerText = "RUN!";
  this.style.backgroundColor = "black";
});

// Secret double-click reveal
function revealSecret() {
  alert("🎁 Secret Code Unlocked: FRIENDS DONT LIE");
}

// Real-time form validation
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const feedback = document.getElementById("form-feedback");

emailInput.addEventListener("input", () => {
  if (!emailInput.value.includes("@")) {
    feedback.textContent = "Enter a valid email. The Mind Flayer is watching...";
  } else {
    feedback.textContent = "";
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters!";
  } else {
    feedback.textContent = "";
  }
});

// Bonus keypress detection
window.addEventListener("keydown", (e) => {
  if (e.key.toLowerCase() === "u") {
    alert("👁 You've unlocked the Upside Down gallery (Coming Soon!)");
  }
});
