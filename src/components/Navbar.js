/**
 * JoKelar — Shared Navbar Component
 * Renders the fixed top navigation bar with active state and mobile menu.
 */
import { getCurrentRoute } from '../router.js';

/**
 * Render the navbar HTML.
 * @returns {string}
 */
export function renderNavbar() {
  const active = getCurrentRoute();

  const navLinks = [
    { path: 'beranda', label: 'Beranda' },
    { path: 'katalog-tugas', label: 'Katalog Tugas' },
    { path: 'pendiri', label: 'Pendiri' },
    { path: 'kontak', label: 'Kontak' },
  ];

  const desktopLinks = navLinks
    .map((link) => {
      const isActive = active === link.path;
      const classes = isActive
        ? 'px-space-md py-space-sm transition-colors bg-surface-container text-primary font-bold rounded-xl'
        : 'px-space-md py-space-sm font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors rounded-xl';
      const ariaCurrent = isActive ? ' aria-current="page"' : '';
      return `<a class="${classes}" data-path="${link.path}" href="#${link.path}"${ariaCurrent}>${link.label}</a>`;
    })
    .join('');

  const mobileLinks = navLinks
    .map((link) => {
      const isActive = active === link.path;
      const classes = isActive
        ? 'block px-space-md py-space-sm bg-surface-container text-primary font-bold rounded-xl'
        : 'block px-space-md py-space-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors rounded-xl';
      return `<a class="${classes}" data-path="${link.path}" href="#${link.path}">${link.label}</a>`;
    })
    .join('');

  return `
    <header id="main-navbar" class="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div class="h-20 w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-space-md">
        <div class="flex items-center gap-space-lg">
          <!-- Logo -->
          <a class="flex items-center gap-space-sm group" data-path="beranda" href="#beranda">
            <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary font-headline-sm text-headline-sm font-extrabold">JK</div>
            <div class="flex flex-col">
              <span class="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-none group-hover:text-primary transition-colors">JoKelar</span>
              <span class="font-label-code text-label-code text-on-surface-variant font-medium">Solusi Tugas #1</span>
            </div>
          </a>
          <!-- Desktop Nav -->
          <nav class="hidden lg:flex items-center gap-space-xs p-space-xs">
            ${desktopLinks}
          </nav>
        </div>
        <div class="flex items-center gap-space-md">
          <!-- CTA Button -->
          <a class="hidden sm:inline-flex items-center gap-space-xs px-space-md py-space-sm bg-secondary-container text-on-secondary-fixed font-label-badge text-label-badge uppercase tracking-wider rounded-xl transition-all hover:bg-secondary-fixed hover:text-on-secondary-fixed active:translate-x-0.5 active:translate-y-0.5"
             href="https://wa.me/message/RUK4IFU7KE4YK1" rel="noopener noreferrer" target="_blank">
            <span class="material-symbols-outlined text-lg">chat</span>
            <span>Konsultasi Sekarang</span>
          </a>
          <!-- Mobile Hamburger -->
          <button id="mobile-menu-btn" class="lg:hidden w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors" aria-label="Toggle menu">
            <span class="material-symbols-outlined text-xl" id="hamburger-icon">menu</span>
          </button>
        </div>
      </div>
      <!-- Mobile Menu Dropdown -->
      <div id="mobile-menu" class="hidden lg:hidden bg-surface-container-lowest/98 backdrop-blur-md shadow-lg border-t border-outline-variant/20">
        <div class="max-w-[1280px] mx-auto px-margin-mobile py-space-md flex flex-col gap-space-xs mobile-menu-enter">
          ${mobileLinks}
          <a class="mt-space-xs inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-secondary-container text-on-secondary-fixed font-label-badge text-label-badge uppercase tracking-wider rounded-xl transition-all sm:hidden"
             href="https://wa.me/message/RUK4IFU7KE4YK1" rel="noopener noreferrer" target="_blank">
            <span class="material-symbols-outlined text-lg">chat</span>
            <span>Konsultasi Sekarang</span>
          </a>
        </div>
      </div>
    </header>
  `;
}

/**
 * Initialize navbar interactivity (mobile menu toggle).
 */
export function initNavbar() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('hamburger-icon');

  if (btn && menu && icon) {
    btn.addEventListener('click', () => {
      const isOpen = !menu.classList.contains('hidden');
      if (isOpen) {
        menu.classList.add('hidden');
        icon.textContent = 'menu';
      } else {
        menu.classList.remove('hidden');
        icon.textContent = 'close';
      }
    });

    // Close mobile menu on navigation
    menu.addEventListener('click', (e) => {
      if (e.target.closest('[data-path]')) {
        menu.classList.add('hidden');
        icon.textContent = 'menu';
      }
    });
  }
}

/**
 * Update the active state in the navbar without full re-render.
 * @param {string} activePath
 */
export function updateNavbarActive(activePath) {
  const nav = document.getElementById('main-navbar');
  if (!nav) return;

  // Update desktop nav
  nav.querySelectorAll('nav a[data-path]').forEach((link) => {
    const path = link.getAttribute('data-path');
    if (path === activePath) {
      link.className = 'px-space-md py-space-sm transition-colors bg-surface-container text-primary font-bold rounded-xl';
      link.setAttribute('aria-current', 'page');
    } else {
      link.className = 'px-space-md py-space-sm font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors rounded-xl';
      link.removeAttribute('aria-current');
    }
  });

  // Update mobile nav
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a[data-path]').forEach((link) => {
      const path = link.getAttribute('data-path');
      if (path === activePath) {
        link.className = 'block px-space-md py-space-sm bg-surface-container text-primary font-bold rounded-xl';
      } else {
        link.className = 'block px-space-md py-space-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors rounded-xl';
      }
    });
  }
}
