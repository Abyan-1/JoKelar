/**
 * ==============================================================================
 * JoKelar — Halaman Beranda (Beranda.js)
 * Modern Bento Box Architecture, High-Contrast Clean White Theme
 * Palette: White (Majority), Royal Blue, Golden Yellow, Slate Gray, Bold Black
 * ==============================================================================
 */

import {
  activeFeaturedServices,
  activeTestimonials,
  activeHeroOrder,
} from '../data/databaseTemplates.js';

/**
 * Render kartu layanan unggulan dalam balutan Bento Card Clean White
 */
export function renderFeaturedServiceCard(service) {
  return `
    <div class="group relative rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_35px_-10px_rgba(0,55,176,0.12)] hover:border-blue-300 p-6 flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1.5 overflow-hidden">
      <!-- Top Subtle Glow in Card -->
      <div class="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/[0.06] rounded-full blur-2xl group-hover:bg-blue-500/[0.12] transition-all"></div>

      <div class="flex flex-col gap-4 relative z-10">
        <div class="h-44 w-full rounded-2xl overflow-hidden bg-slate-100 relative">
          <img 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            src="${service.image || ''}" 
            alt="${service.alt || service.title}"
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80';"
          />
          ${
            service.badgeText
              ? `<span class="absolute top-3 left-3 bg-[#0037b0] text-white font-mono text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  ${service.badgeText}
                </span>`
              : ''
          }
        </div>

        <div class="flex flex-col gap-1.5">
          <h3 class="text-xl font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors tracking-tight">
            ${service.title}
          </h3>
          <p class="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            ${service.description}
          </p>
        </div>
      </div>

      <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
        <div class="flex flex-col">
          <span class="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-semibold">Mulai Dari</span>
          <div class="text-lg font-black text-blue-700">
            ${service.startingPrice} <span class="text-xs font-normal text-slate-500">${service.priceUnit || ''}</span>
          </div>
        </div>
        <a 
          href="#${service.targetPath || 'catalog'}" 
          class="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-xs"
          aria-label="Lihat Detail ${service.title}"
        >
          <span class="material-symbols-outlined text-lg">arrow_forward</span>
        </a>
      </div>
    </div>
  `;
}

/**
 * Render kartu testimoni klien dengan gaya Clean White Bento
 */
export function renderTestimonialCard(t) {
  const starsCount = t.rating || 5;
  const stars = Array(starsCount)
    .fill('<span class="material-symbols-outlined text-[#eab308] text-sm" style="font-variation-settings: \'FILL\' 1;">star</span>')
    .join('');

  return `
    <div class="rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] p-6 flex flex-col justify-between gap-5 hover:border-blue-300 hover:shadow-md transition-all duration-300">
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-1">
          ${stars}
        </div>
        <p class="text-sm text-slate-700 italic leading-relaxed">
          "${t.quote}"
        </p>
      </div>

      <div class="flex items-center gap-3 pt-3 border-t border-slate-100">
        <div class="w-10 h-10 rounded-full bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center font-bold text-xs">
          ${t.initials || (t.clientName ? t.clientName.substring(0, 2).toUpperCase() : 'JK')}
        </div>
        <div class="flex flex-col">
          <span class="text-sm font-bold text-slate-900">${t.clientName}</span>
          <span class="text-xs font-mono text-slate-500">${t.clientInfo || 'Mahasiswa Terverifikasi'}</span>
        </div>
      </div>
    </div>
  `;
}

/**
 * Live Tracking Card Widget for Hero
 */
