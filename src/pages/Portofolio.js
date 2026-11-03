/**
 * JoKelar — Halaman Portofolio (Portofolio.js)
 * Portofolio tugas & proyek yang telah dikerjakan oleh tim JoKelar.
 * Minimalis, modern, dan informatif.
 */

import { activeCatalogItems } from '../data/databaseTemplates.js';

/**
 * Render satu card item portofolio
 * @param {import('../data/databaseTemplates.js').CatalogItem} item 
 * @returns {string}
 */
export function renderPortfolioCard(item) {
  return `
    <article 
      class="portfolio-item group flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/30 hover:border-primary/40 hover:shadow-lg transition-all duration-300 cursor-pointer" 
      data-category="${item.category || 'umum'}"
      data-id="${item.id}"
      tabindex="0"
      role="button"
      aria-label="Lihat portofolio ${item.title || 'tugas'}"
    >
      <div class="relative h-44 w-full overflow-hidden bg-surface-container-low">
        <img 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          src="${item.image || ''}" 
          alt="${item.alt || item.title || 'Portofolio'}"
          loading="lazy"
          onerror="this.src='https://placehold.co/600x400/e9edff/0037b0?text=${encodeURIComponent(item.subject || 'JoKelar')}';"
        />
        <span class="absolute top-3 left-3 px-2.5 py-1 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-badge text-xs rounded-lg shadow-xs">
          ${item.categoryLabel || item.category || 'Tugas'}
        </span>
        ${item.statLabel ? `
          <span class="absolute bottom-3 right-3 px-2 py-0.5 bg-primary text-on-primary font-label-code text-xs rounded-md shadow-xs">
            ${item.statLabel}
          </span>
        ` : ''}
      </div>
      <div class="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
        <div>
          <span class="font-label-code text-xs text-primary font-semibold uppercase tracking-wider">
            ${item.subject || 'Akademik'}
          </span>
          <h3 class="font-headline-sm text-base md:text-lg text-on-surface group-hover:text-primary transition-colors line-clamp-2 mt-1 font-bold">
            ${item.title || 'Judul Portofolio'}
          </h3>
          ${item.brief ? `
            <p class="font-body-sm text-xs text-on-surface-variant line-clamp-2 mt-1.5">
              ${item.brief}
            </p>
          ` : ''}
        </div>
        <div class="flex items-center justify-between font-label-code text-xs text-on-surface-variant pt-space-xs border-t border-surface-container-low mt-2">
          <span class="text-on-surface-variant/80">${item.duration || 'Tepat Waktu'}</span>
          <span class="text-primary font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            <span>Detail</span>
            <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </span>
        </div>
      </div>
    </article>
  `;
}

/**
 * State kosong jika portofolio belum ada
 */
function renderEmptyPortfolioState() {
  return `
    <div class="col-span-full py-space-xl px-space-lg bg-surface-container-low rounded-2xl border border-dashed border-outline-variant/60 text-center flex flex-col items-center justify-center gap-space-sm my-space-md">
      <div class="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary">
        <span class="material-symbols-outlined text-3xl">folder_open</span>
      </div>
      <h3 class="font-headline-sm text-lg text-on-surface font-bold">
        Portofolio Sedang Diperbarui
      </h3>
      <p class="font-body-sm text-sm text-on-surface-variant max-w-md">
        Dokumentasi pengerjaan sedang dirapikan demi menjaga privasi klien. Anda tetap dapat langsung mengajukan kebutuhan tugas via WhatsApp admin.
      </p>
      <a 
        href="https://wa.me/6285150754258?text=Halo%20Admin%20JoKelar%2C%20saya%20ingin%20konsultasi%20pengerjaan%20tugas." 
        target="_blank" 
        rel="noopener noreferrer"
        class="mt-2 inline-flex items-center gap-1.5 px-space-md py-2 bg-primary text-on-primary rounded-xl font-body-sm text-sm font-semibold hover:bg-primary-container transition-all"
      >
        <span class="material-symbols-outlined text-base">chat</span>
        <span>Konsultasi Tugas</span>
      </a>
    </div>
  `;
}

