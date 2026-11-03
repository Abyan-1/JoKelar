/**
 * JoKelar — Shared Clean White Floating Navbar
 * Modern Light Theme Floating Navigation Bar with Logo Colors (White, Blue, Yellow, Gray, Black)
 */

import { getCurrentRoute } from '../router.js';
import logoSrc from '../assets/logo.jpeg';

export function renderNavbar() {
  const active = getCurrentRoute();

  const navLinks = [
    { path: 'beranda', label: 'Beranda' },
    { path: 'catalog', label: 'Catalog' },
    { path: 'portofolio', label: 'Portofolio' },
    { path: 'pendiri', label: 'Tim Pendiri' },
    { path: 'kontak', label: 'Kontak' },
  ];

  const desktopLinks = navLinks
    .map((link) => {
      const isActive = active === link.path || (link.path === 'catalog' && (active === 'katalog' || active === 'katalog-tugas'));
      const activeClasses = isActive
        ? 'text-blue-700 bg-blue-50/90 border border-blue-200 shadow-sm font-bold'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 border border-transparent font-medium';
      
      return `
        <a 
          href="#${link.path}" 
          data-path="${link.path}"
          class="nav-link px-4 py-2 text-sm rounded-full transition-all duration-300 ease-out flex items-center gap-1.5 ${activeClasses}"
          ${isActive ? 'aria-current="page"' : ''}
        >
          <span>${link.label}</span>
        </a>
      `;
    })
    .join('');

  const mobileLinks = navLinks
    .map((link) => {
      const isActive = active === link.path || (link.path === 'catalog' && (active === 'katalog' || active === 'katalog-tugas'));
      const activeClasses = isActive
        ? 'text-blue-700 bg-blue-50 border border-blue-200 font-bold'
        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent';
      
      return `
        <a 
          href="#${link.path}" 
          data-path="${link.path}"
          class="mobile-nav-link px-4 py-3 text-base rounded-2xl transition-all duration-300 flex items-center justify-between ${activeClasses}"
        >
          <span>${link.label}</span>
          <span class="material-symbols-outlined text-sm opacity-60">arrow_forward_ios</span>
        </a>
      `;
    })
    .join('');

  return `
    <header class="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 pb-2 pointer-events-none">
      <div class="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        
        <!-- Brand Logo & Identity -->
        <a href="#beranda" class="group flex items-center gap-3 p-1.5 pr-4 rounded-full bg-white/90 hover:bg-white backdrop-blur-xl border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-blue-400 hover:shadow-[0_4px_20px_rgba(0,55,176,0.12)]">
          <div class="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-slate-200 bg-slate-50">
            <img src="${logoSrc}" alt="JoKelar Logo" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div class="flex flex-col">
            <span class="font-extrabold text-sm tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">JoKelar</span>
            <span class="text-[10px] font-mono font-semibold text-blue-700 leading-none">#1 Academic Hub</span>
          </div>
        </a>

        <!-- Desktop Floating Navigation Pill -->
        <nav class="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-white/85 backdrop-blur-2xl border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.06)]">
          ${desktopLinks}
        </nav>

        <!-- Right Action Button & Mobile Toggle -->
        <div class="flex items-center gap-2.5">
          <!-- WhatsApp Quick Action with Yellow Accent from Logo -->
          <a 
            href="https://wa.me/6285150754258?text=Halo%20Admin%20JoKelar%2C%20saya%20ingin%20konsultasi%20pengerjaan%20tugas." 
            target="_blank" 
            rel="noopener noreferrer" 
            class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#fed01b] hover:bg-[#ffd633] text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(254,208,27,0.45)] border border-amber-300/60 active:translate-y-0"
          >
            <span class="material-symbols-outlined text-base">forum</span>
            <span>Konsultasi</span>
          </a>

          <!-- Mobile Hamburger Toggle Button -->
          <button 
            id="mobile-menu-btn" 
            class="md:hidden w-11 h-11 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-700 hover:text-blue-700 hover:border-blue-400 transition-all active:scale-95"
            aria-label="Menu Navigasi"
          >
            <span id="hamburger-icon" class="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>

      </div>

      <!-- Mobile Navigation Drawer Dropdown -->
      <div 
        id="mobile-menu" 
        class="hidden md:hidden mt-3 max-w-lg mx-auto p-4 rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-2xl flex-col gap-2 pointer-events-auto transition-all"
      >
        <div class="flex flex-col gap-1.5">
          ${mobileLinks}
        </div>
        <div class="pt-3 mt-2 border-t border-slate-200">
          <a 
            href="https://wa.me/6285150754258?text=Halo%20Admin%20JoKelar%2C%20saya%20ingin%20konsultasi%20pengerjaan%20tugas." 
            target="_blank" 
            rel="noopener noreferrer" 
            class="w-full py-3 px-4 rounded-2xl bg-[#fed01b] hover:bg-[#ffd633] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <span class="material-symbols-outlined text-base">forum</span>
            <span>Konsultasi WhatsApp Sekarang</span>
          </a>
        </div>
      </div>
    </header>
  `;
}

export function initNavbar() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('hamburger-icon');

  if (btn && menu && icon) {
    btn.addEventListener('click', () => {
      const isHidden = menu.classList.contains('hidden');
      if (isHidden) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        icon.textContent = 'close';
      } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        icon.textContent = 'menu';
      }
    });

    const mobileLinks = menu.querySelectorAll('a');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        icon.textContent = 'menu';
      });
    });
  }
}

export function updateNavbarActive(path) {
  const resolved = path || 'beranda';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  
  navLinks.forEach((link) => {
    const linkPath = link.getAttribute('data-path');
    const isMatching = linkPath === resolved || (linkPath === 'catalog' && (resolved === 'katalog' || resolved === 'katalog-tugas'));

    if (link.classList.contains('nav-link')) {
      if (isMatching) {
        link.className = 'nav-link px-4 py-2 text-sm rounded-full transition-all duration-300 ease-out flex items-center gap-1.5 text-blue-700 bg-blue-50/90 border border-blue-200 shadow-sm font-bold';
        link.setAttribute('aria-current', 'page');
      } else {
        link.className = 'nav-link px-4 py-2 text-sm rounded-full transition-all duration-300 ease-out flex items-center gap-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 border border-transparent font-medium';
        link.removeAttribute('aria-current');
      }
    } else if (link.classList.contains('mobile-nav-link')) {
      if (isMatching) {
        link.className = 'mobile-nav-link px-4 py-3 text-base rounded-2xl transition-all duration-300 flex items-center justify-between text-blue-700 bg-blue-50 border border-blue-200 font-bold';
      } else {
        link.className = 'mobile-nav-link px-4 py-3 text-base rounded-2xl transition-all duration-300 flex items-center justify-between text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-transparent';
      }
    }
  });
}
