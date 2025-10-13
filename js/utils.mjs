// Load a partial HTML file
export async function loadTemplate(path) {
  try {
    const res = await fetch(path);
    if (!res.ok) throw new Error(`Failed to load ${path}: ${res.status}`);
    return await res.text();
  } catch (err) {
    console.error("Template load error:", err);
    return "";
  }
}

// Render a loaded template into a parent element
export function renderWithTemplate(template, parentElement) {
  parentElement.innerHTML = template;
}

// Dynamically load header and footer
export async function loadHeaderFooter() {
  try {
    const [headerHTML, footerHTML] = await Promise.all([
      loadTemplate("public/partials/header.html"),
      loadTemplate("public/partials/footer.html")
    ]);

    const headerElement = document.querySelector("#main-header");
    const footerElement = document.querySelector("#main-footer");

    if (headerElement) renderWithTemplate(headerHTML, headerElement);
    if (footerElement) renderWithTemplate(footerHTML, footerElement);
  } catch (err) {
    console.error("Error loading header/footer:", err);
  }
}
