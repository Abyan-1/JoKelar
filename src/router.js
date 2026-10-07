/**
 * JoKelar — Client-side Hash Router
 * Handles navigation between pages without full page reloads.
 */

const routes = {};
let currentRoute = null;
let onRouteChange = null;

/**
 * Register a route.
 * @param {string} path - Route name (e.g., 'beranda')
 * @param {{ render: () => string, init?: () => void }} handler
 */
export function addRoute(path, handler) {
  routes[path] = handler;
}

/**
 * Set a callback that fires on every route change.
 * @param {(path: string) => void} cb
 */
export function onNavigate(cb) {
  onRouteChange = cb;
}

/**
 * Navigate to a specific route.
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
 * Get the current active route name.
 * @returns {string}
 */
export function getCurrentRoute() {
  return currentRoute || 'beranda';
}

/**
 * Resolve and render the current hash route.
 */
function resolveRoute() {
  const hash = window.location.hash.replace('#', '') || 'beranda';
  const route = routes[hash];

  if (!route) {
    // Fallback to beranda if route not found
    window.location.hash = 'beranda';
    return;
  }

  currentRoute = hash;

  // Get the page container
  const pageContainer = document.getElementById('page-content');
  if (pageContainer) {
    pageContainer.innerHTML = `<div class="page-enter">${route.render()}</div>`;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Initialize page-specific JS
    if (route.init) {
      // Use requestAnimationFrame to ensure DOM is painted
      requestAnimationFrame(() => {
        route.init();
        initScrollReveal();
      });
    } else {
      requestAnimationFrame(() => {
        initScrollReveal();
      });
    }
  }

  // Notify listeners
  if (onRouteChange) {
    onRouteChange(hash);
  }
}

/**
 * Initialize Intersection Observer for scroll-triggered animations.
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');

  if (revealElements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach((el) => {
    // Reset animation state for fresh page loads
    el.classList.remove('animate-in');
    observer.observe(el);
  });
}

/**
 * Intercept clicks on [data-path] links for SPA navigation.
 */
function interceptLinks() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('[data-path]');
    if (link) {
      e.preventDefault();
      const path = link.getAttribute('data-path');
      navigateTo(path);
    }
  });
}

/**
 * Start the router — call this once on app init.
 */
export function startRouter() {
  interceptLinks();
  window.addEventListener('hashchange', resolveRoute);

  // Initial route
  resolveRoute();
}
