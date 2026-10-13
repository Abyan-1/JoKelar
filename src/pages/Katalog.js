/**
 * ==============================================================================
 * JoKelar — Halaman Katalog Tugas (Katalog.js)
 * ==============================================================================
 * Data dummy katalog tugas & portofolio telah dihilangkan dan digantikan dengan
 * template dinamis yang siap menerima data asli dari database.
 * 
 * Untuk mengisi data:
 * - Isi array `activeCatalogItems` di `src/data/databaseTemplates.js`, ATAU
 * - Hubungkan query database/API di sini untuk mengisi data portofolio.
 * ==============================================================================
 */

import { activeCatalogItems } from '../data/databaseTemplates.js';

/**
 * Template card untuk satu item katalog tugas.
 * @param {import('../data/databaseTemplates.js').CatalogItem} item 
 * @returns {string} HTML markup
 */
export function renderCatalogItemCard(item) {
  return `
    <article 
      class="catalog-item group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-none hover:shadow-md transition-all duration-300 cursor-pointer border border-surface-container-high" 
      data-category="${item.category || 'umum'}"
      data-id="${item.id}"
      tabindex="0"
      role="button"
      aria-label="Lihat detail ${item.title || 'tugas'}"
    >
      <div class="relative h-44 w-full overflow-hidden bg-surface-container-low">
        <img 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          src="${item.image || ''}" 
          alt="${item.alt || item.title || 'Portofolio Tugas'}"
          loading="lazy"
          onerror="this.src='https://placehold.co/600x400/e9edff/0037b0?text=${encodeURIComponent(item.subject || 'JoKelar')}';"
        />
        <span class="absolute top-space-xs left-space-xs px-space-xs py-0.5 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-badge text-label-badge rounded shadow-xs">
          ${item.categoryLabel || item.category || 'Tugas'}
        </span>
      </div>
      <div class="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
        <div>
          <span class="font-label-code text-label-code text-on-surface-variant font-medium">
            ${item.subject || 'Akademik'}
          </span>
          <h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2 mt-0.5">
            ${item.title || 'Judul Tugas'}
          </h3>
        </div>
        <div class="flex items-center justify-between font-label-code text-label-code text-on-surface-variant pt-space-xs border-t border-surface-container-low">
          <span>${item.statLabel || ''}</span>
          <span class="text-primary font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
            Detail →
          </span>
        </div>
      </div>
    </article>
  `;
}

/**
 * Template Empty State saat belum ada data katalog di database.
 * @returns {string} HTML markup
 */
function renderEmptyCatalogState() {
  return `
    <div class="col-span-full py-space-xl px-space-lg bg-surface-container-low rounded-2xl border border-dashed border-outline-variant text-center flex flex-col items-center justify-center gap-space-sm my-space-md shadow-sm">
      <div class="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-primary mb-1">
        <span class="material-symbols-outlined text-4xl">folder_open</span>
      </div>
      <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
        Katalog Tugas Sedang Disiapkan
      </h3>
      <p class="font-body-sm text-body-sm text-on-surface-variant max-w-md">
        Portofolio pengerjaan terverifikasi akan segera tersedia setelah koneksi database diaktifkan. Anda tetap dapat langsung mengajukan kebutuhan tugas via WhatsApp admin.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-space-sm pt-space-xs">
        <a 
          href="https://wa.me/message/RUK4IFU7KE4YK1" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center gap-space-xs px-space-lg py-space-xs bg-primary text-on-primary rounded-full font-body-sm text-body-sm font-semibold hover:bg-primary-container transition-all shadow-sm"
        >
          <span class="material-symbols-outlined text-lg">chat</span>
          <span>Konsultasi Tugas via WhatsApp</span>
        </a>
      </div>
      <div class="mt-space-xs inline-flex items-center gap-2 px-space-md py-1 bg-surface-container-high rounded-full text-xs font-label-code text-primary font-semibold">
        <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span>Template Database Ready • 0 Portofolio Aktif</span>
      </div>
    </div>
  `;
}

