/**
 * JoKelar — Halaman Catalog & Pricing (Katalog.js)
 * Clean White High-Contrast Architecture with Logo Palette (White, Blue, Yellow, Gray, Black)
 */

import coverImg from '../assets/Catalog/Cover.png';
import kategoriImg from '../assets/Catalog/Produt Kategori.png';
import hargaImg from '../assets/Catalog/Daftar Harga.png';
import bundleImg from '../assets/Catalog/Bundle.png';
import bundleV2Img from '../assets/Catalog/Bundle-v2.png';
import workflowImg from '../assets/Catalog/Workflow.png';

// Service Categories Data
const serviceCategories = [
  {
    icon: 'code_blocks',
    title: 'Website & Aplikasi',
    desc: 'Fullstack web, dashboard admin, API endpoint, integrasi database, dan bug fixing.',
    tag: 'Engineering',
    accentBg: 'bg-blue-50',
    accentBorder: 'border-blue-200',
    accentColor: 'text-blue-700'
  },
  {
    icon: 'query_stats',
    title: 'Statistika & Olah Data',
    desc: 'SPSS, SmartPLS, SEM-AMOS, EViews, visualisasi grafik, dan interpretasi Bab 4.',
    tag: 'Data Science',
    accentBg: 'bg-amber-50',
    accentBorder: 'border-amber-200',
    accentColor: 'text-amber-700'
  },
  {
    icon: 'article',
    title: 'Karya Ilmiah & Skripsi',
    desc: 'Laporan praktikum, makalah komparatif, proposal skripsi, dan parafrase Turnitin.',
    tag: 'Academic',
    accentBg: 'bg-emerald-50',
    accentBorder: 'border-emerald-200',
    accentColor: 'text-emerald-700'
  },
  {
    icon: 'draw',
    title: 'Desain UI & Presentasi',
    desc: 'Slide presentasi PPT interaktif, visual poster ilmiah, dan prototipe Figma.',
    tag: 'Design',
    accentBg: 'bg-purple-50',
    accentBorder: 'border-purple-200',
    accentColor: 'text-purple-700'
  },
  {
    icon: 'co_present',
    title: 'Mentoring 1-on-1',
    desc: 'Bimbingan persiapan sidang skripsi, telaah rubrik dosen, dan bedah source code.',
    tag: 'Mentorship',
    accentBg: 'bg-sky-50',
    accentBorder: 'border-sky-200',
    accentColor: 'text-sky-700'
  }
];

// Student Tier Packages
const studentPackages = [
  {
    level: 'TIER 01',
    name: 'Starter Academic',
    price: 'Rp 99.000',
    subtitle: 'Cocok untuk tugas mata kuliah mingguan & esai umum semester awal',
    features: [
      'Slide presentasi PPT (hingga 15 slide)',
      'Desain poster / resume visual',
      'Pengecekan Turnitin resmi',
      'Garansi revisi materi 1x'
    ],
    highlight: false,
    badge: 'Semester Awal'
  },
  {
    level: 'TIER 02',
    name: 'Pro Semester Project',
    price: 'Rp 275.000',
    subtitle: 'Rekomendasi utama untuk tugas praktikum, makalah besar, & olah data',
    features: [
      'Laporan teknis komprehensif (s.d. 18 hal)',
      'Slide presentasi PPT representatif',
      'Desain database SQL / olah data dasar',
      '1 sesi konsultasi bedah materi via WA/GMeet',
      'Garansi revisi materi 2x hingga tuntas'
    ],
    highlight: true,
    badge: 'Paling Populer'
  },
  {
    level: 'TIER 03',
    name: 'Advanced Thesis & Dev',
    price: 'Rp 599.000',
    subtitle: 'Proyek kompleks skripsi, sistem website aplikasi, atau olah data SEM',
    features: [
      'Website aplikasi multi-halaman siap pakai',
      'Relasi database komplit & dokumentasi query',
      'Buku panduan instalasi & source code beranotasi',
      '2 sesi pendampingan persiapan sidang',
      'Garansi bug code 7 hari & garansi revisi'
    ],
    highlight: false,
    badge: 'Skripsi & Capstone'
  }
];

