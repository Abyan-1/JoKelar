/**
 * JoKelar — Client-side Hash Router & Viewport Animation Engine
 * Pure Vanilla JavaScript DOM Controller with IntersectionObserver
 */

const routes = {};
let currentRoute = null;
let onRouteChange = null;
let scrollObserver = null;

/**
 * Register a route.
 * @param {string} path - Route identifier (e.g., 'beranda')
 * @param {{ render: () => string, init?: () => void }} handler
 */
export function addRoute(path, handler) {
  routes[path] = handler;
}

/**
 * Register a callback that fires on every route change.
 * @param {(path: string) => void} cb
 */
export function onNavigate(cb) {
  onRouteChange = cb;
}

/**
 * Programmatically navigate to a specific route.
 * @param {string} path
 */
export function navigateTo(path) {
  if (path === currentRoute) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  window.location.hash = path;
}

/**
 * Get current active route.
 * @returns {string}
 */
export function getCurrentRoute() {
  return currentRoute || 'beranda';
}

/**
 * Resolve and render current route based on window location hash.
 */
function resolveRoute() {
  const hash = window.location.hash.replace('#', '') || 'beranda';
  const route = routes[hash];

  if (!route) {
    window.location.hash = 'beranda';
    return;
  }

  currentRoute = hash;

  const pageContainer = document.getElementById('page-content');
  if (pageContainer) {
    // Inject rendered page inside a motion container
    pageContainer.innerHTML = `<div class="page-enter w-full flex flex-col items-center">${route.render()}</div>`;

    // Reset scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Execute page-specific lifecycle hooks & initialize intersection animations
    requestAnimationFrame(() => {
      if (typeof route.init === 'function') {
        try {
          route.init();
        } catch (err) {
          console.error('[JoKelar Router] Error during page init:', err);
        }
      }
      initScrollReveal();
    });
  }

  if (onRouteChange) {
    onRouteChange(hash);
  }
}

/**
 * Vanilla JS IntersectionObserver for high-performance scroll triggers.
 * Detects elements marked with .reveal or .reveal-scale and triggers CSS transitions.
 */
export function initScrollReveal() {
  if (scrollObserver) {
    scrollObserver.disconnect();
  }

  const revealElements = document.querySelectorAll('.reveal, .reveal-scale');

  if (revealElements.length === 0) return;

  scrollObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Once animated, unobserve for performance
          scrollObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach((el) => {
    scrollObserver.observe(el);
  });
}

/**
 * Start listening for hash changes and initial route.
 */
export function startRouter() {
  window.addEventListener('hashchange', resolveRoute);
  resolveRoute();
}
