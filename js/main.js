/**
 * Main entry point for reservit.co landing page
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize i18n (language toggle + translations)
  if (window.i18n) {
    window.i18n.init();
  }

  // Initialize animations (scroll effects, mobile menu, etc.)
  if (window.animations) {
    window.animations.init();
  }

  // Set current year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Log initialization
  console.log('reservit.co initialized');
});
