/**
 * ==============================================================================
 * JoKelar — Halaman Beranda (Beranda.js)
 * ==============================================================================
 * Data dummy pada Beranda (layanan populer, ulasan testimoni, dan live order)
 * telah dihilangkan dan digantikan dengan template dinamis yang siap diisi
 * data asli dari database.
 * 
 * Untuk mengisi data:
 * - Ubah array `activeFeaturedServices`, `activeTestimonials`, dan `activeHeroOrder`
 *   di file `src/data/databaseTemplates.js`, ATAU
 * - Hubungkan query database/API di sini.
 * ==============================================================================
 */

import {
  activeFeaturedServices,
  activeTestimonials,
  activeHeroOrder,
} from '../data/databaseTemplates.js';

/**
 * Template card untuk satu layanan populer.
 * @param {import('../data/databaseTemplates.js').FeaturedService} service 
 * @returns {string} HTML markup
 */
export function renderFeaturedServiceCard(service) {
  return `
    <div class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col border border-surface-container-high">
      <div class="h-48 w-full bg-surface-container-high relative overflow-hidden">
        <img 
          class="w-full h-full object-cover" 
          src="${service.image || ''}" 
          alt="${service.alt || service.title}"
          loading="lazy"
          onerror="this.src='https://placehold.co/600x400/e9edff/0037b0?text=${encodeURIComponent(service.title || 'Layanan')}';"
        />
        ${
          service.badgeText
            ? `<span class="absolute top-3 left-3 ${service.badgeClass || 'bg-primary text-on-primary'} font-label-badge text-label-badge px-space-sm py-0.5 rounded-full uppercase">
                ${service.badgeText}
              </span>`
            : ''
        }
      </div>
      <div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
        <div class="flex flex-col gap-space-xs">
          <h3 class="font-headline-sm text-headline-sm text-on-surface font-extrabold">
            ${service.title}
          </h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant">
            ${service.description}
          </p>
        </div>
        <div class="flex items-center justify-between pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
          <div>
            <span class="font-label-badge text-label-badge text-on-surface-variant">Mulai Dari</span>
            <div class="font-headline-sm text-headline-sm text-primary font-bold">
              ${service.startingPrice} <span class="text-xs font-normal text-on-surface-variant">${service.priceUnit || ''}</span>
            </div>
          </div>
          <a class="p-2 bg-surface-container-highest rounded-lg text-on-surface hover:bg-primary hover:text-on-primary transition-colors" data-path="${service.targetPath || 'katalog-tugas'}" href="#${service.targetPath || 'katalog-tugas'}">
            <span class="material-symbols-outlined text-lg">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  `;
}

/**
 * Template card untuk satu ulasan / testimoni klien.
 * @param {import('../data/databaseTemplates.js').Testimonial} t 
 * @returns {string} HTML markup
 */
export function renderTestimonialCard(t) {
  const starsCount = t.rating || 5;
  const stars = Array(starsCount)
    .fill('<span class="material-symbols-outlined" style="font-variation-settings: \'FILL\' 1;">star</span>')
    .join('');

  return `
    <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-md border border-surface-container-high">
      <div class="flex flex-col gap-space-sm">
        <div class="flex items-center text-secondary-container">
          ${stars}
        </div>
        <p class="font-body-md text-body-md text-on-surface italic">
          "${t.quote}"
        </p>
      </div>
      <div class="flex items-center gap-space-sm pt-space-xs bg-surface-container-low p-space-sm rounded-lg">
        <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">
          ${t.initials || (t.clientName ? t.clientName.substring(0, 2).toUpperCase() : 'JK')}
        </div>
        <div>
          <h4 class="font-headline-sm text-body-md text-on-surface font-bold">${t.clientName}</h4>
          <p class="font-label-code text-label-code text-on-surface-variant">${t.clientInfo || 'Mahasiswa Terverifikasi'}</p>
        </div>
      </div>
    </div>
  `;
}

/**
 * Template card status live tracking di Hero.
 * @param {import('../data/databaseTemplates.js').HeroOrder | null} order 
 * @returns {string} HTML markup
 */