export function render() {
  const hasData = Array.isArray(activeCatalogItems) && activeCatalogItems.length > 0;

  return `
    <div class="flex flex-col w-full">
      <div class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin pt-space-lg pb-space-xl">
        
        <!-- Header Minimalis -->
        <div class="text-center max-w-2xl mx-auto mb-space-lg flex flex-col items-center gap-space-xs">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full">
            <span class="w-2 h-2 rounded-full bg-primary"></span>
            <span class="font-label-badge text-xs uppercase text-primary font-bold tracking-wider">Hasil Pengerjaan</span>
          </div>
          <h1 class="font-headline-lg text-2xl md:text-3xl text-on-surface tracking-tight font-extrabold">
            Portofolio JoKelar
          </h1>
          <p class="font-body-sm text-sm text-on-surface-variant max-w-md">
            Dokumentasi tugas, skripsi, olah data, dan aplikasi yang telah sukses dikerjakan dengan standar mutu terjamin.
          </p>
        </div>

        <!-- Filter & Search Bar -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-lg">
          <div class="flex flex-wrap items-center gap-1.5" id="portfolioFilterContainer">
            <button class="portfolio-filter-tab px-3.5 py-1.5 rounded-xl font-label-badge text-xs transition-all bg-primary text-on-primary shadow-xs" data-target="all">
              Semua
            </button>
            <button class="portfolio-filter-tab px-3.5 py-1.5 rounded-xl font-label-badge text-xs transition-all text-on-surface-variant hover:text-on-surface bg-surface-container-low" data-target="mahasiswa">
              Mahasiswa
            </button>
            <button class="portfolio-filter-tab px-3.5 py-1.5 rounded-xl font-label-badge text-xs transition-all text-on-surface-variant hover:text-on-surface bg-surface-container-low" data-target="pelajar">
              Pelajar
            </button>
            <button class="portfolio-filter-tab px-3.5 py-1.5 rounded-xl font-label-badge text-xs transition-all text-on-surface-variant hover:text-on-surface bg-surface-container-low" data-target="umum">
              Umum / Pro
            </button>
          </div>
          <div class="relative w-full sm:w-60">
            <input 
              class="w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/60 font-body-sm text-xs px-3 py-2 pl-8 rounded-xl border border-transparent focus:border-primary/30 focus:bg-surface-container-lowest outline-none transition-all" 
              id="portfolioSearchInput" 
              placeholder="Cari topik tugas..." 
              type="text"
            />
            <span class="material-symbols-outlined absolute left-2.5 top-2 text-on-surface-variant text-base">search</span>
          </div>
        </div>

        <!-- Grid Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-md" id="portfolioGrid">
          ${
            hasData
              ? activeCatalogItems.map(renderPortfolioCard).join('')
              : renderEmptyPortfolioState()
          }
        </div>

        <!-- Search Not Found -->
        <div class="hidden flex-col items-center justify-center p-space-lg bg-surface-container rounded-2xl text-center my-space-md" id="portfolioEmptyNotice">
          <span class="material-symbols-outlined text-3xl text-on-surface-variant mb-1">search_off</span>
          <h4 class="font-headline-sm text-base text-on-surface font-bold">Portofolio tidak ditemukan</h4>
          <p class="font-body-sm text-xs text-on-surface-variant mt-1">Coba gunakan kata kunci lain atau pilih tab 'Semua'.</p>
        </div>

        <!-- Bottom Banner Minimalis -->
        <div class="mt-space-xl p-space-lg bg-surface-container-low rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-space-md border border-outline-variant/30">
          <div>
            <h3 class="font-headline-sm text-lg text-on-surface font-bold">Punya tugas serupa yang ingin dikerjakan?</h3>
            <p class="font-body-sm text-xs text-on-surface-variant mt-0.5">Diskusikan panduan, rubrik, atau tenggat waktu tugas Anda secara langsung.</p>
          </div>
          <a class="whitespace-nowrap inline-flex items-center gap-1.5 px-space-md py-2.5 bg-primary text-on-primary font-label-badge text-xs uppercase tracking-wider rounded-xl hover:bg-primary-container transition-all" href="https://wa.me/6285150754258?text=Halo%20Admin%20JoKelar%2C%20saya%20ingin%20konsultasi%20pengerjaan%20tugas." rel="noopener noreferrer" target="_blank">
            <span class="material-symbols-outlined text-base">chat</span>
            <span>Konsultasi Gratis</span>
          </a>
        </div>

      </div>

      <!-- Detail Modal -->
      <div class="fixed inset-0 z-50 hidden bg-inverse-surface/60 backdrop-blur-xs flex items-center justify-center p-space-md transition-opacity duration-300" id="portfolioModal">
        <div class="relative w-full max-w-2xl max-h-[90vh] bg-surface-container-lowest rounded-2xl shadow-2xl overflow-y-auto flex flex-col border border-outline-variant/40">
          
          <div class="sticky top-0 z-20 flex items-center justify-between p-space-md bg-surface-container-lowest/95 backdrop-blur-md border-b border-surface-container-low">
            <div class="flex items-center gap-space-xs">
              <span class="px-2.5 py-0.5 rounded-md font-label-badge text-xs bg-primary text-on-primary" id="portModalCategory">Kategori</span>
              <span class="px-2.5 py-0.5 rounded-md font-label-code text-xs bg-surface-container text-primary font-bold" id="portModalGrade">Grade</span>
            </div>
            <button class="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors" id="closePortModalBtn" aria-label="Tutup modal">
              <span class="material-symbols-outlined text-lg">close</span>
            </button>
          </div>

          <div class="p-space-md md:p-space-lg flex flex-col gap-space-md">
            <div>
              <h2 class="font-headline-sm text-xl text-on-surface font-extrabold" id="portModalTitle">Judul Tugas</h2>
              <div class="flex flex-wrap items-center gap-space-sm text-on-surface-variant font-label-code text-xs mt-1">
                <span>Waktu: <b class="text-on-surface" id="portModalDuration">-</b></span>
                <span>•</span>
                <span>Turnitin: <b class="text-on-surface" id="portModalTurnitin">-</b></span>
                <span>•</span>
                <span>Status: <b class="text-primary" id="portModalStatus">Terverifikasi</b></span>
              </div>
            </div>

            <div class="bg-surface-container-low p-space-sm rounded-xl">
              <h4 class="font-headline-sm text-xs font-bold uppercase tracking-wider text-primary mb-1">Brief Tugas</h4>
              <p class="font-body-sm text-xs text-on-surface-variant leading-relaxed" id="portModalBrief">-</p>
            </div>

            <div class="bg-surface-container-lowest p-space-sm rounded-xl border border-surface-container-high">
              <h4 class="font-headline-sm text-xs font-bold uppercase tracking-wider text-on-surface mb-1">Solusi &amp; Pengerjaan</h4>
              <ul class="font-body-sm text-xs text-on-surface-variant list-disc pl-4 space-y-1" id="portModalSolutions">
                <li>-</li>
              </ul>
            </div>

            <div class="bg-surface-container-low p-space-sm rounded-xl">
              <h4 class="font-headline-sm text-xs font-bold uppercase tracking-wider text-secondary-container mb-1">Ulasan Klien</h4>
              <p class="font-body-sm text-xs text-on-surface italic leading-relaxed" id="portModalFeedback">-</p>
              <div class="mt-1 font-label-code text-xs text-on-surface-variant" id="portModalClient">-</div>
            </div>

            <a id="portModalWhatsAppBtn" class="w-full py-2.5 bg-primary text-on-primary font-label-badge text-xs uppercase tracking-wider rounded-xl hover:bg-primary-container transition-all flex items-center justify-center gap-1.5" href="https://wa.me/6285150754258" rel="noopener noreferrer" target="_blank">
              <span class="material-symbols-outlined text-base">chat</span>
              <span>Pesan Tugas Serupa via WhatsApp</span>
            </a>
          </div>

        </div>
      </div>

    </div>
  `;
}