export function render() {
  const hasData = Array.isArray(activeCatalogItems) && activeCatalogItems.length > 0;

  return `
    <div class="flex flex-col w-full">
      <div class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-xl">
        
        <!-- Header Banner -->
        <div class="py-space-xl mb-space-lg text-center max-w-2xl mx-auto flex flex-col items-center gap-space-xs">
          <span class="font-label-code text-label-code text-primary uppercase tracking-wider font-semibold">
            Portofolio Terverifikasi
          </span>
          <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight font-extrabold">
            Katalog Tugas
          </h1>
          <p class="font-body-md text-body-md text-on-surface-variant max-w-md">
            Koleksi pengerjaan akademik terbaik bebas plagiarisme dengan standar mutu tinggi.
          </p>
        </div>

        <!-- Filter Bar & Search Tools -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-xl pb-space-md">
          <div class="flex flex-wrap items-center gap-space-xs" id="filter-container">
            <button class="filter-tab px-space-md py-space-xs rounded-full font-label-badge text-label-badge transition-all bg-primary text-on-primary shadow-sm" data-target="all">
              Semua
            </button>
            <button class="filter-tab px-space-md py-space-xs rounded-full font-label-badge text-label-badge transition-all text-on-surface-variant hover:text-on-surface bg-surface-container-low" data-target="mahasiswa">
              Mahasiswa
            </button>
            <button class="filter-tab px-space-md py-space-xs rounded-full font-label-badge text-label-badge transition-all text-on-surface-variant hover:text-on-surface bg-surface-container-low" data-target="pelajar">
              Pelajar
            </button>
            <button class="filter-tab px-space-md py-space-xs rounded-full font-label-badge text-label-badge transition-all text-on-surface-variant hover:text-on-surface bg-surface-container-low" data-target="umum">
              Umum / Profesional
            </button>
          </div>
          <div class="relative w-full sm:w-64">
            <input 
              class="w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/60 font-body-sm text-body-sm px-space-md py-space-xs pl-9 rounded-full shadow-none outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all" 
              id="searchInput" 
              placeholder="Cari tugas..." 
              type="text"
            />
            <span class="material-symbols-outlined absolute left-2.5 top-2 text-on-surface-variant text-lg">search</span>
          </div>
        </div>

        <!-- Cards Grid Container -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-space-lg" id="catalogGrid">
          ${
            hasData
              ? activeCatalogItems.map(renderCatalogItemCard).join('')
              : renderEmptyCatalogState()
          }
        </div>

        <!-- Search Not Found Notice (Hidden by default) -->
        <div class="hidden flex-col items-center justify-center p-space-xl bg-surface-container rounded-xl text-center my-space-lg" id="emptyNotice">
          <span class="material-symbols-outlined text-4xl text-on-surface-variant mb-space-xs">search_off</span>
          <h4 class="font-headline-sm text-headline-sm text-on-surface">Portofolio tidak ditemukan</h4>
          <p class="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-md">
            Coba gunakan kata kunci lain atau pilih kategori 'Semua' untuk melihat seluruh portofolio pengerjaan kami.
          </p>
        </div>

        <!-- Bottom Action Banner -->
        <section class="mt-space-xl py-space-xl px-space-md bg-surface-container-low rounded-2xl text-center flex flex-col items-center justify-center gap-space-md max-w-3xl mx-auto">
          <h2 class="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">
            Punya tugas spesifik yang ingin dikerjakan?
          </h2>
          <p class="font-body-sm text-body-sm text-on-surface-variant max-w-md">
            Konsultasikan silabus, panduan, atau deadline tugas Anda secara langsung dengan tim spesialis kami.
          </p>
          <a class="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-primary text-on-primary font-body-sm text-body-sm font-semibold rounded-full hover:bg-primary-container transition-all active:scale-[0.98]" href="https://wa.me/message/RUK4IFU7KE4YK1" rel="noopener noreferrer" target="_blank">
            <span class="material-symbols-outlined text-base">chat</span>
            <span>Konsultasi Bebas Biaya</span>
          </a>
        </section>

      </div>

      <!-- Detail Modal (Template untuk menampilkan detail tugas saat di-klik) -->
      <div class="fixed inset-0 z-50 hidden bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-space-md md:p-space-lg transition-opacity duration-300" id="projectModal">
        <div class="relative w-full max-w-3xl max-h-[921px] bg-surface-container-lowest rounded-2xl shadow-2xl overflow-y-auto flex flex-col">
          
          <!-- Modal Header -->
          <div class="sticky top-0 z-20 flex items-center justify-between p-space-md bg-surface-container-lowest/95 backdrop-blur-md shadow-sm">
            <div class="flex items-center gap-space-sm">
              <span class="px-space-sm py-space-xs rounded-lg font-label-badge text-label-badge bg-primary text-on-primary" id="modalCategoryBadge">
                Kategori
              </span>
              <span class="font-label-code text-label-code text-primary bg-surface-container-high px-space-sm py-space-xs rounded-lg font-bold" id="modalGradeBadge">
                Grade
              </span>
            </div>
            <button class="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-highest transition-colors" id="closeModalBtn" aria-label="Tutup modal">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-space-md md:p-space-lg flex flex-col gap-space-lg">
            <div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface mb-space-xs" id="modalTitle">
                Judul Tugas
              </h2>
              <div class="flex flex-wrap items-center gap-space-md text-on-surface-variant font-label-code text-label-code">
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">schedule</span> Pengerjaan: <b class="text-on-surface" id="modalDuration">-</b>
                </span>
                <span>•</span>
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">check_circle</span> Similarity: <b class="text-on-surface" id="modalTurnitin">-</b>
                </span>
                <span>•</span>
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-sm">school</span> Status: <b class="text-primary" id="modalStatusText">Terverifikasi</b>
                </span>
              </div>
            </div>

            <!-- Brief & Tantangan -->
            <div class="bg-surface-container-low p-space-md rounded-xl">
              <h4 class="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs mb-space-xs">
                <span class="material-symbols-outlined text-primary">assignment</span>
                <span>Brief &amp; Tantangan Klien</span>
              </h4>
              <p class="font-body-md text-body-md text-on-surface-variant" id="modalBrief">
                -
              </p>
            </div>

            <!-- Solusi JoKelar -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-surface-container-high">
              <h4 class="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs mb-space-xs">
                <span class="material-symbols-outlined text-secondary-container">bolt</span>
                <span>Solusi &amp; Pengerjaan JoKelar</span>
              </h4>
              <ul class="font-body-md text-body-md text-on-surface-variant list-disc pl-5 space-y-1" id="modalSolution">
                <li>-</li>
              </ul>
            </div>

            <!-- Testimoni Klien -->
            <div class="bg-surface-container-high p-space-md rounded-xl">
              <div class="flex items-center justify-between mb-space-xs">
                <span class="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant">
                  Testimoni Klien Terverifikasi
                </span>
                <div class="flex text-secondary-container">
                  <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
              </div>
              <p class="font-body-md text-body-md text-on-surface italic" id="modalFeedback">
                -
              </p>
              <div class="mt-space-xs flex items-center justify-between font-label-code text-label-code text-on-surface-variant">
                <span id="modalClientInfo">-</span>
                <span class="text-primary font-bold">100% Verified Review</span>
              </div>
            </div>

            <!-- Call to Action Inside Modal -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs bg-surface-container p-space-md rounded-xl">
              <div class="flex flex-col">
                <span class="font-headline-sm text-headline-sm text-on-surface">Butuh bantuan di mata kuliah/bidang ini?</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant">Konsultasikan kebutuhanmu, deal harga ramah mahasiswa.</span>
              </div>
              <a class="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-primary text-on-primary font-label-badge text-label-badge uppercase rounded-xl hover:bg-primary-container transition-colors shadow-sm" href="https://wa.me/message/RUK4IFU7KE4YK1" id="modalWhatsAppBtn" rel="noopener noreferrer" target="_blank">
                <span class="material-symbols-outlined text-base">chat</span>
                <span>Order Tugas Mirip</span>
              </a>
            </div>

          </div>
        </div>
      </div>

    </div>
  `;
}

