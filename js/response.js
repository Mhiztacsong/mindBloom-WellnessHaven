// Display form data on the thank you page
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const name = params.get("name");
  const message = params.get("message");

  if (name && message) {
    document.getElementById("responseMessage").textContent =
      `Thank you, ${name}! Your message has been received: "${message}". We'll reach out soon.`;
  }
});