export function init() {
  const modal = document.getElementById('portfolioModal');
  const closeBtn = document.getElementById('closePortModalBtn');
  const searchInput = document.getElementById('portfolioSearchInput');
  const filterTabs = document.querySelectorAll('.portfolio-filter-tab');
  const emptyNotice = document.getElementById('portfolioEmptyNotice');
  const grid = document.getElementById('portfolioGrid');

  function openModal(item) {
    if (!item) return;
    document.getElementById('portModalCategory').textContent = item.categoryLabel || item.category || 'Tugas';
    document.getElementById('portModalGrade').textContent = item.grade || 'Grade A';
    document.getElementById('portModalTitle').textContent = item.title || '';
    document.getElementById('portModalDuration').textContent = item.duration || '-';
    document.getElementById('portModalTurnitin').textContent = item.turnitin || '-';
    document.getElementById('portModalStatus').textContent = item.statusText || 'Terverifikasi';
    document.getElementById('portModalBrief').textContent = item.brief || 'Instruksi pengerjaan tugas.';
    document.getElementById('portModalFeedback').textContent = item.feedback ? `"${item.feedback}"` : 'Hasil memuaskan dan tepat waktu.';
    document.getElementById('portModalClient').textContent = item.client || 'Mahasiswa Terverifikasi';

    const solEl = document.getElementById('portModalSolutions');
    solEl.innerHTML = '';
    if (Array.isArray(item.solutions) && item.solutions.length > 0) {
      item.solutions.forEach((s) => {
        const li = document.createElement('li');
        li.textContent = s;
        solEl.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = 'Dikerjakan teliti sesuai rubrik penilaian akademis.';
      solEl.appendChild(li);
    }

    if (modal) {
      const waBtn = document.getElementById('portModalWhatsAppBtn');
      if (waBtn) {
        const msg = `Halo Admin JoKelar, saya tertarik dengan pengerjaan portofolio:\n\n📌 *Referensi*: ${item.title}\n📚 *Bidang*: ${item.subject || '-'} (${item.categoryLabel || item.category || 'Akademik'})\n⭐ *Hasil*: ${item.grade || 'Nilai A'} • ${item.turnitin || 'Bebas Plagiasi'}\n\nSaya memiliki tugas / proyek serupa dan ingin konsultasi estimasi biaya serta deadline. Terima kasih!`;
        waBtn.href = `https://wa.me/6285150754258?text=${encodeURIComponent(msg)}`;
      }
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Filter tabs
  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-target');
      filterTabs.forEach((t) => {
        t.classList.remove('bg-primary', 'text-on-primary', 'shadow-xs');
        t.classList.add('text-on-surface-variant', 'bg-surface-container-low');
      });
      tab.classList.add('bg-primary', 'text-on-primary', 'shadow-xs');
      tab.classList.remove('text-on-surface-variant', 'bg-surface-container-low');

      const items = document.querySelectorAll('.portfolio-item');
      let visible = 0;
      items.forEach((item) => {
        const cat = item.getAttribute('data-category');
        if (target === 'all' || cat === target) {
          item.style.display = 'flex';
          visible++;
        } else {
          item.style.display = 'none';
        }
      });

      if (items.length > 0 && visible === 0 && emptyNotice) {
        emptyNotice.classList.remove('hidden');
        emptyNotice.classList.add('flex');
      } else if (emptyNotice) {
        emptyNotice.classList.add('hidden');
        emptyNotice.classList.remove('flex');
      }
    });
  });

  // Search
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      const items = document.querySelectorAll('.portfolio-item');
      let visible = 0;
      items.forEach((item) => {
        const text = item.innerText.toLowerCase();
        if (text.includes(query)) {
          item.style.display = 'flex';
          visible++;
        } else {
          item.style.display = 'none';
        }
      });

      if (items.length > 0 && visible === 0 && emptyNotice) {
        emptyNotice.classList.remove('hidden');
        emptyNotice.classList.add('flex');
      } else if (emptyNotice) {
        emptyNotice.classList.add('hidden');
        emptyNotice.classList.remove('flex');
      }
    });
  }

  // Delegated click
  if (grid) {
    grid.addEventListener('click', (e) => {
      const card = e.target.closest('.portfolio-item');
      if (card) {
        const id = card.getAttribute('data-id');
        const item = activeCatalogItems.find((i) => String(i.id) === String(id));
        if (item) openModal(item);
      }
    });
  }
}