export function init() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const searchInput = document.getElementById('searchInput');
  const filterTabs = document.querySelectorAll('.filter-tab');
  const emptyNotice = document.getElementById('emptyNotice');

  function openDetailModal(item) {
    if (!item) return;

    document.getElementById('modalCategoryBadge').textContent = item.categoryLabel || item.category || 'Tugas';
    document.getElementById('modalGradeBadge').textContent = item.grade || 'Terverifikasi';
    document.getElementById('modalTitle').textContent = item.title || '';
    document.getElementById('modalDuration').textContent = item.duration || '-';
    document.getElementById('modalTurnitin').textContent = item.turnitin || '-';
    document.getElementById('modalStatusText').textContent = item.statusText || 'Lulus Sempurna';
    document.getElementById('modalBrief').textContent = item.brief || 'Deskripsi tugas.';
    document.getElementById('modalFeedback').textContent = item.feedback || 'Pengerjaan berkualitas dan memuaskan.';
    document.getElementById('modalClientInfo').textContent = item.client || 'Mahasiswa Terverifikasi';

    const solutionList = document.getElementById('modalSolution');
    solutionList.innerHTML = '';
    if (Array.isArray(item.solutions) && item.solutions.length > 0) {
      item.solutions.forEach((sol) => {
        const li = document.createElement('li');
        li.textContent = sol;
        solutionList.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = 'Pengerjaan disesuaikan dengan instruksi dan rubrik akademik.';
      solutionList.appendChild(li);
    }

    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDetailModal() {
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDetailModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeDetailModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDetailModal();
    }
  });

  // Filter functionality
  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetCategory = tab.getAttribute('data-target');

      filterTabs.forEach((t) => {
        t.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
        t.classList.add('text-on-surface-variant', 'bg-surface-container-low');
      });
      tab.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');
      tab.classList.remove('text-on-surface-variant', 'bg-surface-container-low');

      const items = document.querySelectorAll('.catalog-item');
      let visibleCount = 0;

      items.forEach((item) => {
        const itemCat = item.getAttribute('data-category');
        if (targetCategory === 'all' || itemCat === targetCategory) {
          item.style.display = 'flex';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });

      if (items.length > 0 && visibleCount === 0 && emptyNotice) {
        emptyNotice.classList.remove('hidden');
        emptyNotice.classList.add('flex');
      } else if (emptyNotice) {
        emptyNotice.classList.add('hidden');
        emptyNotice.classList.remove('flex');
      }
    });
  });

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim();
      const items = document.querySelectorAll('.catalog-item');
      let visibleCount = 0;

      items.forEach((item) => {
        const text = item.innerText.toLowerCase();
        if (text.includes(query)) {
          item.style.display = 'flex';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });

      if (items.length > 0 && visibleCount === 0 && emptyNotice) {
        emptyNotice.classList.remove('hidden');
        emptyNotice.classList.add('flex');
      } else if (emptyNotice) {
        emptyNotice.classList.add('hidden');
        emptyNotice.classList.remove('flex');
      }
    });
  }

  // Delegated item click handler for cards
  const catalogGrid = document.getElementById('catalogGrid');
  if (catalogGrid) {
    catalogGrid.addEventListener('click', (e) => {
      const card = e.target.closest('.catalog-item');
      if (card) {
        const itemId = card.getAttribute('data-id');
        const itemData = activeCatalogItems.find((i) => String(i.id) === String(itemId));
        if (itemData) {
          openDetailModal(itemData);
        }
      }
    });
  }
}
