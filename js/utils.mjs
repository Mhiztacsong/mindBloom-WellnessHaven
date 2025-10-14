// js/utils.mjs
export async function loadPartial(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to load ${filePath}: ${response.status}`);
    const html = await response.text();
    const container = document.getElementById(`main-${elementId}`);
    if (container) container.innerHTML = html;
  } catch (err) {
    console.error(`Error loading ${elementId} partial:`, err);
  }
}
