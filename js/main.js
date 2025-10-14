import { getQuote, getMindfulnessVideo } from "./api.mjs";
import { loadPartial } from "./utils.mjs";

// Load Header & Footer
async function init() {
  await loadPartial("header", "./public/partials/header.html");
  await loadPartial("footer", "./public/partials/footer.html");

  const hamButton = document.querySelector("#menu");
  const navigation = document.querySelector(".navigation");

  if (hamButton && navigation) {
    hamButton.addEventListener("click", () => {
      navigation.classList.toggle("open");
      hamButton.classList.toggle("open");
    });
  } else {
    console.error("Hamburger menu elements not found.");
  }

  // Display Quote
  const { text, author } = await getQuote();
  document.getElementById("mental-health-quote").textContent = `"${text}"`;
  document.getElementById("quote-author").textContent = `— ${author}`;

  // Display Video
  const videoURL = await getMindfulnessVideo();
  const iframe = document.getElementById("mindfulness-video");
  if (videoURL && iframe) {
    iframe.src = videoURL;
  }
}

// Run everything after DOM is ready
document.addEventListener("DOMContentLoaded", init);