// Bundling Packages
const bundlingPackages = [
  {
    code: 'BUNDLE-01',
    name: 'Paket Mulai Online',
    subtitle: 'Website Profil + Database Terstruktur',
    price: 'Rp 450.000',
    savings: 'Hemat 25%',
    items: ['Web Company / Personal Profile', 'Desain Skema Database SQL', 'Setup Domain/Hosting Gratis', 'Revisi 2x']
  },
  {
    code: 'BUNDLE-02',
    name: 'Paket Tuntas Sidang',
    subtitle: 'Dokumen Skripsi + Program + Slide PPT',
    price: 'Rp 850.000',
    savings: 'Hemat 35%',
    items: ['Source Code Program Lengkap', 'Uji Turnitin Bebas Plagiasi', 'PPT Presentasi Dewan Penguji', 'Simulasi Tanya Jawab Sidang']
  }
];

// Visual E-Catalog Items
const visualCatalogItems = [
  {
    id: 'cover',
    title: 'Cover Catalog 2026',
    alt: 'Cover E-Catalog JoKelar 2026',
    src: coverImg,
    desc: 'Buku panduan resmi layanan asistensi akademik JoKelar edisi 2026'
  },
  {
    id: 'kategori',
    title: 'Struktur Kategori',
    alt: 'Kategori Layanan JoKelar',
    src: kategoriImg,
    desc: 'Klasifikasi lengkap 5 pilar penugasan: koding, data, skripsi, desain & mentoring'
  },
  {
    id: 'harga',
    title: 'Matriks Harga',
    alt: 'Daftar Harga & Tarif Asistensi',
    src: hargaImg,
    desc: 'Transparansi estimasi biaya pengerjaan sesuai kompleksitas dan deadline tugas'
  },
  {
    id: 'workflow',
    title: 'Alur Standar Mutu',
    alt: 'Workflow Pengerjaan & Quality Control',
    src: workflowImg,
    desc: 'Alur pengerjaan terstruktur: briefing, pengerjaan, QA turnitin, hingga garansi revisi'
  }
];

