/**
 * JoKelar — Halaman Portofolio (Portofolio.js)
 * Clean White Asymmetric Bento Showcase with High-Contrast Modal & Filter
 */

import { activeCatalogItems } from '../data/databaseTemplates.js';

export function renderPortfolioCard(item) {
  return `
    <article 
      class="portfolio-card group relative rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_35px_-10px_rgba(0,55,176,0.12)] hover:border-blue-300 p-5 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 cursor-pointer overflow-hidden" 
      data-category="${item.category || 'umum'}"
      data-id="${item.id}"
      tabindex="0"
      role="button"
      aria-label="Lihat portofolio ${item.title || 'tugas'}"
    >
      <div class="flex flex-col gap-4">
        <!-- Thumbnail Container -->
        <div class="relative h-48 w-full rounded-2xl overflow-hidden bg-slate-100">
          <img 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            src="${item.image || ''}" 
            alt="${item.alt || item.title || 'Portofolio'}"
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';"
          />
          
          <span class="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-md text-slate-900 font-mono text-[11px] font-bold rounded-full border border-slate-200 shadow-xs">
            ${item.categoryLabel || item.category || 'Akademik'}
          </span>

          ${
            item.statLabel
              ? `<span class="absolute bottom-3 right-3 px-2.5 py-1 bg-[#fed01b] text-slate-950 font-mono text-[11px] font-black rounded-lg shadow-xs border border-amber-300">
                  ${item.statLabel}
                </span>`
              : ''
          }
        </div>

        <!-- Meta & Title -->
        <div class="flex flex-col gap-1.5">
          <div class="flex items-center justify-between">
            <span class="font-mono text-xs text-blue-700 font-bold uppercase tracking-wider">
              ${item.subject || 'Proyek Akademik'}
            </span>
            <span class="font-mono text-[11px] text-amber-700 font-extrabold">
              ${item.grade || 'Nilai A'}
            </span>
          </div>

          <h3 class="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-2">
            ${item.title || 'Judul Portofolio'}
          </h3>

          ${
            item.brief
              ? `<p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  ${item.brief}
                </p>`
              : ''
          }
        </div>
      </div>

      <!-- Bottom Card Action -->
      <div class="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between font-mono text-xs text-slate-500">
        <span class="flex items-center gap-1.5">
          <span class="material-symbols-outlined text-sm text-slate-400">schedule</span>
          <span>${item.duration || 'Tepat Waktu'}</span>
        </span>
        <span class="text-blue-700 font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          <span>Detail Proyek</span>
          <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </span>
      </div>
    </article>
  `;
}

export function render() {
  const hasData = Array.isArray(activeCatalogItems) && activeCatalogItems.length > 0;

  return `
    <div class="w-full flex flex-col items-center">
      
      <!-- HERO HEADER -->
      <section class="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-12 md:py-16">
        <div class="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto reveal">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            <span class="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">Showcase Hasil Kerja</span>
          </div>

          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Bukti Kualitas, <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Bukan Sekadar Janji.</span>
          </h1>

          <p class="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
            Eksplorasi arsip pengerjaan tugas kuliah, skripsi, olah data statistik, dan implementasi kode yang telah berhasil membantu mahasiswa meraih nilai A.
          </p>

          <!-- Filter Pills -->
          <div class="flex flex-wrap items-center justify-center gap-2 pt-4" id="portfolio-filters">
            <button data-filter="all" class="filter-pill active px-4 py-2 rounded-full text-xs font-mono font-bold bg-[#0037b0] text-white border border-blue-700 shadow-xs transition-all">
              Semua Tugas
            </button>
            <button data-filter="mahasiswa" class="filter-pill px-4 py-2 rounded-full text-xs font-mono font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
              Skripsi &amp; Riset
            </button>
            <button data-filter="coding" class="filter-pill px-4 py-2 rounded-full text-xs font-mono font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
              Web &amp; Software
            </button>
            <button data-filter="data" class="filter-pill px-4 py-2 rounded-full text-xs font-mono font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
              Olah Data SPSS
            </button>
          </div>
        </div>
      </section>

      <!-- PORTFOLIO GRID: ASYMMETRIC BENTO -->
      <section class="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24">
        <div id="portfolio-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${
            hasData
              ? activeCatalogItems.map(renderPortfolioCard).join('')
              : `
                <div class="col-span-full py-16 px-6 rounded-3xl bg-white border border-dashed border-slate-300 text-center flex flex-col items-center justify-center gap-4 shadow-xs">
                  <div class="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                    <span class="material-symbols-outlined text-2xl">folder_open</span>
                  </div>
                  <h3 class="text-lg font-bold text-slate-900">Arsip Portofolio Sedang Diperbarui</h3>
                  <p class="text-xs text-slate-500 max-w-md">Dokumentasi hasil pengerjaan sedang dirapikan demi menjaga kerahasiaan identitas klien.</p>
                </div>
              `
          }
        </div>
      </section>

      <!-- MODAL DETAIL CONTAINER (Clean White Modal) -->
      <div id="portfolio-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-4 sm:p-6 bg-slate-950/40 backdrop-blur-md transition-all">
        <div id="portfolio-modal-box" class="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 flex flex-col gap-6 max-h-[90vh] overflow-y-auto">
          <!-- Close button -->
          <button id="modal-close-btn" class="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-slate-900 transition-all">
            <span class="material-symbols-outlined text-lg">close</span>
          </button>
          <div id="modal-content-slot" class="flex flex-col gap-4"></div>
        </div>
      </div>

    </div>
  `;
}

