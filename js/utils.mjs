// Utility to load and inject a partial (header, footer, etc.)
export async function loadPartial(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to load ${filePath}: ${response.status}`);
    }

    const html = await response.text();
    const container = document.getElementById(`main-${elementId}`);

    if (container) {
      container.innerHTML = html;
    } else {
      console.warn(`Element with id "main-${elementId}" not found.`);
    }
  } catch (error) {
    console.error(`Error loading ${elementId} partial:`, error);
  }
}