export function render() {
  return `
    <div class="w-full flex flex-col items-center">
      
      <!-- HERO HEADER -->
      <section class="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-12 md:py-16">
        <div class="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto reveal">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            <span class="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">Daftar Biaya &amp; Paket 2026</span>
          </div>

          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Tarif Transparan, <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Kualitas Tanpa Kompromi.</span>
          </h1>

          <p class="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
            Pilih paket asistensi yang disesuaikan dengan tingkat kesulitan tugasmu. Tanpa biaya tersembunyi, dengan transparansi rubrik penilaian.
          </p>
        </div>
      </section>

      <!-- 5 SERVICE CATEGORIES: ASYMMETRICAL BENTO -->
      <section class="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16">
        <div class="flex flex-col gap-2 mb-8">
          <span class="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">Bidang Keahlian</span>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900">5 Pilar Cakupan Tugas</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          ${serviceCategories
            .map((cat) => `
              <div class="rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] p-5 flex flex-col justify-between gap-4 hover:border-blue-300 hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-out group">
                <div class="flex items-center justify-between">
                  <div class="w-10 h-10 rounded-2xl ${cat.accentBg} border ${cat.accentBorder} flex items-center justify-center ${cat.accentColor} group-hover:bg-[#0037b0] group-hover:text-white transition-colors">
                    <span class="material-symbols-outlined text-xl">${cat.icon}</span>
                  </div>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-medium">
                    ${cat.tag}
                  </span>
                </div>
                <div class="flex flex-col gap-1">
                  <h3 class="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">${cat.title}</h3>
                  <p class="text-xs text-slate-600 leading-relaxed">${cat.desc}</p>
                </div>
              </div>
            `)
            .join('')}
        </div>
      </section>

      <!-- PRICING TIERS: BENTO SCALE CARDS -->
      <section class="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 border-t border-slate-200">
        <div class="flex flex-col items-center text-center gap-2 max-w-xl mx-auto mb-14 reveal">
          <span class="text-xs font-mono font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">Tingkat Penugasan</span>
          <h2 class="text-3xl font-black text-slate-900">Paket Tugas Mahasiswa</h2>
          <p class="text-xs sm:text-sm text-slate-600">Semua paket dilengkapi jaminan bebas plagiasi dan panduan materi.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          ${studentPackages
            .map((pkg) => {
              const isHighlight = pkg.highlight;
              return `
                <div class="relative rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] p-7 sm:p-8 flex flex-col justify-between gap-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                  
                  ${
                    isHighlight
                      ? `<div class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#fed01b] text-slate-950 text-xs font-black uppercase tracking-wider shadow-sm border border-amber-300">
                          ${pkg.badge}
                        </div>`
                      : ''
                  }

                  <div class="flex flex-col gap-4">
                    <div class="flex items-center justify-between">
                      <span class="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">${pkg.level}</span>
                      ${
                        !isHighlight
                          ? `<span class="font-mono text-[11px] px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-medium">${pkg.badge}</span>`
                          : ''
                      }
                    </div>

                    <div class="flex flex-col gap-1">
                      <h3 class="text-2xl font-black text-slate-900">${pkg.name}</h3>
                      <p class="text-xs text-slate-600 min-h-[32px]">${pkg.subtitle}</p>
                    </div>

                    <div class="pt-2">
                      <div class="text-3xl sm:text-4xl font-black text-blue-700">
                        ${pkg.price}
                      </div>
                      <span class="text-[11px] font-mono text-slate-500">Estimasi fleksibel sesuai kompleksitas</span>
                    </div>

                    <div class="pt-4 border-t border-slate-200/80 flex flex-col gap-2.5">
                      <span class="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">Fasilitas Termasuk:</span>
                      <ul class="flex flex-col gap-2 text-xs text-slate-700">
                        ${pkg.features
                          .map(
                            (f) => `
                              <li class="flex items-start gap-2">
                                <span class="material-symbols-outlined text-base text-blue-600 shrink-0">check_circle</span>
                                <span>${f}</span>
                              </li>
                            `
                          )
                          .join('')}
                      </ul>
                    </div>
                  </div>

                  <a 
                    href="https://wa.me/6285150754258?text=Halo%20Admin%20JoKelar%2C%20saya%20tertarik%20dengan%20paket%20${encodeURIComponent(pkg.name)}."
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="w-full py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-900 font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Pilih Paket Ini</span>
                    <span class="material-symbols-outlined text-sm">north_east</span>
                  </a>

                </div>
              `;
            })
            .join('')}
        </div>
      </section>

      <!-- BUNDLE SOLUTIONS: 2 ASYMMETRIC BENTO PANELS -->
      <section class="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 border-t border-slate-200">
        <div class="flex flex-col gap-2 mb-10">
          <span class="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 w-fit">Hemat Hingga 35%</span>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900">Paket Bundling Komplit</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${bundlingPackages
            .map((b) => `
              <div class="rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] p-7 sm:p-8 flex flex-col justify-between gap-6 hover:border-emerald-400 hover:shadow-lg transition-all duration-300">
                <div class="flex flex-col gap-4">
                  <div class="flex items-center justify-between">
                    <span class="font-mono text-xs text-slate-500 font-semibold">${b.code}</span>
                    <span class="font-mono text-xs px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">${b.savings}</span>
                  </div>

                  <div class="flex flex-col gap-1">
                    <h3 class="text-2xl font-black text-slate-900">${b.name}</h3>
                    <p class="text-xs text-slate-600">${b.subtitle}</p>
                  </div>

                  <div class="text-3xl font-black text-blue-700">
                    ${b.price}
                  </div>

                  <div class="pt-3 border-t border-slate-100 flex flex-col gap-2 text-xs text-slate-700">
                    ${b.items
                      .map(
                        (item) => `
                          <div class="flex items-center gap-2">
                            <span class="material-symbols-outlined text-emerald-600 text-sm font-bold">check</span>
                            <span>${item}</span>
                          </div>
                        `
                      )
                      .join('')}
                  </div>
                </div>

                <a 
                  href="https://wa.me/6285150754258?text=Halo%20Admin%20JoKelar%2C%20saya%20ingin%20ambil%20${encodeURIComponent(b.name)}."
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full py-3.5 px-4 rounded-xl bg-slate-100 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-900 font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all"
                >
                  <span>Klaim Bundling Ini</span>
                  <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            `)
            .join('')}
        </div>
      </section>

      <!-- VISUAL CATALOG GALLERY -->
      <section class="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 border-t border-slate-200">
        <div class="flex flex-col gap-2 mb-8">
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            <span class="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">Dokumentasi Panduan</span>
          </div>
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900">Visual E-Catalog Resmi</h2>
            <p class="text-xs text-slate-500 font-mono">Klik gambar untuk membuka &amp; melihat resolusi penuh</p>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          ${visualCatalogItems
            .map(
              (item, idx) => `
                <div 
                  class="catalog-img-card group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 flex flex-col justify-between"
                  data-index="${idx}"
                  role="button"
                  tabindex="0"
                  aria-label="Buka gambar ${item.title}"
                >
                  <div class="relative w-full h-48 sm:h-56 overflow-hidden bg-slate-100 flex items-center justify-center">
                    <img 
                      src="${item.src}" 
                      alt="${item.alt}" 
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      loading="lazy" 
                    />
                    <!-- Overlay hint on hover -->
                    <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                      <div class="px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-sm text-slate-900 text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-300">
                        <span class="material-symbols-outlined text-base text-blue-700">zoom_in</span>
                        <span>Buka Gambar</span>
                      </div>
                    </div>
                  </div>
                  <div class="p-3 text-center text-xs font-mono text-slate-700 font-semibold group-hover:text-blue-700 transition-colors flex items-center justify-center gap-1.5 border-t border-slate-100 bg-white">
                    <span>${item.title}</span>
                    <span class="material-symbols-outlined text-sm opacity-50 group-hover:opacity-100 transition-opacity">open_in_full</span>
                  </div>
                </div>
              `
            )
            .join('')}
        </div>
      </section>

      <!-- LIGHTBOX MODAL FOR VISUAL E-CATALOG -->
      <div 
        id="catalog-lightbox" 
        class="fixed inset-0 z-[9999] hidden items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md transition-opacity duration-300"
        role="dialog"
        aria-modal="true"
        aria-label="Preview Gambar E-Catalog"
      >
        <div 
          id="catalog-lightbox-box" 
          class="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] my-auto"
        >
          <!-- Header -->
          <div class="flex items-center justify-between px-5 py-3.5 border-b border-slate-100 bg-white">
            <div class="flex items-center gap-3">
              <span class="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              <div>
                <h3 id="lightbox-title" class="text-sm sm:text-base font-black text-slate-900">Judul Dokumen</h3>
                <span id="lightbox-counter" class="text-[11px] font-mono text-slate-500 font-medium">Halaman 1 dari 4</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <a 
                id="lightbox-external-link" 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Buka gambar di tab baru"
                class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 text-xs font-mono font-bold text-slate-700 transition-all"
              >
                <span class="material-symbols-outlined text-sm">open_in_new</span>
                <span class="hidden sm:inline">Ukuran Penuh</span>
              </a>
              <button 
                id="lightbox-close-btn" 
                class="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 border border-slate-200 flex items-center justify-center text-slate-700 transition-all cursor-pointer"
                aria-label="Tutup preview gambar"
              >
                <span class="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
          </div>

          <!-- Image Display with Navigation -->
          <div class="relative flex-1 bg-slate-950 flex items-center justify-center p-3 sm:p-6 overflow-hidden min-h-[260px] max-h-[70vh]">
            <img 
              id="lightbox-img" 
              src="" 
              alt="E-Catalog Preview" 
              class="max-w-full max-h-[66vh] object-contain rounded-xl shadow-2xl select-none transition-all duration-200 block mx-auto cursor-zoom-in"
              title="Klik untuk membuka resolusi penuh di tab baru"
            />
            
            <!-- Prev Button -->
            <button 
              id="lightbox-prev-btn" 
              class="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-lg border border-slate-200 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer z-10"
              aria-label="Gambar Sebelumnya"
            >
              <span class="material-symbols-outlined text-xl">chevron_left</span>
            </button>
            
            <!-- Next Button -->
            <button 
              id="lightbox-next-btn" 
              class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-lg border border-slate-200 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer z-10"
              aria-label="Gambar Berikutnya"
            >
              <span class="material-symbols-outlined text-xl">chevron_right</span>
            </button>
          </div>

          <!-- Footer Caption & Shortcuts -->
          <div class="px-5 py-3 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-600">
            <span id="lightbox-desc" class="text-center sm:text-left text-slate-700 font-medium">Katalog panduan resmi JoKelar 2026</span>
            <div class="flex items-center gap-1 font-mono text-[11px] text-slate-500">
              <kbd class="px-1.5 py-0.5 rounded bg-white border border-slate-300 text-slate-700 shadow-2xs font-semibold">ESC</kbd> tutup
              <span class="mx-1">•</span>
              <kbd class="px-1.5 py-0.5 rounded bg-white border border-slate-300 text-slate-700 shadow-2xs font-semibold">←</kbd> <kbd class="px-1.5 py-0.5 rounded bg-white border border-slate-300 text-slate-700 shadow-2xs font-semibold">→</kbd> geser
            </div>
          </div>
        </div>
      </div>

    </div>
  `;
}