function renderHeroSideCard(order) {
  if (order) {
    return `
      <div class="relative rounded-3xl bg-white border border-slate-200 shadow-[0_10px_35px_-5px_rgba(0,55,176,0.08)] p-6 sm:p-8 flex flex-col gap-5 overflow-hidden">
        <div class="absolute top-0 right-0 w-48 h-48 bg-blue-500/[0.08] rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex items-center justify-between pb-3 border-b border-slate-100 relative z-10">
          <div class="flex items-center gap-2">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span class="font-mono text-xs text-slate-700 font-bold tracking-wider">ORDER LIVE ${order.orderId}</span>
          </div>
          <span class="font-mono text-xs px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-bold">
            ${order.progressStatus}
          </span>
        </div>

        <div class="flex flex-col gap-1 relative z-10">
          <h3 class="text-lg font-extrabold text-slate-900">${order.title}</h3>
          <p class="text-xs text-slate-500 font-mono">${order.meta}</p>
        </div>

        <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col gap-2 relative z-10">
          <div class="flex justify-between items-center text-xs font-mono">
            <span class="text-slate-600 font-medium">Status Pengerjaan</span>
            <span class="text-blue-700 font-bold">${order.progressPercent}% Selesai</span>
          </div>
          <div class="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
            <div class="bg-gradient-to-r from-blue-600 to-sky-500 h-full rounded-full transition-all duration-700" style="width: ${order.progressPercent}%;"></div>
          </div>
        </div>

        <div class="flex items-center justify-between pt-1 text-xs text-slate-600 relative z-10 font-mono">
          <span>Turnitin: <strong class="text-emerald-600 font-bold">${order.plagiarismScore}</strong></span>
          <span class="text-blue-700 font-bold">${order.downloadStatus}</span>
        </div>
      </div>
    `;
  }

  // Fallback Modern Clean Widget
  return `
    <div class="relative rounded-3xl bg-white border border-slate-200/90 shadow-[0_12px_40px_-8px_rgba(0,55,176,0.09)] p-6 sm:p-8 flex flex-col gap-6 overflow-hidden">
      <!-- Subtle Blue Glow -->
      <div class="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/[0.08] rounded-full blur-3xl pointer-events-none"></div>

      <div class="flex items-center justify-between pb-3 border-b border-slate-100 relative z-10">
        <div class="flex items-center gap-2.5">
          <span class="relative flex h-2.5 w-2.5">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span class="font-mono text-xs text-slate-800 font-extrabold uppercase tracking-wider">Engineering SLA Radar</span>
        </div>
        <span class="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold">
          Online 24/7
        </span>
      </div>

      <div class="flex flex-col gap-1.5 relative z-10">
        <h3 class="text-xl font-black text-slate-900 tracking-tight">
          Standar Mutu &amp; Verifikasi
        </h3>
        <p class="text-xs text-slate-600 leading-relaxed">
          Setiap proyek akademik melewati 3 lapisan filter mutu ketat sebelum diserahkan:
        </p>
      </div>

      <div class="flex flex-col gap-2.5 relative z-10">
        <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
          <div class="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
            <span class="material-symbols-outlined text-lg">spellcheck</span>
          </div>
          <div class="flex flex-col">
            <span class="text-xs font-bold text-slate-900">Turnitin No Repository</span>
            <span class="text-[11px] text-slate-500">Similiarity terjamin aman &lt; 15%</span>
          </div>
        </div>

        <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
          <div class="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
            <span class="material-symbols-outlined text-lg">code</span>
          </div>
          <div class="flex flex-col">
            <span class="text-xs font-bold text-slate-900">Validasi Algoritma &amp; Source Code</span>
            <span class="text-[11px] text-slate-500">Clean code &amp; penjelasan per modul</span>
          </div>
        </div>

        <div class="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
          <div class="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
            <span class="material-symbols-outlined text-lg">verified</span>
          </div>
          <div class="flex flex-col">
            <span class="text-xs font-bold text-slate-900">Garansi Revisi Tanpa Biaya</span>
            <span class="text-[11px] text-slate-500">Pendampingan materi sampai di-acc dosen</span>
          </div>
        </div>
      </div>

      <div class="pt-2 flex items-center justify-between text-xs text-slate-600 border-t border-slate-100 relative z-10">
        <span class="font-mono text-[11px]">Respon Admin: &lt; 5 Menit</span>
        <a 
          href="https://wa.me/6285150754258?text=Halo%20Admin%20JoKelar%2C%20saya%20ingin%20konsultasi%20pengerjaan%20tugas." 
          target="_blank" 
          rel="noopener noreferrer" 
          class="text-blue-700 font-bold hover:text-blue-800 flex items-center gap-1 transition-colors"
        >
          <span>Konsultasi Bebas</span>
          <span class="material-symbols-outlined text-sm">north_east</span>
        </a>
      </div>
    </div>
  `;
}

