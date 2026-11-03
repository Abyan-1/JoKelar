/**
 * JoKelar — Halaman Catalog (Katalog.js)
 * Catalog 2026: Task Assistance & Digital Services.
 * Minimalis, modern, dan terstruktur.
 */

import coverImg from '../assets/Catalog/Cover.png';
import kategoriImg from '../assets/Catalog/Produt Kategori.png';
import hargaImg from '../assets/Catalog/Daftar Harga.png';
import bundleImg from '../assets/Catalog/Bundle.png';
import bundleV2Img from '../assets/Catalog/Bundle-v2.png';
import workflowImg from '../assets/Catalog/Workflow.png';

// Data Kategori Layanan
const serviceCategories = [
  {
    icon: 'devices',
    title: 'Website & Aplikasi',
    desc: 'Landing page, company profile, web sederhana, dan perbaikan bug.',
    tag: 'Web Dev'
  },
  {
    icon: 'database',
    title: 'Database & Data',
    desc: 'Desain database, query SQL, entri & rapikan data, dashboard.',
    tag: 'Data'
  },
  {
    icon: 'description',
    title: 'Laporan & Dokumen',
    desc: 'Laporan teknis/proyek, dokumentasi sistem, dan panduan pengguna.',
    tag: 'Dokumen'
  },
  {
    icon: 'slideshow',
    title: 'Desain & Presentasi',
    desc: 'Slide presentasi PPT, poster/banner, dan video pendek kreatif.',
    tag: 'Desain'
  },
  {
    icon: 'school',
    title: 'Pendampingan',
    desc: 'Konsultasi, review kode/laporan, dan bimbingan belajar coding.',
    tag: 'Mentoring'
  }
];

// Data Paket Mahasiswa
const studentPackages = [
  {
    level: 'LEVEL 01',
    name: 'Pemula',
    price: 'Rp 99.000',
    subtitle: 'Cocok untuk tugas sederhana mahasiswa semester awal',
    features: [
      'PPT hingga 15 slide',
      'Poster / banner pendukung',
      '1 sesi konsultasi',
      'Revisi 1x'
    ],
    highlight: false,
    badge: 'Semester Awal'
  },
  {
    level: 'LEVEL 02',
    name: 'Medium',
    price: 'Rp 275.000',
    subtitle: 'Cocok untuk tugas matkul, praktikum, proyek semester',
    features: [
      'Laporan teknis hingga 15 halaman',
      'PPT pendukung',
      'Desain database sederhana',
      '1 sesi mentoring',
      'Revisi 2x'
    ],
    highlight: true,
    badge: 'Paling Populer'
  },
  {
    level: 'LEVEL 03',
    name: 'Lanjutan',
    price: 'Rp 599.000',
    subtitle: 'Cocok untuk proyek besar yang butuh sistem atau data',
    features: [
      'Website hingga 3 halaman',
      'Desain database + 5 query',
      'Dokumentasi / panduan pengguna',
      '2 sesi mentoring',
      'Revisi 2x + garansi bug 7 hari'
    ],
    highlight: false,
    badge: 'Proyek Kompleks'
  }
];

// Data Paket Bundling
const bundlingPackages = [
  {
    code: 'BUNDLING 01',
    name: 'Mulai Online',
    price: 'Rp 350.000',
    desc: 'Untuk yang ingin tampil online dengan cepat.',
    features: [
      '1 landing page responsif',
      '1 desain banner/poster pendukung',
      'Revisi hingga 2x'
    ]
  },
  {
    code: 'BUNDLING 02',
    name: 'Rapi Dokumen',
    price: 'Rp 150.000',
    desc: 'Untuk laporan dan dokumentasi yang siap pakai.',
    features: [
      'Penyusunan laporan teknis/proyek (15 hal)',
      'Template PPT pendukung',
      'Revisi hingga 2x'
    ]
  },
  {
    code: 'BUNDLING 03',
    name: 'Data Beres',
    price: 'Rp 250.000',
    desc: 'Untuk data praktikum atau riset yang berantakan.',
    features: [
      'Rapikan & input data (500 baris)',
      'Desain database sederhana + 5 query',
      'Panduan singkat penggunaan',
      'Revisi hingga 2x'
    ]
  },
  {
    code: 'BUNDLING 04',
    name: 'Paket Lengkap',
    price: 'Rp 750.000',
    desc: 'Solusi all-in-one untuk proyek dan usaha kecil.',
    features: [
      'Website company profile (hingga 5 hal)',
      'Dokumentasi & panduan admin',
      'Desain logo/banner dasar',
      'Garansi perbaikan bug 7 hari'
    ]
  }
];