/**
 * Initialize Visual E-Catalog Interactive Lightbox
 */
export function init() {
  // Clean up any stale lightbox attached to body from previous route visits
  const staleLightboxes = document.querySelectorAll('#catalog-lightbox');
  staleLightboxes.forEach((el, index) => {
    if (index > 0 || el.parentElement === document.body) {
      el.remove();
    }
  });

  const cards = document.querySelectorAll('.catalog-img-card');
  const lightbox = document.getElementById('catalog-lightbox');
  
  if (!lightbox || cards.length === 0) return;

  // Portal lightbox to document.body so fixed positioning is viewport-relative
  if (lightbox.parentElement !== document.body) {
    document.body.appendChild(lightbox);
  }

  const lightboxBox = document.getElementById('catalog-lightbox-box');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxExternal = document.getElementById('lightbox-external-link');
  const closeBtn = document.getElementById('lightbox-close-btn');
  const prevBtn = document.getElementById('lightbox-prev-btn');
  const nextBtn = document.getElementById('lightbox-next-btn');

  let currentIndex = 0;

  function updateLightbox(index) {
    currentIndex = (index + visualCatalogItems.length) % visualCatalogItems.length;
    const item = visualCatalogItems[currentIndex];
    if (!item) return;

    if (lightboxImg) {
      lightboxImg.src = item.src;
      lightboxImg.alt = item.alt;
    }
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxDesc) lightboxDesc.textContent = item.desc;
    if (lightboxCounter) lightboxCounter.textContent = `Halaman ${currentIndex + 1} dari ${visualCatalogItems.length}`;
    if (lightboxExternal) lightboxExternal.href = item.src;
  }

  function openLightbox(index) {
    updateLightbox(index);
    if (lightbox.parentElement !== document.body) {
      document.body.appendChild(lightbox);
    }
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = '';
  }

  // Click & Keyboard on gallery cards
  cards.forEach((card) => {
    const idx = parseInt(card.getAttribute('data-index') || '0', 10);
    card.addEventListener('click', () => openLightbox(idx));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(idx);
      }
    });
  });

  // Clicking image in lightbox opens full size in new tab
  if (lightboxImg) {
    lightboxImg.addEventListener('click', () => {
      const item = visualCatalogItems[currentIndex];
      if (item && item.src) {
        window.open(item.src, '_blank');
      }
    });
  }

  // Prev / Next button clicks
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateLightbox(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateLightbox(currentIndex + 1);
    });
  }

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeLightbox();
    });
  }

  // Click outside modal box to close
  lightbox.addEventListener('click', (e) => {
    if (lightboxBox && !lightboxBox.contains(e.target)) {
      closeLightbox();
    }
  });

  // Keyboard navigation (with singleton reference to avoid duplicates)
  if (window._catalogKeyHandler) {
    window.removeEventListener('keydown', window._catalogKeyHandler);
  }
  window._catalogKeyHandler = (e) => {
    const currentLightbox = document.getElementById('catalog-lightbox');
    if (!currentLightbox || currentLightbox.classList.contains('hidden')) return;
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      updateLightbox(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      updateLightbox(currentIndex + 1);
    }
  };
  window.addEventListener('keydown', window._catalogKeyHandler);

  // Clean up on route change
  window.addEventListener(
    'hashchange',
    () => {
      if (lightbox && lightbox.parentElement === document.body) {
        lightbox.remove();
        document.body.style.overflow = '';
      }
    },
    { once: true }
  );
}
