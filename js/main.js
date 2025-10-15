// js/main.js
import { getQuote, getMindfulnessVideo } from "./api.mjs";
import { loadPartial } from "./utils.mjs";

// Load header & footer
loadPartial("header", "./public/partials/header.html").then(() => setupHamburger());
loadPartial("footer", "./public/partials/footer.html");

// Display Quote
async function displayQuote() {
  try {
    const { text, author } = await getQuote();
    const quoteEl = document.getElementById("mental-health-quote");
    const authorEl = document.getElementById("quote-author");

    if (quoteEl) quoteEl.textContent = `"${text}"`;
    if (authorEl) authorEl.textContent = `— ${author}`;
  } catch (error) {
    console.error("Error displaying quote:", error);
  }
}

// Display Video
async function displayVideo() {
  try {
    const videoData = await getMindfulnessVideo();
    const iframe = document.getElementById("mindfulness-video");

    if (videoData && iframe) {
      iframe.src = `https://www.youtube.com/embed/${videoData.videoId}`;
      iframe.title = videoData.title;
    } else if (iframe) {
      iframe.src = "";
      iframe.replaceWith("Sorry, the meditation video could not be loaded.");
    }
  } catch (error) {
    console.error("Error displaying video:", error);
  }
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