// Data Harga Satuan
const unitPrices = [
  { service: 'Landing page 1 halaman', price: 'Rp 200.000', cat: 'Web' },
  { service: 'Website tambahan per halaman', price: 'Rp 50.000', cat: 'Web' },
  { service: 'Perbaikan bug / perubahan kecil', price: 'Rp 30.000', cat: 'Web' },
  { service: 'Desain database sederhana', price: 'Rp 100.000', cat: 'Data' },
  { service: 'Query / laporan data', price: 'Rp 25.000', cat: 'Data' },
  { service: 'Input & rapikan data', price: 'Rp 20.000', cat: 'Data' },
  { service: 'Laporan teknis (hingga 10 halaman)', price: 'Rp 100.000', cat: 'Dokumen' },
  { service: 'Halaman tambahan laporan', price: 'Rp 5.000', cat: 'Dokumen' },
  { service: 'Dokumentasi sistem / panduan pengguna', price: 'Rp 75.000', cat: 'Dokumen' },
  { service: 'Presentasi PPT (hingga 15 slide)', price: 'Rp 50.000', cat: 'Desain' },
  { service: 'Poster / banner', price: 'Rp 30.000', cat: 'Desain' },
  { service: 'Video pendek (hingga 30 detik)', price: 'Rp 100.000', cat: 'Desain' },
  { service: 'Konsultasi / mentoring per sesi (60 menit)', price: 'Rp 40.000', cat: 'Mentoring' }
];

// 7 Langkah Alur Pemesanan Resmi (Sesuai gambar lampiran)
const workflowSteps = [
  {
    step: '1',
    title: 'Konsultasi',
    desc: 'Klien menyampaikan kebutuhan, deadline, dan referensi lewat chat/form.',
    color: 'bg-primary text-on-primary'
  },
  {
    step: '2',
    title: 'Penawaran & Deal',
    desc: 'Kami kirim estimasi harga, timeline, dan cakupan kerja. Klien menyetujui S&K.',
    color: 'bg-primary text-on-primary'
  },
  {
    step: '3',
    title: 'DP 50%',
    desc: 'Pembayaran awal, lalu pesanan masuk antrean pengerjaan resmi.',
    color: 'bg-secondary-container text-on-secondary-fixed'
  },
  {
    step: '4',
    title: 'Pengerjaan',
    desc: 'Dikerjakan sesuai keahlian tim; jika di luar kapasitas, dialihkan ke mitra terpercaya dengan data terbatas.',
    color: 'bg-primary text-on-primary'
  },
  {
    step: '5',
    title: 'Preview & Revisi',
    desc: 'Klien menerima draft/watermark dan memberi masukan (maks. 2x revisi).',
    color: 'bg-secondary-container text-on-secondary-fixed'
  },
  {
    step: '6',
    title: 'Pelunasan & Serah Terima',
    desc: 'Sisa 50% dibayar, file final/akses dikirim beserta panduan singkat.',
    color: 'bg-secondary-container text-on-secondary-fixed'
  },
  {
    step: '7',
    title: 'Follow-up',
    desc: 'Masa garansi 7 hari, lalu minta testimoni (data disamarkan).',
    color: 'bg-primary text-on-primary'
  }
];

