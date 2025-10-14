// js/main.js
import { getQuote, getMindfulnessVideo } from "./api.mjs";
import { loadPartial } from "./utils.mjs";

// Load header & footer
loadPartial("header", "./public/partials/header.html").then(() => setupHamburger());
loadPartial("footer", "./public/partials/footer.html");

// Display Quote
async function displayQuote() {
  const { text, author } = await getQuote();
  const quoteEl = document.getElementById("mental-health-quote");
  const authorEl = document.getElementById("quote-author");
  if (quoteEl) quoteEl.textContent = `"${text}"`;
  if (authorEl) authorEl.textContent = `— ${author}`;
}

// Display Video
async function displayVideo() {
  const videoURL = await getMindfulnessVideo();
  const iframe = document.getElementById("mindfulness-video");
  if (videoURL && iframe) iframe.src = videoURL;
}

// Hamburger menu toggle
function setupHamburger() {
  const hamButton = document.getElementById("menu");
  const nav = document.querySelector(".navigation");
  if (hamButton && nav) {
    hamButton.addEventListener("click", () => {
      nav.classList.toggle("open");
      hamButton.classList.toggle("open");
    });
  } else {
    console.warn("Hamburger menu elements not found.");
  }
}

// Run quote & video after DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  displayQuote();
  displayVideo();
});
