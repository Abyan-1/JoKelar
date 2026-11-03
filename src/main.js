import { inject } from '@vercel/analytics';
import './style.css';

// Initialize Vercel Web Analytics
inject();

import { addRoute, startRouter, onNavigate } from './router.js';
import { renderNavbar, initNavbar, updateNavbarActive } from './components/Navbar.js';
import { renderFooter } from './components/Footer.js';

// Page Modules
import * as Beranda from './pages/Beranda.js';
import * as Katalog from './pages/Katalog.js';
import * as Portofolio from './pages/Portofolio.js';
import * as Pendiri from './pages/Pendiri.js';
import * as Kontak from './pages/Kontak.js';

/**
 * Initialize the JoKelar Application Shell
 */
function initApp() {
  const app = document.getElementById('app');
  
  if (!app) return;

  // Mount Application Shell: Glass Floating Navbar + Main Viewport Container + Bento Footer
  app.innerHTML = `
    ${renderNavbar()}
    <main id="page-content" class="flex-grow pt-24 sm:pt-28 min-h-screen flex flex-col items-center overflow-x-hidden w-full relative z-10">
      <!-- Dynamic Pages will be injected here via Vanilla Router -->
    </main>
    ${renderFooter()}
  `;

  // Initialize Navbar interactive behavior (mobile menu)
  initNavbar();

  // Register Routes
  addRoute('beranda', Beranda);
  addRoute('catalog', Katalog);
  addRoute('katalog', Katalog);
  addRoute('katalog-tugas', Katalog);
  addRoute('portofolio', Portofolio);
  addRoute('pendiri', Pendiri);
  addRoute('kontak', Kontak);

  // Synchronize Navbar active state on route changes
  onNavigate((path) => {
    updateNavbarActive(path);
  });

  // Start Hash Router & Scroll Trigger Engine
  startRouter();
}

// Bootstrap on DOM Content Loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