export function render() {
  return `
    <div class="flex flex-col w-full">
      <div class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin pt-space-lg pb-space-xl">
        
        <!-- Header Banner Minimalis Modern -->
        <div class="text-center max-w-2xl mx-auto mb-space-xl flex flex-col items-center gap-space-xs">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full">
            <span class="w-2 h-2 rounded-full bg-primary"></span>
            <span class="font-label-badge text-xs uppercase text-primary font-bold tracking-wider">Catalog 2026</span>
          </div>
          <h1 class="font-headline-lg text-2xl md:text-4xl text-on-surface tracking-tight font-extrabold">
            Catalog JoKelar
          </h1>
          <p class="font-body-sm text-sm text-on-surface-variant max-w-md">
            Layanan asistensi tugas akademik dan solusi digital terstruktur dengan harga transparan ramah kantong.
          </p>
        </div>

        <!-- 5 Kategori Produk & Layanan -->
        <section class="mb-space-xl">
          <div class="flex items-center justify-between mb-space-md">
            <h2 class="font-headline-sm text-lg md:text-xl text-on-surface font-bold">Kategori Produk</h2>
            <span class="font-label-code text-xs text-on-surface-variant">5 Bidang Keahlian</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-sm">
            ${serviceCategories.map(cat => `
              <div class="bg-surface-container-lowest p-space-md rounded-2xl border border-outline-variant/30 hover:border-primary/50 transition-all flex flex-col justify-between gap-space-sm shadow-xs">
                <div>
                  <div class="w-10 h-10 rounded-xl bg-surface-container text-primary flex items-center justify-center mb-space-xs">
                    <span class="material-symbols-outlined text-xl">${cat.icon}</span>
                  </div>
                  <span class="font-label-code text-[11px] text-primary font-semibold uppercase tracking-wider">${cat.tag}</span>
                  <h3 class="font-headline-sm text-sm font-bold text-on-surface mt-0.5">${cat.title}</h3>
                  <p class="font-body-sm text-xs text-on-surface-variant mt-1 leading-relaxed">${cat.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Pricing Packages Section with Tabs -->
        <section class="mb-space-xl">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm mb-space-md">
            <div>
              <h2 class="font-headline-sm text-lg md:text-xl text-on-surface font-bold">Paket &amp; Biaya Pengerjaan</h2>
              <p class="font-body-sm text-xs text-on-surface-variant">Pilih paket siap pakai atau pesan layanan satuan.</p>
            </div>
            
            <!-- Tabs -->
            <div class="inline-flex p-1 bg-surface-container rounded-xl gap-1">
              <button class="catalog-tab-btn active px-3 py-1.5 rounded-lg font-label-badge text-xs font-bold transition-all bg-surface-container-lowest text-primary shadow-xs" data-target="tab-mahasiswa">
                Paket Mahasiswa
              </button>
              <button class="catalog-tab-btn px-3 py-1.5 rounded-lg font-label-badge text-xs font-bold transition-all text-on-surface-variant hover:text-on-surface" data-target="tab-bundling">
                Paket Bundling
              </button>
              <button class="catalog-tab-btn px-3 py-1.5 rounded-lg font-label-badge text-xs font-bold transition-all text-on-surface-variant hover:text-on-surface" data-target="tab-satuan">
                Daftar Satuan
              </button>
            </div>
          </div>

          <!-- Tab Content 1: Paket Mahasiswa -->
          <div id="tab-mahasiswa" class="catalog-tab-content block">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
              ${studentPackages.map(pkg => `
                <div class="relative bg-surface-container-lowest rounded-2xl p-space-lg flex flex-col justify-between border ${pkg.highlight ? 'border-primary ring-2 ring-primary/20 shadow-md' : 'border-outline-variant/30 shadow-xs'} transition-all">
                  ${pkg.highlight ? `
                    <span class="absolute -top-3 right-4 px-2.5 py-0.5 bg-secondary-container text-on-secondary-fixed font-label-badge text-[11px] font-bold rounded-full uppercase tracking-wider">
                      ${pkg.badge}
                    </span>
                  ` : ''}
                  <div>
                    <span class="font-label-code text-xs text-primary font-bold">${pkg.level}</span>
                    <h3 class="font-headline-lg text-xl md:text-2xl font-black text-on-surface uppercase mt-0.5">${pkg.name}</h3>
                    <div class="mt-2 mb-3">
                      <span class="font-headline-lg text-2xl font-extrabold text-primary">${pkg.price}</span>
                    </div>
                    <p class="font-body-sm text-xs text-on-surface-variant pb-space-sm border-b border-surface-container-low mb-space-sm italic">
                      ${pkg.subtitle}
                    </p>
                    <ul class="space-y-2 mb-space-md">
                      ${pkg.features.map(f => `
                        <li class="flex items-center gap-2 font-body-sm text-xs text-on-surface">
                          <span class="material-symbols-outlined text-primary text-base">check_circle</span>
                          <span>${f}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                  <a href="https://wa.me/message/RUK4IFU7KE4YK1?text=${encodeURIComponent(`Halo JoKelar, saya tertarik memesan Paket Mahasiswa Level ${pkg.name} (${pkg.price})`)}" target="_blank" rel="noopener noreferrer" class="w-full py-2.5 rounded-xl font-label-badge text-xs uppercase tracking-wider text-center transition-all ${pkg.highlight ? 'bg-primary text-on-primary hover:bg-primary-container shadow-sm' : 'bg-surface-container hover:bg-surface-container-high text-on-surface'}">
                    Pilih Paket
                  </a>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Tab Content 2: Paket Bundling -->
          <div id="tab-bundling" class="catalog-tab-content hidden">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
              ${bundlingPackages.map(pkg => `
                <div class="bg-surface-container-lowest rounded-2xl p-space-md flex flex-col justify-between border border-outline-variant/30 shadow-xs">
                  <div>
                    <span class="font-label-code text-[11px] text-primary font-bold">${pkg.code}</span>
                    <h3 class="font-headline-sm text-base font-extrabold text-on-surface uppercase mt-0.5">${pkg.name}</h3>
                    <div class="my-2">
                      <span class="font-headline-sm text-xl font-extrabold text-primary">${pkg.price}</span>
                    </div>
                    <p class="font-body-sm text-xs text-on-surface-variant pb-space-xs border-b border-surface-container-low mb-space-xs">
                      ${pkg.desc}
                    </p>
                    <ul class="space-y-1.5 mb-space-md mt-2">
                      ${pkg.features.map(f => `
                        <li class="flex items-start gap-1.5 font-body-sm text-xs text-on-surface">
                          <span class="material-symbols-outlined text-primary text-sm mt-0.5">check</span>
                          <span>${f}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                  <a href="https://wa.me/message/RUK4IFU7KE4YK1?text=${encodeURIComponent(`Halo JoKelar, saya tertarik memesan ${pkg.code} - ${pkg.name} (${pkg.price})`)}" target="_blank" rel="noopener noreferrer" class="w-full py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl font-label-badge text-xs uppercase tracking-wider text-center transition-all">
                    Pilih Bundling
                  </a>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Tab Content 3: Daftar Satuan -->
          <div id="tab-satuan" class="catalog-tab-content hidden">
            <div class="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden shadow-xs">
              <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                  <thead>
                    <tr class="bg-primary text-on-primary font-label-badge text-xs uppercase tracking-wider">
                      <th class="py-3 px-space-md">Layanan</th>
                      <th class="py-3 px-space-md">Kategori</th>
                      <th class="py-3 px-space-md text-right">Harga</th>
                      <th class="py-3 px-space-md text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-surface-container-low font-body-sm text-xs text-on-surface">
                    ${unitPrices.map(item => `
                      <tr class="hover:bg-surface-container-low/50 transition-colors">
                        <td class="py-2.5 px-space-md font-medium text-on-surface">${item.service}</td>
                        <td class="py-2.5 px-space-md text-on-surface-variant">
                          <span class="px-2 py-0.5 rounded-md bg-surface-container text-primary font-label-code text-[11px] font-semibold">${item.cat}</span>
                        </td>
                        <td class="py-2.5 px-space-md text-right font-bold text-primary font-label-code">${item.price}</td>
                        <td class="py-2.5 px-space-md text-center">
                          <a href="https://wa.me/message/RUK4IFU7KE4YK1?text=${encodeURIComponent(`Halo JoKelar, saya ingin pesan layanan satuan: ${item.service} (${item.price})`)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-primary hover:underline font-semibold font-label-badge text-xs">
                            <span>Pesan</span>
                            <span class="material-symbols-outlined text-xs">arrow_forward</span>
                          </a>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <!-- 7-Langkah Workflow Pemesanan (Sesuai Desain Asli) -->
        <section class="mb-space-xl">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs mb-space-md">
            <div>
              <div class="inline-flex items-center gap-1 font-label-code text-xs text-primary font-bold uppercase tracking-wider">
                <span class="w-2 h-2 rounded-full bg-primary"></span>
                <span>Alur Transparan</span>
              </div>
              <h2 class="font-headline-sm text-xl md:text-2xl text-on-surface font-black mt-0.5">Workflow Pemesanan</h2>
            </div>
            <button id="viewBrochureBtn" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-badge text-xs transition-colors self-start sm:self-auto">
              <span class="material-symbols-outlined text-base">image</span>
              <span>Lihat Poster Alur</span>
            </button>
          </div>

          <!-- 7 Steps List Modern Neo-Brutalist -->
          <div class="flex flex-col gap-2.5 max-w-3xl mx-auto">
            ${workflowSteps.map(w => `
              <div class="flex items-center bg-surface-container-lowest rounded-xl border-2 border-on-surface shadow-[3px_3px_0px_#141b2b] overflow-hidden transition-all hover:translate-x-1">
                <div class="w-12 sm:w-16 self-stretch ${w.color} flex items-center justify-center font-headline-lg text-lg sm:text-2xl font-black shrink-0 border-r-2 border-on-surface">
                  ${w.step}
                </div>
                <div class="p-3 sm:px-4 flex flex-col justify-center">
                  <h4 class="font-headline-sm text-sm sm:text-base font-extrabold text-on-surface leading-tight">${w.title}</h4>
                  <p class="font-body-sm text-xs text-on-surface-variant leading-relaxed mt-0.5">${w.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Gallery Booklet / Asset Modal -->
        <div id="brochureModal" class="fixed inset-0 z-50 hidden bg-inverse-surface/70 backdrop-blur-xs flex items-center justify-center p-space-md">
          <div class="relative max-w-xl w-full bg-surface-container-lowest rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/40">
            <div class="p-3 bg-surface-container flex items-center justify-between">
              <span class="font-headline-sm text-sm font-bold text-on-surface">Poster Workflow Resmi JoKelar</span>
              <button id="closeBrochureBtn" class="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-surface-container-high">
                <span class="material-symbols-outlined text-base">close</span>
              </button>
            </div>
            <div class="p-3 max-h-[80vh] overflow-y-auto flex items-center justify-center bg-surface-container-low">
              <img src="${workflowImg}" alt="Workflow Pemesanan JoKelar" class="w-full h-auto rounded-lg shadow-sm" />
            </div>
          </div>
        </div>

        <!-- Portofolio Teaser Banner -->
        <section class="mt-space-lg p-space-md md:p-space-lg bg-surface-container-low rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-space-md border border-outline-variant/30">
          <div>
            <span class="font-label-code text-xs text-primary font-bold uppercase tracking-wider">Hasil Pengerjaan Nyata</span>
            <h3 class="font-headline-sm text-base md:text-lg font-bold text-on-surface mt-0.5">Ingin melihat contoh tugas yang pernah kami kerjakan?</h3>
            <p class="font-body-sm text-xs text-on-surface-variant mt-0.5">Kunjungi halaman Portofolio untuk melihat skor Turnitin, nilai A, dan testimoni mahasiswa.</p>
          </div>
          <a class="whitespace-nowrap inline-flex items-center gap-1.5 px-space-md py-2.5 bg-primary text-on-primary font-label-badge text-xs uppercase tracking-wider rounded-xl hover:bg-primary-container transition-all" data-path="portofolio" href="#portofolio">
            <span>Buka Portofolio</span>
            <span class="material-symbols-outlined text-sm">east</span>
          </a>
        </section>

      </div>
    </div>
  `;
}

export function init() {
  // Tab switching
  const tabs = document.querySelectorAll('.catalog-tab-btn');
  const contents = document.querySelectorAll('.catalog-tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-target');

      tabs.forEach(t => {
        t.classList.remove('active', 'bg-surface-container-lowest', 'text-primary', 'shadow-xs');
        t.classList.add('text-on-surface-variant');
      });
      tab.classList.add('active', 'bg-surface-container-lowest', 'text-primary', 'shadow-xs');
      tab.classList.remove('text-on-surface-variant');

      contents.forEach(c => {
        if (c.id === target) {
          c.classList.remove('hidden');
          c.classList.add('block');
        } else {
          c.classList.add('hidden');
          c.classList.remove('block');
        }
      });
    });
  });

  // Modal Poster Alur
  const viewBtn = document.getElementById('viewBrochureBtn');
  const modal = document.getElementById('brochureModal');
  const closeBtn = document.getElementById('closeBrochureBtn');

  if (viewBtn && modal && closeBtn) {
    viewBtn.addEventListener('click', () => {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    });
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }
}