export function render() {
  const hasFeatured = Array.isArray(activeFeaturedServices) && activeFeaturedServices.length > 0;
  const hasTestimonials = Array.isArray(activeTestimonials) && activeTestimonials.length > 0;

  return `
    <div class="w-full flex flex-col items-center">
      
      <!-- HERO SECTION: ASYMMETRIC BENTO GRID -->
      <section class="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-16 md:py-20">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <!-- Hero Headline & Core CTA (7 cols) -->
          <div class="lg:col-span-7 flex flex-col gap-6 reveal">
            
            <!-- Live Badge Tag -->
            <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 w-fit shadow-xs">
              <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              <span class="text-xs font-mono font-bold uppercase tracking-widest text-blue-700">
                Next-Gen Academic Engineering
              </span>
            </div>

            <!-- Big Display Headline -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
              Tuntaskan tugas kuliah, <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">tanpa kompromi.</span>
            </h1>

            <p class="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Platform asistensi pengerjaan coding, olah data statistik, dan telaah ilmiah berintegritas tinggi. Bebas plagiasi, tepat deadline, dan didampingi mentor berpengalaman.
            </p>

            <!-- Buttons -->
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#catalog" 
                class="px-7 py-3.5 rounded-full bg-[#0037b0] hover:bg-blue-800 text-white font-extrabold text-sm tracking-wide transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,55,176,0.3)] flex items-center gap-2"
              >
                <span>Eksplorasi Katalog</span>
                <span class="material-symbols-outlined text-lg">arrow_forward</span>
              </a>

              <a 
                href="https://wa.me/6285150754258?text=Halo%20Admin%20JoKelar%2C%20saya%20ingin%20konsultasi%20pengerjaan%20tugas." 
                target="_blank" 
                rel="noopener noreferrer" 
                class="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-bold text-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md flex items-center gap-2"
              >
                <span class="material-symbols-outlined text-lg text-amber-500">forum</span>
                <span>Tanya Admin WA</span>
              </a>
            </div>

            <!-- Trust Pills -->
            <div class="flex flex-wrap items-center gap-6 pt-4 text-xs font-mono text-slate-600 font-semibold">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-emerald-600 text-base">verified</span>
                <span>Turnitin &lt; 15%</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-blue-600 text-base">lock</span>
                <span>Kerahasiaan 100%</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-amber-500 text-base">refresh</span>
                <span>Garansi Revisi</span>
              </div>
            </div>

          </div>

          <!-- Hero Widget Card (5 cols) -->
          <div class="lg:col-span-5 reveal delay-100">
            ${renderHeroSideCard(activeHeroOrder)}
          </div>

        </div>
      </section>

      <!-- METRIC STRIP: CLEAN WHITE BENTO NUMBERS -->
      <section class="w-full border-y border-slate-200 bg-white/80 py-10 relative">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div class="flex flex-col items-center gap-1 reveal">
              <span class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">2.500+</span>
              <span class="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">Proyek Terselesaikan</span>
            </div>

            <div class="flex flex-col items-center gap-1 reveal delay-100">
              <span class="text-3xl sm:text-4xl font-black text-blue-700 tracking-tight">99.4%</span>
              <span class="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">Tingkat Kelulusan</span>
            </div>

            <div class="flex flex-col items-center gap-1 reveal delay-200">
              <span class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">50+</span>
              <span class="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">Spesialis Akademik</span>
            </div>

            <div class="flex flex-col items-center gap-1 reveal delay-300">
              <span class="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight">&lt; 5 Mnt</span>
              <span class="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">Respon SLA</span>
            </div>

          </div>
        </div>
      </section>

      <!-- VALUE PILLARS: ASYMMETRICAL BENTO BOX -->
      <section class="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-24">
        
        <div class="flex flex-col items-center text-center gap-3 max-w-2xl mx-auto mb-16 reveal">
          <span class="text-xs font-mono font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">Integritas &amp; Presisi</span>
          <h2 class="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Kenapa Memilih JoKelar?</h2>
          <p class="text-sm text-slate-600 leading-relaxed">
            Menghilangkan kecemasan mahasiswa dengan sistem pengerjaan transparan, akuntabel, dan bebas duplikasi.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <!-- Box 1 (7 cols) -->
          <div class="md:col-span-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] p-8 flex flex-col justify-between gap-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 relative overflow-hidden reveal">
            <div class="absolute -top-10 -right-10 w-44 h-44 bg-blue-500/[0.06] rounded-full blur-3xl pointer-events-none"></div>
            
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <span class="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <span class="font-mono text-xs px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-bold">Turnitin No-Repo</span>
            </div>

            <div class="flex flex-col gap-2">
              <h3 class="text-2xl font-black text-slate-900 tracking-tight">Murni Parafrase &amp; Anti-Plagiasi</h3>
              <p class="text-sm text-slate-600 leading-relaxed max-w-md">
                Setiap dokumen ditulis manual berdasarkan tinjauan literatur primer. Disertai laporan uji similarity Turnitin resmi di bawah 15% tanpa menyimpan ke repository kampus.
              </p>
            </div>

            <div class="pt-4 border-t border-slate-100 flex items-center gap-4 text-xs font-mono text-slate-700 font-medium">
              <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> 100% Original Content</span>
              <span class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full bg-blue-600"></span> Valid Scopus &amp; Sinta</span>
            </div>
          </div>

          <!-- Box 2 (5 cols) -->
          <div class="md:col-span-5 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] p-8 flex flex-col justify-between gap-6 hover:border-amber-400 hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 relative overflow-hidden reveal delay-100">
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-amber-400/[0.08] rounded-full blur-3xl pointer-events-none"></div>

            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                <span class="material-symbols-outlined text-2xl">bolt</span>
              </div>
              <span class="font-mono text-xs px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 font-bold">Express Delivery</span>
            </div>

            <div class="flex flex-col gap-2">
              <h3 class="text-2xl font-black text-slate-900 tracking-tight">Mode Kilat 24 Jam</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Kondisi darurat sebelum tengah malam? Kami alokasikan tim dedicated untuk menyelesaikan tugas praktikum dan laporan dalam hitungan jam.
              </p>
            </div>

            <div class="pt-4 border-t border-slate-100 text-xs font-mono text-amber-700 font-bold">
              Tepat Waktu atau Garansi Ulang
            </div>
          </div>

          <!-- Box 3 (5 cols) -->
          <div class="md:col-span-5 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] p-8 flex flex-col justify-between gap-6 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 relative overflow-hidden reveal">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                <span class="material-symbols-outlined text-2xl">autorenew</span>
              </div>
              <span class="font-mono text-xs px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">Warranty Active</span>
            </div>

            <div class="flex flex-col gap-2">
              <h3 class="text-xl font-black text-slate-900 tracking-tight">Garansi Revisi Tuntas</h3>
              <p class="text-sm text-slate-600 leading-relaxed">
                Catatan revisi dari dosen pembimbing kami tangani tanpa pungutan biaya tambahan hingga hasil akhir disetujui.
              </p>
            </div>

            <div class="pt-4 border-t border-slate-100 text-xs font-mono text-emerald-700 font-bold">
              Pendampingan Sampai Nilai Keluar
            </div>
          </div>

          <!-- Box 4 (7 cols) -->
          <div class="md:col-span-7 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] p-8 flex flex-col justify-between gap-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 relative overflow-hidden reveal delay-100">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <span class="material-symbols-outlined text-2xl">payments</span>
              </div>
              <span class="font-mono text-xs px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-bold">Split Payment 50:50</span>
            </div>

            <div class="flex flex-col gap-2">
              <h3 class="text-2xl font-black text-slate-900 tracking-tight">Struktur Biaya Transparan</h3>
              <p class="text-sm text-slate-600 leading-relaxed max-w-lg">
                Tidak ada biaya tersembunyi. Skema pembayaran bertahap (DP 50% diawal dan pelunasan setelah Anda memeriksa preview hasil pengerjaan).
              </p>
            </div>

            <div class="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-600">
              <span class="font-medium">Transfer Bank &amp; E-Wallet Lengkap</span>
              <a href="#catalog" class="text-blue-700 font-bold hover:underline flex items-center gap-1">
                <span>Cek Daftar Tarif</span>
                <span class="material-symbols-outlined text-sm">east</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      <!-- 7 STEPS WORKFLOW: CLEAN WHITE HIGH-TECH STRIP -->
      <section class="w-full bg-slate-50/80 border-y border-slate-200 py-16 md:py-20 relative">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-10">
          
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div class="flex flex-col gap-2">
              <span class="text-xs font-mono font-bold uppercase tracking-widest text-blue-700">SOP Pengerjaan</span>
              <h2 class="text-3xl font-black text-slate-900 tracking-tight">Alur Kerja 7 Langkah Terstruktur</h2>
            </div>
            <a href="#catalog" class="text-xs font-mono font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1 transition-colors">
              <span>Rincian Panduan di Catalog</span>
              <span class="material-symbols-outlined text-sm">north_east</span>
            </a>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            
            <div class="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 flex flex-col items-center text-center gap-2 hover:border-blue-400 transition-all">
              <span class="w-7 h-7 rounded-lg bg-blue-700 text-white font-mono text-xs font-bold flex items-center justify-center">01</span>
              <h4 class="text-xs font-bold text-slate-900">Konsultasi</h4>
              <p class="text-[11px] text-slate-500">Kirim rubrik &amp; deadline</p>
            </div>

            <div class="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 flex flex-col items-center text-center gap-2 hover:border-blue-400 transition-all">
              <span class="w-7 h-7 rounded-lg bg-blue-700 text-white font-mono text-xs font-bold flex items-center justify-center">02</span>
              <h4 class="text-xs font-bold text-slate-900">Kesepakatan</h4>
              <p class="text-[11px] text-slate-500">Estimasi &amp; scope kerja</p>
            </div>

            <div class="rounded-2xl bg-white border border-amber-300 shadow-xs p-4 flex flex-col items-center text-center gap-2 hover:border-amber-400 transition-all">
              <span class="w-7 h-7 rounded-lg bg-[#fed01b] text-slate-950 font-mono text-xs font-bold flex items-center justify-center">03</span>
              <h4 class="text-xs font-bold text-slate-900">DP 50%</h4>
              <p class="text-[11px] text-slate-500">Slot antrean aktif</p>
            </div>

            <div class="rounded-2xl bg-white border border-slate-200 shadow-xs p-4 flex flex-col items-center text-center gap-2 hover:border-blue-400 transition-all">
              <span class="w-7 h-7 rounded-lg bg-blue-700 text-white font-mono text-xs font-bold flex items-center justify-center">04</span>
              <h4 class="text-xs font-bold text-slate-900">Pengerjaan</h4>
              <p class="text-[11px] text-slate-500">Dikerjakan pakar bidang</p>
            </div>

            <div class="rounded-2xl bg-white border border-amber-300 shadow-xs p-4 flex flex-col items-center text-center gap-2 hover:border-amber-400 transition-all">
              <span class="w-7 h-7 rounded-lg bg-[#fed01b] text-slate-950 font-mono text-xs font-bold flex items-center justify-center">05</span>
              <h4 class="text-xs font-bold text-slate-900">Preview</h4>
              <p class="text-[11px] text-slate-500">Cek sampel &amp; Turnitin</p>
            </div>

            <div class="rounded-2xl bg-white border border-blue-300 shadow-xs p-4 flex flex-col items-center text-center gap-2 hover:border-blue-400 transition-all">
              <span class="w-7 h-7 rounded-lg bg-blue-700 text-white font-mono text-xs font-bold flex items-center justify-center">06</span>
              <h4 class="text-xs font-bold text-slate-900">Pelunasan</h4>
              <p class="text-[11px] text-slate-500">Serah terima file master</p>
            </div>

            <div class="rounded-2xl bg-white border border-emerald-300 shadow-xs p-4 flex flex-col items-center text-center gap-2 hover:border-emerald-400 transition-all">
              <span class="w-7 h-7 rounded-lg bg-emerald-600 text-white font-mono text-xs font-bold flex items-center justify-center">07</span>
              <h4 class="text-xs font-bold text-slate-900">Garansi</h4>
              <p class="text-[11px] text-slate-500">Revisi &amp; tanya-jawab</p>
            </div>

          </div>

        </div>
      </section>

      <!-- FEATURED SERVICES SECTION -->
      <section class="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 md:py-24">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div class="flex flex-col gap-2">
            <span class="text-xs font-mono font-bold uppercase tracking-widest text-blue-700">Kategori Prioritas</span>
            <h2 class="text-3xl font-black text-slate-900 tracking-tight">Layanan Populer Mahasiswa</h2>
          </div>
          <a href="#catalog" class="text-sm font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1.5 transition-colors">
            <span>Lihat Semua di Katalog</span>
            <span class="material-symbols-outlined text-base">east</span>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${
            hasFeatured
              ? activeFeaturedServices.map(renderFeaturedServiceCard).join('')
              : `
                <div class="rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-7 flex flex-col justify-between gap-6 hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                  <div class="flex flex-col gap-4">
                    <div class="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                      <span class="material-symbols-outlined text-2xl">terminal</span>
                    </div>
                    <div class="flex flex-col gap-1.5">
                      <div class="flex items-center justify-between">
                        <h3 class="text-xl font-bold text-slate-900">Web &amp; Software Dev</h3>
                        <span class="text-[11px] font-mono text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 font-bold">Coding</span>
                      </div>
                      <p class="text-xs text-slate-600 leading-relaxed">
                        Full-stack web, dashboard analitik, REST API, implementasi AI / Machine Learning, dan perbaikan bug kode.
                      </p>
                    </div>
                  </div>
                  <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-sm font-black text-blue-700">Mulai Rp 99.000</span>
                    <a href="#catalog" class="text-xs font-bold text-blue-700 hover:underline">Detail</a>
                  </div>
                </div>

                <div class="rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-7 flex flex-col justify-between gap-6 hover:border-amber-400 hover:shadow-lg transition-all duration-300">
                  <div class="flex flex-col gap-4">
                    <div class="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                      <span class="material-symbols-outlined text-2xl">analytics</span>
                    </div>
                    <div class="flex flex-col gap-1.5">
                      <div class="flex items-center justify-between">
                        <h3 class="text-xl font-bold text-slate-900">Olah Data &amp; Statistika</h3>
                        <span class="text-[11px] font-mono text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 font-bold">Data</span>
                      </div>
                      <p class="text-xs text-slate-600 leading-relaxed">
                        Analisis SPSS, SmartPLS, SEM-AMOS, regresi berganda, visualisasi diagram, dan narasi interpretasi Bab 4.
                      </p>
                    </div>
                  </div>
                  <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-sm font-black text-blue-700">Mulai Rp 149.000</span>
                    <a href="#catalog" class="text-xs font-bold text-blue-700 hover:underline">Detail</a>
                  </div>
                </div>

                <div class="rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-7 flex flex-col justify-between gap-6 hover:border-emerald-400 hover:shadow-lg transition-all duration-300">
                  <div class="flex flex-col gap-4">
                    <div class="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                      <span class="material-symbols-outlined text-2xl">description</span>
                    </div>
                    <div class="flex flex-col gap-1.5">
                      <div class="flex items-center justify-between">
                        <h3 class="text-xl font-bold text-slate-900">Karya Tulis &amp; Skripsi</h3>
                        <span class="text-[11px] font-mono text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bold">Ilmiah</span>
                      </div>
                      <p class="text-xs text-slate-600 leading-relaxed">
                        Makalah komprehensif, proposal skripsi, kajian literatur, dan parafrase Turnitin anti-plagiasi terjamin.
                      </p>
                    </div>
                  </div>
                  <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span class="text-sm font-black text-blue-700">Mulai Rp 75.000</span>
                    <a href="#catalog" class="text-xs font-bold text-blue-700 hover:underline">Detail</a>
                  </div>
                </div>
              `
          }
        </div>
      </section>

      <!-- TESTIMONIALS SECTION -->
      <section class="w-full bg-white border-t border-slate-200 py-20 relative">
        <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div class="flex flex-col items-center text-center gap-2 max-w-xl mx-auto mb-14">
            <span class="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">Ulasan Nyata</span>
            <h2 class="text-3xl font-black text-slate-900 tracking-tight">Apa Kata Mahasiswa?</h2>
            <p class="text-sm text-slate-600">
              Ulasan terverifikasi dari mahasiswa yang telah mempercayakan tugas kuliahnya.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${
              hasTestimonials
                ? activeTestimonials.map(renderTestimonialCard).join('')
                : `
                  <div class="rounded-3xl bg-slate-50/70 border border-slate-200 p-6 flex flex-col justify-between gap-4">
                    <div class="flex flex-col gap-3">
                      <div class="flex text-amber-500 text-sm">
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                      </div>
                      <p class="text-sm text-slate-700 italic">
                        "Sidang skripsi sistem informasi dapat nilai A. Kode backend rapi banget dan mentor sabar pas ngajarin modul penjelasannya."
                      </p>
                    </div>
                    <div class="flex items-center gap-3 pt-3 border-t border-slate-200/60">
                      <div class="w-9 h-9 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center">RP</div>
                      <div class="flex flex-col">
                        <span class="text-xs font-bold text-slate-900">R. Pratama</span>
                        <span class="text-[11px] font-mono text-slate-500">Teknik Informatika</span>
                      </div>
                    </div>
                  </div>

                  <div class="rounded-3xl bg-slate-50/70 border border-slate-200 p-6 flex flex-col justify-between gap-4">
                    <div class="flex flex-col gap-3">
                      <div class="flex text-amber-500 text-sm">
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                      </div>
                      <p class="text-sm text-slate-700 italic">
                        "Olah data SmartPLS yang tadinya bikin pusing selama sebulan kelar dalam hitungan hari, lengkap sama narasi Bab 4 siap pakai!"
                      </p>
                    </div>
                    <div class="flex items-center gap-3 pt-3 border-t border-slate-200/60">
                      <div class="w-9 h-9 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center">NW</div>
                      <div class="flex flex-col">
                        <span class="text-xs font-bold text-slate-900">N. Wijaya</span>
                        <span class="text-[11px] font-mono text-slate-500">Manajemen Bisnis</span>
                      </div>
                    </div>
                  </div>

                  <div class="rounded-3xl bg-slate-50/70 border border-slate-200 p-6 flex flex-col justify-between gap-4">
                    <div class="flex flex-col gap-3">
                      <div class="flex text-amber-500 text-sm">
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                      </div>
                      <p class="text-sm text-slate-700 italic">
                        "Turnitin langsung dicek di depan mata 6%, gak ada repot revisi ke dosen penguji. Sangat profesional dan privasi aman."
                      </p>
                    </div>
                    <div class="flex items-center gap-3 pt-3 border-t border-slate-200/60">
                      <div class="w-9 h-9 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">AS</div>
                      <div class="flex flex-col">
                        <span class="text-xs font-bold text-slate-900">A. Saputra</span>
                        <span class="text-[11px] font-mono text-slate-500">Fakultas Hukum</span>
                      </div>
                    </div>
                  </div>
                `
            }
          </div>
        </div>
      </section>

      <!-- BOTTOM CALL TO ACTION BANNER -->
      <section class="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-20">
        <div class="relative rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 border border-blue-700/60 p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl overflow-hidden">
          <div class="absolute -top-24 -left-24 w-72 h-72 bg-white/[0.08] rounded-full blur-3xl pointer-events-none"></div>

          <div class="flex flex-col gap-3 max-w-xl relative z-10 text-white">
            <span class="text-xs font-mono font-bold uppercase tracking-widest text-amber-300">Solusi Tuntas 24/7</span>
            <h2 class="text-3xl sm:text-4xl font-black text-white tracking-tight">Siap Selesaikan Tugasmu Sekarang?</h2>
            <p class="text-sm text-blue-100 leading-relaxed">
              Konsultasikan kendala tugas kuliahmu tanpa dipungut biaya. Admin kami akan segera memberikan estimasi waktu dan biaya terbaik.
            </p>
          </div>

          <div class="flex flex-col sm:flex-row items-center gap-3 relative z-10 w-full sm:w-auto">
            <a 
              href="https://wa.me/6285150754258?text=Halo%20Admin%20JoKelar%2C%20saya%20ingin%20konsultasi%20pengerjaan%20tugas." 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-full sm:w-auto px-8 py-4 rounded-full bg-[#fed01b] hover:bg-[#ffd633] text-slate-950 font-black text-sm uppercase tracking-wider transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(254,208,27,0.4)] flex items-center justify-center gap-2 border border-amber-300"
            >
              <span class="material-symbols-outlined text-xl">chat</span>
              <span>Hubungi Admin WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  `;
}