function renderHeroSideCard(order) {
  if (order) {
    return `
      <div class="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md border border-surface-container-high">
        <div class="flex items-center justify-between pb-space-xs">
          <div class="flex items-center gap-space-xs">
            <span class="w-2.5 h-2.5 rounded-full bg-primary"></span>
            <span class="font-label-code text-label-code text-on-surface-variant font-semibold">Pesanan Aktif ${order.orderId}</span>
          </div>
          <span class="font-label-badge text-label-badge text-primary bg-surface-container px-2 py-0.5 rounded">${order.progressStatus}</span>
        </div>
        <div class="flex flex-col gap-1">
          <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">${order.title}</h3>
          <p class="font-body-sm text-body-sm text-on-surface-variant">${order.meta}</p>
        </div>
        <div class="flex flex-col gap-1.5 bg-surface-container-low p-space-sm rounded-lg">
          <div class="flex justify-between items-center font-label-code text-label-code">
            <span class="text-on-surface-variant">Progres Pengerjaan</span>
            <span class="text-primary font-bold">${order.progressPercent}% Selesai</span>
          </div>
          <div class="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
            <div class="bg-primary h-full rounded-full" style="width: ${order.progressPercent}%;"></div>
          </div>
        </div>
        <div class="flex items-center justify-between pt-space-xs text-body-sm text-on-surface-variant">
          <span>Cek Plagiarisme: <strong class="text-on-surface">${order.plagiarismScore}</strong></span>
          <span class="text-primary font-semibold">${order.downloadStatus}</span>
        </div>
      </div>
    `;
  }

  // Fallback state jika belum ada pesanan aktif dari database
  return `
    <div class="w-full bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col gap-space-md border border-surface-container-high">
      <div class="flex items-center justify-between pb-space-xs border-b border-surface-container-low">
        <div class="flex items-center gap-space-xs">
          <span class="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
          <span class="font-label-code text-label-code text-primary font-bold uppercase tracking-wider">Live Tracking Ready</span>
        </div>
        <span class="font-label-badge text-label-badge text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded">
          Alur Transparan
        </span>
      </div>

      <div class="flex flex-col gap-space-xs">
        <h3 class="font-headline-sm text-headline-sm text-on-surface font-extrabold">
          Standar Pengerjaan JoKelar
        </h3>
        <p class="font-body-sm text-body-sm text-on-surface-variant">
          Setiap tugas ditangani dengan alur kerja terstruktur dan kepastian mutu terjamin:
        </p>
      </div>

      <div class="flex flex-col gap-space-xs bg-surface-container-low p-space-md rounded-xl">
        <div class="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface">
          <span class="material-symbols-outlined text-primary text-base">check_circle</span>
          <span>Analisis instruksi &amp; rubrik penilaian dosen</span>
        </div>
        <div class="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface">
          <span class="material-symbols-outlined text-primary text-base">check_circle</span>
          <span>Pengecekan Turnitin resmi bebas plagiasi</span>
        </div>
        <div class="flex items-center gap-space-xs text-body-sm font-body-sm text-on-surface">
          <span class="material-symbols-outlined text-primary text-base">check_circle</span>
          <span>Garansi revisi materi hingga tuntas</span>
        </div>
      </div>

      <div class="flex items-center justify-between pt-space-xs text-body-sm text-on-surface-variant">
        <span class="font-label-code text-label-code text-on-surface-variant">Respon Cepat Admin: &lt;15 Mnt</span>
        <a href="https://wa.me/message/RUK4IFU7KE4YK1" target="_blank" rel="noopener noreferrer" class="text-primary font-semibold hover:underline flex items-center gap-0.5">
          <span>Konsultasi</span>
          <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
    </div>
  `;
}

/**
 * Template Empty State untuk Layanan Populer
 */
