import './style.css';

import { addRoute, startRouter, onNavigate } from './router.js';
import { renderNavbar, initNavbar, updateNavbarActive } from './components/Navbar.js';
import { renderFooter } from './components/Footer.js';

// Page Modules
import * as Beranda from './pages/Beranda.js';
import * as Katalog from './pages/Katalog.js';
import * as Pendiri from './pages/Pendiri.js';
import * as Kontak from './pages/Kontak.js';

/**
 * Initialize the JoKelar Application
 */
function initApp() {
  const app = document.getElementById('app');
  
  if (!app) return;

  // Render static app shell (Navbar + Content Container + Footer)
  app.innerHTML = `
    ${renderNavbar()}
    <!-- Main offset for fixed navbar -->
    <main id="page-content" class="flex-grow pt-20 min-h-screen flex flex-col items-center overflow-x-hidden w-full relative">
      <!-- Router will inject page content here -->
    </main>
    ${renderFooter()}
  `;

  // Initialize Navbar JS (mobile menu)
  initNavbar();

  // Register Routes
  addRoute('beranda', Beranda);
  addRoute('katalog-tugas', Katalog);
  addRoute('pendiri', Pendiri);
  addRoute('kontak', Kontak);

  // Bind Navbar active state update to router
  onNavigate((path) => {
    updateNavbarActive(path);
  });

  // Start Router
  startRouter();
}

// Bootstrap
document.addEventListener('DOMContentLoaded', initApp);
