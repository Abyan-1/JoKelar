/**
 * ==============================================================================
 * JoKelar — Halaman Tim Pendiri (Pendiri.js)
 * ==============================================================================
 * Data dummy pendiri telah dihilangkan dan digantikan dengan template rendering
 * yang siap menerima data asli dari database.
 * 
 * Untuk mengisi data:
 * - Ubah array `activeFounders` di file `src/data/databaseTemplates.js`, ATAU
 * - Sambungkan fetch API/database di sini dan passing datanya ke `renderFounderCard`.
 * ==============================================================================
 * tambahkan foto pendiri masing masing di data base
*/ 

import { activeFounders } from '../data/databaseTemplates.js';

/**
 * Template card untuk satu profil pendiri.
 * @param {import('../data/databaseTemplates.js').Founder} founder 
 * @returns {string} HTML markup
 */
export function renderFounderCard(founder) {
  return `
    <div class="group flex flex-col items-center text-center">
      <div class="w-36 h-36 sm:w-44 sm:h-44 lg:w-48 lg:h-48 mb-space-md overflow-hidden rounded-full ring-2 ring-primary/20 bg-surface-container">
        <img 
          src="${founder.image || ''}" 
          alt="${founder.name || 'Foto Pendiri'}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
          onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(founder.name || 'JoKelar')}&background=0037b0&color=fff&size=256';"
        />
      </div>
      <div class="flex flex-col items-center">
        <span class="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">
          ${founder.name}
        </span>
        <span class="font-body-sm text-body-sm text-on-surface-variant mt-1">
          ${founder.role}
        </span>
        ${founder.bio ? `<p class="font-body-sm text-body-sm text-on-surface-variant mt-2 max-w-xs line-clamp-2">${founder.bio}</p>` : ''}
      </div>
    </div>
  `;
}

/**
 * Template Empty State / Placeholder ketika data belum terhubung ke database.
 * @returns {string} HTML markup
 */
function renderEmptyFoundersState() {
  return `
    <div class="w-full max-w-xl mx-auto my-space-xl p-space-xl bg-surface-container-low rounded-2xl border border-dashed border-outline-variant text-center flex flex-col items-center gap-space-sm shadow-sm">
      <div class="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary mb-1">
        <span class="material-symbols-outlined text-3xl">group</span>
      </div>
      <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
        Data Tim Pendiri Sedang Disiapkan
      </h3>
      <p class="font-body-sm text-body-sm text-on-surface-variant max-w-md">
        Informasi profil kepemimpinan JoKelar akan otomatis ditampilkan di sini setelah integrasi database dikonfigurasi.
      </p>
      <div class="mt-space-xs inline-flex items-center gap-2 px-space-md py-1 bg-surface-container-high rounded-full text-xs font-label-code text-primary font-semibold">
        <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span>Template Database Ready • 0 Data Aktif</span>
      </div>
    </div>
  `;
}

export function render() {
  const hasData = Array.isArray(activeFounders) && activeFounders.length > 0;

  return `
    <div class="max-w-[1280px] w-full mx-auto px-margin-mobile md:px-margin py-space-xl flex flex-col items-center">
      <!-- Section Header -->
      <div class="text-center max-w-xl flex flex-col items-center mb-space-xl">
        <span class="font-label-code text-label-code text-primary uppercase tracking-wider mb-space-xs font-semibold">
          Leadership
        </span>
        <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-xs">
          Tim Pendiri
        </h1>
        <p class="font-body-md text-body-md text-on-surface-variant text-center">
          Membangun ekosistem bantuan akademik yang berintegritas, adaptif, dan terpercaya bagi pelajar Indonesia.
        </p>
      </div>

      <!-- Grid Tim Pendiri atau Empty State -->
      ${
        hasData
          ? `<div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-space-lg mb-space-xl">
              ${activeFounders.map(renderFounderCard).join('')}
            </div>`
          : renderEmptyFoundersState()
      }

      <!-- Bottom Trust Badge -->
      <div class="pt-space-md flex items-center justify-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
        <span class="material-symbols-outlined text-lg text-primary">verified</span>
        <span>Didirikan dengan komitmen penuh pada integritas akademis • Est. 2024 Indonesia</span>
      </div>
    </div>
  `;
}

export function init() {
  // Hook inisialisasi jika ada interaktivitas spesifik halaman pendiri
}