export function init() {
  const filterBtns = document.querySelectorAll('#portfolio-filters .filter-pill');
  const cards = document.querySelectorAll('.portfolio-card');
  const modal = document.getElementById('portfolio-modal');
  const modalSlot = document.getElementById('modal-content-slot');
  const modalClose = document.getElementById('modal-close-btn');

  // Filter Logic
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      filterBtns.forEach((b) => {
        b.className = 'filter-pill px-4 py-2 rounded-full text-xs font-mono font-semibold text-slate-700 hover:text-slate-900 bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-all';
      });
      btn.className = 'filter-pill active px-4 py-2 rounded-full text-xs font-mono font-bold bg-[#0037b0] text-white border border-blue-700 shadow-xs transition-all';

      cards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter || (filter === 'coding' && cat === 'mahasiswa')) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Modal Open Logic
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const item = activeCatalogItems.find((i) => i.id === id);

      if (item && modal && modalSlot) {
        modalSlot.innerHTML = `
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full font-bold">${item.subject || 'Proyek'}</span>
              <span class="text-xs font-mono text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full font-extrabold">${item.grade || 'Grade A'}</span>
            </div>
            <h3 class="text-2xl font-black text-slate-900">${item.title}</h3>
            <p class="text-xs text-slate-600 leading-relaxed">${item.brief || ''}</p>
          </div>

          <div class="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 max-h-64">
            <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover" />
          </div>

          <div class="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <span class="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">Poin Solusi Dikerjakan:</span>
            <ul class="flex flex-col gap-2 text-xs text-slate-700">
              ${(item.solutions || [])
                .map((sol) => `<li class="flex items-start gap-2"><span class="material-symbols-outlined text-sm text-emerald-600 shrink-0 font-bold">check</span><span>${sol}</span></li>`)
                .join('')}
            </ul>
          </div>

          <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-1">
            <span class="text-xs text-slate-700 italic">"${item.feedback || 'Pengerjaan memuaskan & lulus tepat waktu.'}"</span>
            <span class="text-[11px] font-mono text-blue-700 font-bold mt-1">${item.client || 'Klien Terverifikasi'}</span>
          </div>

          <a 
            href="https://wa.me/6285150754258?text=Halo%20Admin%20JoKelar%2C%20saya%20ingin%20konsultasi%20tugas%20seperti%20proyek%20${encodeURIComponent(item.title)}."
            target="_blank"
            rel="noopener noreferrer"
            class="w-full py-3.5 px-4 rounded-xl bg-[#0037b0] hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <span class="material-symbols-outlined text-base">forum</span>
            <span>Konsultasi Tugas Serupa via WA</span>
          </a>
        `;

        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    });
  });

  // Modal Close Logic
  if (modalClose && modal) {
    modalClose.addEventListener('click', () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    });
  }
}
