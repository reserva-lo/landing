/**
 * Animations module for reserva.lo
 * Handles scroll animations with reduced motion support
 */

/**
 * Check if user prefers reduced motion
 */
function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Initialize scroll-triggered animations using Intersection Observer
 */
function initScrollAnimations() {
  // Skip if user prefers reduced motion
  if (prefersReducedMotion()) {
    // Make all animated elements visible immediately
    document.querySelectorAll('.animate-on-scroll, .animate-stagger').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Unobserve after animation to save resources
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('.animate-on-scroll, .animate-stagger').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Initialize header scroll behavior
 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScroll = 0;
  const scrollThreshold = 50;

  function handleScroll() {
    const currentScroll = window.scrollY;

    // Add/remove scrolled class
    if (currentScroll > scrollThreshold) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }

    lastScroll = currentScroll;
  }

  // Use passive listener for better scroll performance
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Check initial state
  handleScroll();
}

/**
 * Initialize smooth scroll for anchor links
 */
function initSmoothScroll() {
  // Skip if user prefers reduced motion (browser handles this via CSS)
  if (prefersReducedMotion()) return;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');

      // Skip if just "#"
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      e.preventDefault();

      // Account for fixed header height
      const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // Update URL without scrolling
      history.pushState(null, '', targetId);

      // Set focus for accessibility
      targetElement.setAttribute('tabindex', '-1');
      targetElement.focus({ preventScroll: true });
    });
  });
}

/**
 * Initialize mobile menu toggle
 */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.mobile-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

    toggle.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('is-open');

    // Prevent body scroll when menu is open
    document.body.style.overflow = !isExpanded ? 'hidden' : '';

    // Focus first menu item when opening
    if (!isExpanded) {
      const firstLink = menu.querySelector('.mobile-menu__link');
      if (firstLink) {
        firstLink.focus();
      }
    }
  });

  // Close menu when clicking a link
  menu.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });
}

/**
 * Initialize button hover effects (subtle lift)
 */
function initButtonEffects() {
  // Only for devices that support hover
  if (window.matchMedia('(hover: hover)').matches && !prefersReducedMotion()) {
    // Effects are handled via CSS, no JS needed
  }
}

/**
 * Initialize all animations
 */
function initAnimations() {
  initHeaderScroll();
  initScrollAnimations();
  initSmoothScroll();
  initMobileMenu();
  initButtonEffects();
}

// Export for use in other modules
window.animations = {
  init: initAnimations,
  prefersReducedMotion
};
