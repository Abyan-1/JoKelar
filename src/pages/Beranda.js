/**
 * JoKelar — Beranda (Home) Page
 */

export function render() {
  return `
    <div class="flex flex-col w-full">
      <!-- Top Decorative Ticker / Marquee Bar -->
      <div class="w-full bg-secondary-container text-on-secondary-fixed py-2 overflow-hidden select-none">
        <div class="flex items-center space-x-8 text-label-badge font-label-badge uppercase tracking-wider animate-pulse justify-center">
          <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">bolt</span> Pengerjaan Express 24 Jam Tersedia</span>
          <span class="opacity-40">•</span>
          <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">verified_user</span> Jaminan Lolos Turnitin &amp; Kerahasiaan 100%</span>
          <span class="opacity-40">•</span>
          <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">support_agent</span> Admin Aktif Siap Bantu Deadline Subuh</span>
          <span class="opacity-40">•</span>
          <span class="hidden md:flex items-center gap-1"><span class="material-symbols-outlined text-sm">star</span> Rating Rata-rata 4.9/5.0 Mahasiswa se-Indonesia</span>
        </div>
      </div>

      <!-- Hero Section -->
      <section class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <!-- Left Column: Copy & CTAs -->
          <div class="lg:col-span-7 flex flex-col gap-space-md reveal-left">
            <div class="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-high rounded-full w-fit">
              <span class="inline-block w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
              <span class="font-label-badge text-label-badge text-on-surface uppercase tracking-wider">#1 Asisten Akademik &amp; Tugas Cepat</span>
            </div>
            <h1 class="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight leading-tight">
              Tugas Menumpuk? <br/>
              <span class="text-primary-container">Serahkan ke JoKelar,</span> <br/>
              <span class="bg-secondary-container px-2 rounded-lg text-on-surface inline-block">Beres Tanpa Drama!</span>
            </h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              Solusi terpercaya untuk Mahasiswa, Pelajar, dan Profesional. Mulai dari makalah, esai, coding program, hingga olah statistik skripsi dengan jaminan revisi tuntas dan kerahasiaan identitas 100%.
            </p>
            <!-- CTA Buttons -->
            <div class="flex flex-wrap items-center gap-space-md pt-space-xs">
              <a class="group inline-flex items-center gap-space-xs px-space-xl py-space-md bg-primary text-on-primary font-headline-sm text-headline-sm rounded-xl transition-all duration-200 hover:bg-secondary-container hover:text-on-secondary-fixed shadow-md hover:shadow-xl active:scale-95" data-path="katalog-tugas" href="#katalog-tugas">
                <span>Lihat Katalog Tugas</span>
                <span class="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
              <a class="inline-flex items-center gap-space-xs px-space-lg py-space-md bg-surface-container text-on-surface font-headline-sm text-headline-sm rounded-xl transition-all duration-200 hover:bg-surface-container-highest shadow-sm hover:shadow-md active:scale-95" href="https://wa.me/message/RUK4IFU7KE4YK1" rel="noopener noreferrer" target="_blank">
                <span class="material-symbols-outlined text-primary">chat</span>
                <span>Konsultasi Gratis via WA</span>
              </a>
            </div>
            <!-- Trust Mini Badges -->
            <div class="pt-space-md flex flex-wrap items-center gap-space-md">
              <div class="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-xl">
                <span class="material-symbols-outlined text-primary text-lg">bolt</span>
                <span class="font-label-code text-label-code text-on-surface font-semibold">⚡ Cepat &amp; Tepat</span>
              </div>
              <div class="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-xl">
                <span class="material-symbols-outlined text-primary text-lg">lock</span>
                <span class="font-label-code text-label-code text-on-surface font-semibold">🔒 100% Rahasia</span>
              </div>
              <div class="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-xl">
                <span class="material-symbols-outlined text-primary text-lg">school</span>
                <span class="font-label-code text-label-code text-on-surface font-semibold">🎓 Asistensi Ahli</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive Neo Mockup Card -->
          <div class="lg:col-span-5 relative reveal-right">
            <!-- Floating Accent Sticker 1 -->
            <div class="absolute -top-6 -right-4 z-20 bg-secondary-container text-on-secondary-fixed p-space-sm rounded-xl shadow-lg flex items-center gap-space-xs transform rotate-6 transition-transform hover:rotate-0">
              <span class="material-symbols-outlined text-2xl font-bold">verified</span>
              <div class="flex flex-col">
                <span class="font-label-badge text-label-badge uppercase leading-none">Target Hasil</span>
                <span class="font-headline-sm text-headline-sm font-extrabold leading-none">Grade A+ Pasti</span>
              </div>
            </div>
            <!-- Floating Accent Sticker 2 -->
            <div class="absolute -bottom-6 -left-6 z-20 bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl shadow-xl flex items-center gap-space-sm transform -rotate-3 transition-transform hover:rotate-0">
              <div class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold">
                <span class="material-symbols-outlined text-base">check_circle</span>
              </div>
              <div>
                <div class="font-label-code text-label-code font-bold text-on-surface">Similiarity 4%</div>
                <div class="font-body-sm text-body-sm text-on-surface-variant">Lolos Turnitin Resmi</div>
              </div>
            </div>
            <!-- Main Task Status Mockup Card -->
            <div class="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-xl relative overflow-hidden flex flex-col gap-space-md">
              <div class="flex items-center justify-between bg-surface-container-low p-space-sm rounded-lg">
                <div class="flex items-center gap-space-xs">
                  <span class="w-3 h-3 rounded-full bg-error"></span>
                  <span class="w-3 h-3 rounded-full bg-secondary-container"></span>
                  <span class="w-3 h-3 rounded-full bg-primary-container"></span>
                  <span class="font-label-code text-label-code text-on-surface ml-space-xs font-semibold">ID: #JK-9942</span>
                </div>
                <span class="bg-primary text-on-primary font-label-badge text-label-badge px-space-sm py-0.5 rounded-full uppercase">Priority Express</span>
              </div>
              <div class="flex flex-col gap-space-xs">
                <div class="flex items-center justify-between">
                  <span class="font-label-badge text-label-badge text-on-surface-variant uppercase">Mata Kuliah / Topik</span>
                  <span class="font-label-code text-label-code text-primary font-bold">Teknik Informatika</span>
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-extrabold">Aplikasi Kasir POS (Python &amp; MySQL) + Dokumentasi Laporan Lengkap</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Tenggat Waktu: Besok Pagi, 07:00 WIB (Sisa 12 Jam)</p>
              </div>
              <div class="flex flex-col gap-space-xs bg-surface-container-low p-space-sm rounded-lg">
                <div class="flex justify-between items-center font-label-code text-label-code">
                  <span class="text-on-surface font-semibold">Status Pengerjaan</span>
                  <span class="text-primary font-bold">100% Selesai &amp; Teruji</span>
                </div>
                <div class="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden">
                  <div class="bg-primary-container h-full w-full rounded-full transition-all duration-1000"></div>
                </div>
              </div>
              <div class="flex flex-col gap-space-xs font-body-sm text-body-sm">
                <div class="flex items-center gap-space-xs text-on-surface">
                  <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Source Code &amp; Clean Architecture Checked</span>
                </div>
                <div class="flex items-center gap-space-xs text-on-surface">
                  <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Laporan 30 Halaman Standar IEEE &amp; Daftar Pustaka</span>
                </div>
                <div class="flex items-center gap-space-xs text-on-surface">
                  <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Video Demonstrasi &amp; Panduan Menjalankan Script</span>
                </div>
              </div>
              <div class="flex items-center justify-between pt-space-xs bg-surface-container p-space-sm rounded-lg">
                <div class="flex flex-col">
                  <span class="font-label-badge text-label-badge text-on-surface-variant">Estimasi Budget</span>
                  <span class="font-headline-sm text-headline-sm text-on-surface font-extrabold">Rp 120.000</span>
                </div>
                <button class="px-space-md py-space-xs bg-secondary-container text-on-secondary-fixed font-label-badge text-label-badge uppercase tracking-wider rounded-lg shadow-sm font-bold flex items-center gap-1">
                  <span>Ambil Slot</span>
                  <span class="material-symbols-outlined text-sm">trending_flat</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quick Numbers & Stats Strip -->
      <section class="w-full bg-surface-container-low py-space-lg">
        <div class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-space-md text-center">
            <div class="flex flex-col items-center bg-surface-container-lowest p-space-md rounded-xl shadow-sm reveal reveal-delay-1">
              <span class="font-display-hero text-headline-lg md:text-display-hero text-primary font-black">2.500+</span>
              <span class="font-label-badge text-label-badge text-on-surface uppercase tracking-wider mt-1">Tugas Selesai</span>
              <span class="font-body-sm text-body-sm text-on-surface-variant">Skripsi, Coding, Esai</span>
            </div>
            <div class="flex flex-col items-center bg-surface-container-lowest p-space-md rounded-xl shadow-sm reveal reveal-delay-2">
              <span class="font-display-hero text-headline-lg md:text-display-hero text-on-surface font-black">99.4%</span>
              <span class="font-label-badge text-label-badge text-on-surface uppercase tracking-wider mt-1">Tingkat Kepuasan</span>
              <span class="font-body-sm text-body-sm text-on-surface-variant">Review Bintang 5 Klien</span>
            </div>
            <div class="flex flex-col items-center bg-surface-container-lowest p-space-md rounded-xl shadow-sm reveal reveal-delay-3">
              <span class="font-display-hero text-headline-lg md:text-display-hero text-primary font-black">50+</span>
              <span class="font-label-badge text-label-badge text-on-surface uppercase tracking-wider mt-1">Mitra Ahli &amp; Dosen</span>
              <span class="font-body-sm text-body-sm text-on-surface-variant">Lulusan Kampus Top Indo</span>
            </div>
            <div class="flex flex-col items-center bg-surface-container-lowest p-space-md rounded-xl shadow-sm reveal reveal-delay-4">
              <span class="font-display-hero text-headline-lg md:text-display-hero text-on-surface font-black">&lt;15 Mnt</span>
              <span class="font-label-badge text-label-badge text-on-surface uppercase tracking-wider mt-1">Respon Cepat</span>
              <span class="font-body-sm text-body-sm text-on-surface-variant">Konsultasi Siap 24/7</span>
            </div>
          </div>
        </div>
      </section>

      <!-- 4 Key Pillars / Trust Highlights -->
      <section class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div class="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto mb-space-xl reveal">
          <span class="font-label-badge text-label-badge text-primary uppercase tracking-widest bg-surface-container px-space-sm py-1 rounded-full">Keunggulan Utama</span>
          <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Kenapa Harus JoKelar? Bebas Pusing, Pasti Lulus</h2>
          <p class="font-body-md text-body-md text-on-surface-variant">Kami memadukan standar pengerjaan akademis tingkat tinggi dengan kecepatan kerja yang siap menyelamatkan deadline mepetmu.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow group reveal reveal-delay-1">
            <div class="flex flex-col gap-space-sm">
              <div class="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span class="material-symbols-outlined text-3xl">policy</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Anti-Plagiarisme &amp; Turnitin Aman</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant">Setiap pengerjaan dimulai dari nol (original work) bebas copas. Dilengkapi bukti screenshot hasil scan Turnitin resmi dengan similarity di bawah 15%.</p>
            </div>
            <div class="mt-space-md pt-space-xs flex items-center gap-space-xs text-primary font-label-badge text-label-badge uppercase">
              <span>Garansi Originalitas</span>
              <span class="material-symbols-outlined text-sm">verified</span>
            </div>
          </div>
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow group reveal reveal-delay-2">
            <div class="flex flex-col gap-space-sm">
              <div class="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span class="material-symbols-outlined text-3xl">speed</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Pengerjaan Kilat Express 24 Jam</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant">Deadline besok pagi atau tugas mendadak dosen killer? Kami memiliki tim khusus fast-lane yang siap mengeksekusi tugas dalam hitungan jam.</p>
            </div>
            <div class="mt-space-md pt-space-xs flex items-center gap-space-xs text-primary font-label-badge text-label-badge uppercase">
              <span>Tepat Waktu</span>
              <span class="material-symbols-outlined text-sm">schedule</span>
            </div>
          </div>
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow group reveal reveal-delay-3">
            <div class="flex flex-col gap-space-sm">
              <div class="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span class="material-symbols-outlined text-3xl">autorenew</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Garansi Revisi Sepuasnya</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant">Dosen memberikan catatan perbaikan? Tenang! Kami sediakan pendampingan revisi tanpa biaya tambahan hingga tugas diterima dengan nilai terbaik.</p>
            </div>
            <div class="mt-space-md pt-space-xs flex items-center gap-space-xs text-primary font-label-badge text-label-badge uppercase">
              <span>Pendampingan Penuh</span>
              <span class="material-symbols-outlined text-sm">check</span>
            </div>
          </div>
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow group reveal reveal-delay-4">
            <div class="flex flex-col gap-space-sm">
              <div class="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span class="material-symbols-outlined text-3xl">savings</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Harga Ramah Kantong Mahasiswa</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant">Bisa negosiasi transparan dengan skema DP awal terjangkau (Mulai 30%). Pelunasan hanya dilakukan setelah tugas terbukti selesai dan lolos preview.</p>
            </div>
            <div class="mt-space-md pt-space-xs flex items-center gap-space-xs text-primary font-label-badge text-label-badge uppercase">
              <span>Skema DP Fleksibel</span>
              <span class="material-symbols-outlined text-sm">payments</span>
            </div>
          </div>
        </div>
      </section>

      <!-- How It Works -->
      <section class="w-full bg-surface-container py-space-xl">
        <div class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-space-xl">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md reveal">
            <div>
              <span class="font-label-badge text-label-badge text-primary uppercase tracking-widest bg-surface-container-highest px-space-sm py-1 rounded-full">Alur Singkat</span>
              <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-xs">Hanya 3 Langkah Praktis Sampai Tugasmu Beres</h2>
            </div>
            <p class="font-body-md text-body-md text-on-surface-variant max-w-md">Proses pemesanan serba instan tanpa birokrasi ribet, langsung terhubung dengan admin spesialis materi.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md relative overflow-hidden reveal reveal-delay-1">
              <div class="flex items-center justify-between">
                <span class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center font-display-hero text-headline-md text-primary font-extrabold">01</span>
                <span class="material-symbols-outlined text-3xl text-on-surface-variant">send_and_archive</span>
              </div>
              <div class="flex flex-col gap-space-xs">
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-extrabold">Kirim Detail &amp; Deadline</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Kirimkan brief tugas, soal ujian, file panduan praktikum, atau judul skripsi beserta tenggat waktu pengumpulan ke WhatsApp kami.</p>
              </div>
              <div class="p-space-sm bg-surface-container-low rounded-lg font-label-code text-label-code text-on-surface flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-sm text-primary">attach_file</span>
                <span>Doc, PDF, Zip, Gambar, Link GDrive</span>
              </div>
            </div>
            <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md relative overflow-hidden reveal reveal-delay-2">
              <div class="flex items-center justify-between">
                <span class="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center font-display-hero text-headline-md text-on-secondary-fixed font-extrabold">02</span>
                <span class="material-symbols-outlined text-3xl text-on-surface-variant">handshake</span>
              </div>
              <div class="flex flex-col gap-space-xs">
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-extrabold">Negosiasi &amp; DP Aman</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Admin memberikan kalkulasi harga bersahabat dan memilihkan mitra pengerja terbaik. Setujui kesepakatan dan bayar DP untuk mulai pengerjaan.</p>
              </div>
              <div class="p-space-sm bg-surface-container-low rounded-lg font-label-code text-label-code text-on-surface flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-sm text-secondary">security</span>
                <span>Garansi Uang Kembali Jika Batal</span>
              </div>
            </div>
            <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md relative overflow-hidden reveal reveal-delay-3">
              <div class="flex items-center justify-between">
                <span class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center font-display-hero text-headline-md text-primary font-extrabold">03</span>
                <span class="material-symbols-outlined text-3xl text-on-surface-variant">workspace_premium</span>
              </div>
              <div class="flex flex-col gap-space-xs">
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-extrabold">Tugas Kelar &amp; Nilai Maksimal!</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Tugas kami serahkan tepat waktu. Periksa hasilnya, minta revisi bila diperlukan, dan kumpulkan tugas ke dosen dengan percaya diri!</p>
              </div>
              <div class="p-space-sm bg-surface-container-low rounded-lg font-label-code text-label-code text-on-surface flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-sm text-primary">verified</span>
                <span>Format Rapi, Siap Submit</span>
              </div>
            </div>
          </div>
          <!-- Quick Action Prompt -->
          <div class="bg-surface-container-lowest rounded-xl p-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md shadow-sm reveal">
            <div class="flex items-center gap-space-md">
              <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
                <span class="material-symbols-outlined">alarm</span>
              </div>
              <div class="flex flex-col">
                <span class="font-headline-sm text-headline-sm text-on-surface font-bold">Punya deadline dalam kurun &lt; 12 jam ke depan?</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant">Hubungi tim siaga JoKelar sekarang juga untuk slot fast-track.</span>
              </div>
            </div>
            <a class="px-space-lg py-space-sm bg-primary text-on-primary font-label-badge text-label-badge uppercase tracking-wider rounded-xl transition-all hover:bg-secondary-container hover:text-on-secondary-fixed whitespace-nowrap" href="https://wa.me/message/RUK4IFU7KE4YK1" rel="noopener noreferrer" target="_blank">
              Hubungi Admin Kilat
            </a>
          </div>
        </div>
      </section>

      <!-- Popular Categories -->
      <section class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl reveal">
          <div>
            <span class="font-label-badge text-label-badge text-primary uppercase tracking-widest bg-surface-container px-space-sm py-1 rounded-full">Katalog Populer</span>
            <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-xs">Layanan yang Paling Banyak Dipesan</h2>
          </div>
          <a class="font-headline-sm text-headline-sm text-primary hover:text-on-surface transition-colors flex items-center gap-1" data-path="katalog-tugas" href="#katalog-tugas">
            <span>Buka Katalog Lengkap</span>
            <span class="material-symbols-outlined">east</span>
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          <!-- Category 1 -->
          <div class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col reveal reveal-delay-1">
            <div class="h-48 w-full bg-surface-container-high relative overflow-hidden">
              <img class="w-full h-full object-cover" alt="Makalah & Jurnal Ilmiah" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFnoeW5xZyBlTYW9GNZA9q_A_8QcUx3CG1dHDhfjmifg9fz9UJvmy_bvlEnNQXIQP_3ehI3HNcgS6bOlLWhLb0u8rh2u4DiSU6PJ7qzpKfM9hzYzQjYjuVXIjtc3jRLIYgCzVP0N_ssEaqiDFgVwuxRjdKwNU5gncnU3ohuO8AjQ38wmqIdehKERiwoms8YKZ4IuTT4QIQuzQMcBB5OT-tCHg6w2kwfNiIbCeyTtCr"/>
              <span class="absolute top-3 left-3 bg-secondary-container text-on-secondary-fixed font-label-badge text-label-badge px-space-sm py-0.5 rounded-full uppercase">Paling Diminati</span>
            </div>
            <div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
              <div class="flex flex-col gap-space-xs">
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-extrabold">Makalah, Essay &amp; Jurnal Ilmiah</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Penulisan terstruktur lengkap dengan referensi Mendeley/Zotero, abstrak bilingual, dan template sesuai format kampus (APA, Harvard, IEEE).</p>
              </div>
              <div class="flex items-center justify-between pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
                <div>
                  <span class="font-label-badge text-label-badge text-on-surface-variant">Mulai Dari</span>
                  <div class="font-headline-sm text-headline-sm text-primary font-bold">Rp 45.000 <span class="text-xs font-normal text-on-surface-variant">/tugas</span></div>
                </div>
                <a class="p-2 bg-surface-container-highest rounded-lg text-on-surface hover:bg-primary hover:text-on-primary transition-colors" data-path="katalog-tugas" href="#katalog-tugas">
                  <span class="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
          <!-- Category 2 -->
          <div class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col reveal reveal-delay-2">
            <div class="h-48 w-full bg-surface-container-high relative overflow-hidden">
              <img class="w-full h-full object-cover" alt="Coding & IT" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOnNHn5OnaM75CSa4QvXrk0Onxhc_XaCMHef9fzFH4nubdHagkiEHkaZjbDiCX_ReCquu1Uh3gHfT3wqol5G8HFLQRolBCbGGqWsEPJpBIxOx_88VsodvdSWP_bHpnvU7XDPB0lTCnw68ASN5mu-rCdlffpa4sPAT6aL0M0EGF8ESU0ntmF2dyKat7jGEnuawazwjWijFC9xOwQnEQWEF3IKVIIlxExISEEkp70aR4"/>
              <span class="absolute top-3 left-3 bg-primary text-on-primary font-label-badge text-label-badge px-space-sm py-0.5 rounded-full uppercase">Praktikum IT</span>
            </div>
            <div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
              <div class="flex flex-col gap-space-xs">
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-extrabold">Tugas Coding, Web &amp; Mobile App</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Pengerjaan script Python, C++, Java, PHP Laravel, React, SQL Database, hingga AI machine learning lengkap dengan komentar kode dan tutorial run.</p>
              </div>
              <div class="flex items-center justify-between pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
                <div>
                  <span class="font-label-badge text-label-badge text-on-surface-variant">Mulai Dari</span>
                  <div class="font-headline-sm text-headline-sm text-primary font-bold">Rp 75.000 <span class="text-xs font-normal text-on-surface-variant">/modul</span></div>
                </div>
                <a class="p-2 bg-surface-container-highest rounded-lg text-on-surface hover:bg-primary hover:text-on-primary transition-colors" data-path="katalog-tugas" href="#katalog-tugas">
                  <span class="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
          <!-- Category 3 -->
          <div class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col reveal reveal-delay-3">
            <div class="h-48 w-full bg-surface-container-high relative overflow-hidden">
              <img class="w-full h-full object-cover" alt="Olah Data & Skripsi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwFtw61nnuUbwLYOS1YRSpUuB7xWmL0k22Rft9w-uBFlNiMOGfWj4nzk7QhE_xevru4u7yZNq2oxwBJjpItk13UClRxYJAR5X-PybVHospT7XJnHHLXhyR0vO34JVkHDJq8Po3SVlML5y2TwiMZilcr1zXZpf-aPw3XQq84REO1NYnBPmLgUw8CROMPlB7EAz5Qk1krWL_jwV1kh-98SDAqTXEHjRqlmLJ6JdaraGK"/>
              <span class="absolute top-3 left-3 bg-surface-container-highest text-primary font-label-badge text-label-badge px-space-sm py-0.5 rounded-full uppercase">Tingkat Lanjut</span>
            </div>
            <div class="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
              <div class="flex flex-col gap-space-xs">
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-extrabold">Olah Data SPSS, SEM-PLS &amp; Bab 4 Skripsi</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Uji validitas, reliabilitas, regresi berganda, SmartPLS, AMOS, Stata, serta pembuatan narasi interpretasi hasil uji untuk Bab 4 Skripsi dan Tesis.</p>
              </div>
              <div class="flex items-center justify-between pt-space-sm bg-surface-container-low p-space-sm rounded-lg">
                <div>
                  <span class="font-label-badge text-label-badge text-on-surface-variant">Mulai Dari</span>
                  <div class="font-headline-sm text-headline-sm text-primary font-bold">Rp 150.000 <span class="text-xs font-normal text-on-surface-variant">/dataset</span></div>
                </div>
                <a class="p-2 bg-surface-container-highest rounded-lg text-on-surface hover:bg-primary hover:text-on-primary transition-colors" data-path="katalog-tugas" href="#katalog-tugas">
                  <span class="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials -->
      <section class="w-full bg-surface-container-low py-space-xl">
        <div class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          <div class="flex flex-col items-center text-center gap-space-xs max-w-2xl mx-auto mb-space-xl reveal">
            <span class="font-label-badge text-label-badge text-primary uppercase tracking-widest bg-surface-container px-space-sm py-1 rounded-full">Testimoni Klien</span>
            <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Apa Kata Mahasiswa yang Udah Kelar Tugasnya?</h2>
            <p class="font-body-md text-body-md text-on-surface-variant">Identitas disamarkan demi menjaga etika dan privasi akademik 100%.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
            <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-md reveal reveal-delay-1">
              <div class="flex flex-col gap-space-sm">
                <div class="flex items-center text-secondary-container">
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
                <p class="font-body-md text-body-md text-on-surface italic">"Gila sih! Praktikum Struktur Data sisa 8 jam lagi deadline, saya bingung algoritma sorting-nya error terus. Minta tolong JoKelar, 4 jam beres lengkap video penjelasan kodingannya. Dapet A dari aslab!"</p>
              </div>
              <div class="flex items-center gap-space-sm pt-space-xs bg-surface-container-low p-space-sm rounded-lg">
                <div class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold">RA</div>
                <div>
                  <h4 class="font-headline-sm text-body-md text-on-surface font-bold">Rian A.</h4>
                  <p class="font-label-code text-label-code text-on-surface-variant">S1 Ilmu Komputer, Kampus Depok</p>
                </div>
              </div>
            </div>
            <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-md reveal reveal-delay-2">
              <div class="flex flex-col gap-space-sm">
                <div class="flex items-center text-secondary-container">
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
                <p class="font-body-md text-body-md text-on-surface italic">"Urusan Bab 4 olah data SmartPLS macet hampir 2 bulan karena data kuesioner nggak normal. Dibantu sama mentor statistika JoKelar, beres dalam 2 hari plus dibimbing sampai paham buat sidang skripsi."</p>
              </div>
              <div class="flex items-center gap-space-sm pt-space-xs bg-surface-container-low p-space-sm rounded-lg">
                <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed font-bold">NW</div>
                <div>
                  <h4 class="font-headline-sm text-body-md text-on-surface font-bold">Nadia W.</h4>
                  <p class="font-label-code text-label-code text-on-surface-variant">S1 Manajemen, Universitas di Bandung</p>
                </div>
              </div>
            </div>
            <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-md reveal reveal-delay-3">
              <div class="flex items-center text-secondary-container">
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
              </div>
              <p class="font-body-md text-body-md text-on-surface italic">"Makalah Hukum Internasional 25 halaman dengan referensi jurnal Scopus. Dicek Turnitin cuma 6% similarity! Harga beneran ramah kantong mahasiswa dan adminnya ramah banget diajak diskusi malam-malam."</p>
              <div class="flex items-center gap-space-sm pt-space-xs bg-surface-container-low p-space-sm rounded-lg">
                <div class="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold">FK</div>
                <div>
                  <h4 class="font-headline-sm text-body-md text-on-surface font-bold">Faris K.</h4>
                  <p class="font-label-code text-label-code text-on-surface-variant">S1 Hukum, Universitas di Yogyakarta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Banner -->
      <section class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div class="bg-primary text-on-primary rounded-xl p-space-xl md:p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-xl shadow-xl relative overflow-hidden reveal-scale">
          <div class="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary-container/30 pointer-events-none"></div>
          <div class="flex flex-col gap-space-sm max-w-xl z-10">
            <span class="font-label-badge text-label-badge bg-secondary-container text-on-secondary-fixed px-space-sm py-1 rounded-full w-fit uppercase font-bold">Tidur Nyenyak Sekarang</span>
            <h2 class="font-headline-lg text-headline-lg font-black tracking-tight leading-tight">Jangan Biarkan Tugas Merusak Kesehatan Mentalmu.</h2>
            <p class="font-body-md text-body-md text-primary-fixed max-w-lg">Kirim brief tugasmu ke WhatsApp sekarang, dapatkan penawaran diskon hingga 20% untuk order tugas pertamamu di JoKelar!</p>
            <div class="flex items-center gap-space-md pt-space-xs text-label-code font-label-code text-surface-container-highest">
              <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">lock</span> Kerahasiaan Terjamin</span>
              <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">replay</span> Garansi Revisi</span>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-space-md z-10 w-full md:w-auto">
            <a class="px-space-xl py-space-md bg-secondary-container text-on-secondary-fixed font-headline-sm text-headline-sm font-black rounded-xl transition-all duration-200 hover:bg-secondary-fixed text-center shadow-md active:scale-95 flex items-center justify-center gap-space-xs" href="https://wa.me/message/RUK4IFU7KE4YK1" rel="noopener noreferrer" target="_blank">
              <span class="material-symbols-outlined">chat</span>
              <span>Order via WhatsApp</span>
            </a>
            <a class="px-space-lg py-space-md bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm font-bold rounded-xl transition-all duration-200 hover:bg-surface-container-high text-center shadow-md active:scale-95" data-path="katalog-tugas" href="#katalog-tugas">
              Lihat Daftar Tarif
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function init() {
  // No additional JS needed for Beranda — animations handled by router
}