function renderEmptyFeaturedServicesState() {
  return `
    <div class="col-span-full py-space-xl px-space-lg bg-surface-container-low rounded-2xl border border-dashed border-outline-variant text-center flex flex-col items-center justify-center gap-space-sm my-space-md shadow-sm">
      <div class="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary mb-1">
        <span class="material-symbols-outlined text-3xl">category</span>
      </div>
      <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
        Katalog Layanan Sedang Disiapkan
      </h3>
      <p class="font-body-sm text-body-sm text-on-surface-variant max-w-md">
        Daftar layanan terpopuler akan otomatis muncul setelah integrasi database. Anda dapat melihat katalog lengkap atau langsung berkonsultasi via WhatsApp.
      </p>
      <div class="flex flex-wrap items-center justify-center gap-space-sm pt-space-xs">
        <a class="px-space-md py-space-xs bg-primary text-on-primary rounded-full font-body-sm text-body-sm font-semibold hover:bg-primary-container transition-all shadow-sm" data-path="katalog-tugas" href="#katalog-tugas">
          Buka Katalog Tugas
        </a>
        <a class="px-space-md py-space-xs bg-surface-container text-on-surface rounded-full font-body-sm text-body-sm font-semibold hover:bg-surface-container-high transition-all" href="https://wa.me/message/RUK4IFU7KE4YK1" target="_blank" rel="noopener noreferrer">
          Tanya Layanan via WA
        </a>
      </div>
      <div class="mt-space-xs inline-flex items-center gap-2 px-space-md py-1 bg-surface-container-high rounded-full text-xs font-label-code text-primary font-semibold">
        <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span>Template Database Ready • 0 Layanan Aktif</span>
      </div>
    </div>
  `;
}

/**
 * Template Empty State untuk Testimoni Klien
 */
function renderEmptyTestimonialsState() {
  return `
    <div class="col-span-full py-space-xl px-space-lg bg-surface-container-lowest rounded-2xl border border-dashed border-outline-variant text-center flex flex-col items-center justify-center gap-space-sm my-space-md shadow-sm">
      <div class="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary mb-1">
        <span class="material-symbols-outlined text-3xl">reviews</span>
      </div>
      <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">
        Testimoni Mahasiswa Sedang Disiapkan
      </h3>
      <p class="font-body-sm text-body-sm text-on-surface-variant max-w-md">
        Ulasan langsung dari mahasiswa yang telah menggunakan layanan JoKelar akan ditampilkan di sini setelah terhubung ke database ulasan.
      </p>
      <div class="mt-space-xs inline-flex items-center gap-2 px-space-md py-1 bg-surface-container-low rounded-full text-xs font-label-code text-primary font-semibold">
        <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span>Template Database Ready • 0 Ulasan Aktif</span>
      </div>
    </div>
  `;
}

export function render() {
  const hasFeaturedServices = Array.isArray(activeFeaturedServices) && activeFeaturedServices.length > 0;
  const hasTestimonials = Array.isArray(activeTestimonials) && activeTestimonials.length > 0;

  return `
    <div class="flex flex-col w-full">
      <!-- Hero Section -->
      <section class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center py-space-xl">
          
          <!-- Hero Left Column -->
          <div class="lg:col-span-7 flex flex-col gap-space-md">
            <div class="inline-flex items-center gap-2 px-space-sm py-1 bg-surface-container rounded-full w-fit">
              <span class="w-2 h-2 rounded-full bg-primary"></span>
              <span class="font-label-badge text-label-badge text-primary uppercase tracking-widest font-bold">
                Asistensi Akademik Modern
              </span>
            </div>
            <h1 class="font-display-hero text-headline-lg md:text-display-hero text-on-surface tracking-tight font-extrabold leading-tight">
              Bereskan tugas kuliah tanpa beban.
            </h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
              Dukungan pengerjaan terstruktur, bebas plagiasi, dan selesai tepat waktu oleh mentor berpengalaman.
            </p>
            <div class="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <a class="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-primary text-on-primary font-body-sm text-body-sm font-semibold rounded-lg hover:bg-primary-container transition-all shadow-sm" data-path="katalog-tugas" href="#katalog-tugas">
                <span>Lihat Layanan</span>
                <span class="material-symbols-outlined text-base">arrow_forward</span>
              </a>
              <a class="inline-flex items-center gap-space-xs px-space-lg py-space-sm bg-surface-container-lowest text-on-surface font-body-sm text-body-sm font-semibold rounded-lg hover:bg-surface-container transition-all shadow-sm" href="https://wa.me/message/RUK4IFU7KE4YK1" rel="noopener noreferrer" target="_blank">
                <span class="material-symbols-outlined text-base text-primary">chat</span>
                <span>Tanya Admin</span>
              </a>
            </div>
            <div class="flex items-center gap-space-lg pt-space-md text-on-surface-variant font-body-sm text-body-sm">
              <div class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-primary text-base">verified</span>
                <span>Turnitin &lt; 15%</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-primary text-base">lock</span>
                <span>Privasi Terjaga</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-primary text-base">autorenew</span>
                <span>Garansi Revisi</span>
              </div>
            </div>
          </div>

          <!-- Hero Right Column (Live Order or Standard Features Card) -->
          <div class="lg:col-span-5">
            ${renderHeroSideCard(activeHeroOrder)}
          </div>

        </div>
      </section>

      <!-- Quick Numbers & Stats Strip -->
      <section class="w-full bg-surface-container-low py-space-lg">
        <div class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-space-lg text-center">
            <div class="flex flex-col items-center gap-1">
              <span class="font-headline-lg text-headline-lg font-black text-on-surface tracking-tight">2.500+</span>
              <span class="font-body-sm text-body-sm text-on-surface-variant">Tugas Selesai</span>
            </div>
            <div class="flex flex-col items-center gap-1">
              <span class="font-headline-lg text-headline-lg font-black text-on-surface tracking-tight">99.4%</span>
              <span class="font-body-sm text-body-sm text-on-surface-variant">Tingkat Kepuasan</span>
            </div>
            <div class="flex flex-col items-center gap-1">
              <span class="font-headline-lg text-headline-lg font-black text-on-surface tracking-tight">50+</span>
              <span class="font-body-sm text-body-sm text-on-surface-variant">Mitra Pengajar</span>
            </div>
            <div class="flex flex-col items-center gap-1">
              <span class="font-headline-lg text-headline-lg font-black text-on-surface tracking-tight">&lt;15 Mnt</span>
              <span class="font-body-sm text-body-sm text-on-surface-variant">Respon Cepat</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 4 Key Pillars / Trust Highlights -->
      <section class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div class="flex flex-col items-center text-center gap-space-xs max-w-xl mx-auto mb-space-xl">
          <span class="font-label-badge text-label-badge text-primary uppercase tracking-widest font-bold">Keunggulan</span>
          <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight font-extrabold">Kenapa Memilih JoKelar?</h2>
          <p class="font-body-md text-body-md text-on-surface-variant">Standar akademis tinggi dengan pengerjaan transparan dan cepat.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm border border-surface-container-high">
            <div class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
              <span class="material-symbols-outlined text-2xl">verified_user</span>
            </div>
            <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold text-base">Anti-Plagiasi</h3>
            <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Dikerjakan dari awal dengan laporan Turnitin resmi di bawah 15%.</p>
          </div>
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm border border-surface-container-high">
            <div class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
              <span class="material-symbols-outlined text-2xl">speed</span>
            </div>
            <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold text-base">Tepat Waktu</h3>
            <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Pilihan pengerjaan kilat 24 jam dengan jaminan selesai tepat jadwal.</p>
          </div>
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm border border-surface-container-high">
            <div class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
              <span class="material-symbols-outlined text-2xl">replay</span>
            </div>
            <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold text-base">Garansi Revisi</h3>
            <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Pendampingan penyesuaian materi tanpa biaya tambahan sampai tuntas.</p>
          </div>
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm border border-surface-container-high">
            <div class="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
              <span class="material-symbols-outlined text-2xl">payments</span>
            </div>
            <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold text-base">Harga Transparan</h3>
            <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Biaya ramah mahasiswa dengan skema pembayaran bertahap fleksibel.</p>
          </div>
        </div>
      </section>

      <!-- Alur Pemesanan 3 Langkah Praktis -->
      <section class="w-full bg-surface-container py-space-xl">
        <div class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-xl">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div>
              <span class="font-label-badge text-label-badge text-primary uppercase tracking-widest font-bold">Alur Kerja</span>
              <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight font-extrabold mt-1">3 Langkah Mudah</h2>
            </div>
            <p class="font-body-md text-body-md text-on-surface-variant max-w-sm">Pemesanan cepat dan praktis tanpa prosedur berbelit.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm border border-surface-container-high">
              <span class="font-headline-lg text-headline-lg text-primary font-black">01</span>
              <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold text-base">Kirim Detail Tugas</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Sampaikan petunjuk, format acuan, dan tenggat waktu tugasmu.</p>
            </div>
            <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm border border-surface-container-high">
              <span class="font-headline-lg text-headline-lg text-primary font-black">02</span>
              <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold text-base">Konfirmasi &amp; Pengerjaan</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Sepakati estimasi biaya serta timeline pengerjaan dengan admin.</p>
            </div>
            <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-sm border border-surface-container-high">
              <span class="font-headline-lg text-headline-lg text-primary font-black">03</span>
              <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold text-base">Hasil Siap Dikirim</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Terima hasil rapi, cek bukti Turnitin, dan konsultasikan revisi bila perlu.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Popular Categories Showcase -->
      <section class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
          <div>
            <span class="font-label-badge text-label-badge text-primary uppercase tracking-widest bg-surface-container px-space-sm py-1 rounded-full">
              Katalog Populer
            </span>
            <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-xs">
              Layanan yang Paling Banyak Dipesan
            </h2>
          </div>
          <a class="font-headline-sm text-headline-sm text-primary hover:text-on-surface transition-colors flex items-center gap-1" data-path="katalog-tugas" href="#katalog-tugas">
            <span>Buka Katalog Lengkap</span>
            <span class="material-symbols-outlined">east</span>
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          ${
            hasFeaturedServices
              ? activeFeaturedServices.map(renderFeaturedServiceCard).join('')
              : renderEmptyFeaturedServicesState()
          }
        </div>
      </section>

      <!-- Testimoni Klien Showcase -->
      <section class="w-full bg-surface-container-low py-space-xl">
        <div class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          <div class="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto mb-space-xl">
            <span class="font-label-badge text-label-badge text-primary uppercase tracking-widest bg-surface-container px-space-sm py-1 rounded-full">
              Testimoni Klien
            </span>
            <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Apa Kata Mahasiswa yang Udah Kelar Tugasnya?
            </h2>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Identitas disamarkan demi menjaga etika dan privasi akademik 100%.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            ${
              hasTestimonials
                ? activeTestimonials.map(renderTestimonialCard).join('')
                : renderEmptyTestimonialsState()
            }
          </div>
        </div>
      </section>

      <!-- Big Interactive CTA Banner Section -->
      <section class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div class="bg-primary text-on-primary rounded-xl p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-sm">
          <div class="flex flex-col gap-2 max-w-lg">
            <h2 class="font-headline-lg text-headline-lg font-bold tracking-tight text-on-primary">
              Siap selesaikan tugasmu hari ini?
            </h2>
            <p class="font-body-md text-body-md text-primary-fixed">
              Konsultasikan kebutuhan tugas kuliah dan sekolah dengan admin JoKelar kapan saja.
            </p>
          </div>
          <div class="flex flex-wrap gap-space-sm">
            <a class="px-space-lg py-space-sm bg-surface-container-lowest text-primary font-body-sm text-body-sm font-bold rounded-lg transition-all hover:bg-surface-container text-center shadow-sm" href="https://wa.me/message/RUK4IFU7KE4YK1" rel="noopener noreferrer" target="_blank">
              Konsultasi WhatsApp
            </a>
            <a class="px-space-lg py-space-sm bg-primary-container text-on-primary font-body-sm text-body-sm font-semibold rounded-lg transition-all hover:opacity-90 text-center shadow-sm" data-path="katalog-tugas" href="#katalog-tugas">
              Katalog Lengkap
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function init() {
  // Hook inisialisasi jika ada interaktivitas tambahan
}
