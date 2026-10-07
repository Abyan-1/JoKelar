/**
 * JoKelar — Beranda (Home) Page
 */

export function render() {
  return `
    <div class="flex flex-col w-full">
      <!-- Top Ticker Bar -->
      <div class="w-full bg-secondary-container text-on-secondary-fixed py-2 overflow-hidden select-none">
        <div class="flex items-center space-x-8 text-label-badge font-label-badge uppercase tracking-wider animate-pulse justify-center">
          <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">bolt</span> Express 24 Jam</span>
          <span class="opacity-40">•</span>
          <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">verified_user</span> Lolos Turnitin 100%</span>
          <span class="opacity-40">•</span>
          <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">support_agent</span> Admin Siaga 24/7</span>
          <span class="opacity-40">•</span>
          <span class="hidden md:flex items-center gap-1"><span class="material-symbols-outlined text-sm">star</span> Rating 4.9/5.0</span>
        </div>
      </div>

      <!-- Hero Section -->
      <section class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <!-- Left Column -->
          <div class="lg:col-span-7 flex flex-col gap-space-md reveal-left">
            <div class="inline-flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-high rounded-full w-fit">
              <span class="inline-block w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
              <span class="font-label-badge text-label-badge text-on-surface uppercase tracking-wider">#1 Asisten Tugas Akademik</span>
            </div>
            <h1 class="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight leading-tight">
              Tugas Menumpuk? <br/>
              <span class="text-primary-container">Serahkan ke JoKelar,</span> <br/>
              <span class="bg-secondary-container px-2 rounded-lg text-on-surface inline-block">Beres Tanpa Drama!</span>
            </h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Makalah, coding, olah data, hingga skripsi — jaminan revisi tuntas &amp; kerahasiaan 100%.
            </p>
            <!-- CTA Buttons -->
            <div class="flex flex-wrap items-center gap-space-md pt-space-xs">
              <a class="group inline-flex items-center gap-space-xs px-space-xl py-space-md bg-primary text-on-primary font-headline-sm text-headline-sm rounded-xl transition-all duration-200 hover:bg-secondary-container hover:text-on-secondary-fixed shadow-md hover:shadow-xl active:scale-95" data-path="katalog-tugas" href="#katalog-tugas">
                <span>Lihat Katalog</span>
                <span class="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>
              <a class="inline-flex items-center gap-space-xs px-space-lg py-space-md bg-surface-container text-on-surface font-headline-sm text-headline-sm rounded-xl transition-all duration-200 hover:bg-surface-container-highest shadow-sm hover:shadow-md active:scale-95" href="https://wa.me/message/RUK4IFU7KE4YK1" rel="noopener noreferrer" target="_blank">
                <span class="material-symbols-outlined text-primary">chat</span>
                <span>Chat WhatsApp</span>
              </a>
            </div>
            <!-- Trust Mini Badges -->
            <div class="pt-space-sm flex flex-wrap items-center gap-space-sm">
              <div class="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-xl">
                <span class="material-symbols-outlined text-primary text-lg">bolt</span>
                <span class="font-label-code text-label-code text-on-surface font-semibold">Cepat &amp; Tepat</span>
              </div>
              <div class="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-xl">
                <span class="material-symbols-outlined text-primary text-lg">lock</span>
                <span class="font-label-code text-label-code text-on-surface font-semibold">100% Rahasia</span>
              </div>
              <div class="flex items-center gap-space-xs bg-surface-container-low px-space-sm py-space-xs rounded-xl">
                <span class="material-symbols-outlined text-primary text-lg">school</span>
                <span class="font-label-code text-label-code text-on-surface font-semibold">Asistensi Ahli</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Mockup Card -->
          <div class="lg:col-span-5 relative reveal-right">
            <!-- Floating Sticker 1 -->
            <div class="absolute -top-6 -right-4 z-20 bg-secondary-container text-on-secondary-fixed p-space-sm rounded-xl shadow-lg flex items-center gap-space-xs transform rotate-6 transition-transform hover:rotate-0">
              <span class="material-symbols-outlined text-2xl font-bold">verified</span>
              <div class="flex flex-col">
                <span class="font-label-badge text-label-badge uppercase leading-none">Target</span>
                <span class="font-headline-sm text-headline-sm font-extrabold leading-none">Grade A+</span>
              </div>
            </div>
            <!-- Floating Sticker 2 -->
            <div class="absolute -bottom-6 -left-6 z-20 bg-surface-container-lowest text-on-surface px-space-md py-space-sm rounded-xl shadow-xl flex items-center gap-space-sm transform -rotate-3 transition-transform hover:rotate-0">
              <div class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary font-bold">
                <span class="material-symbols-outlined text-base">check_circle</span>
              </div>
              <div>
                <div class="font-label-code text-label-code font-bold text-on-surface">Similarity 4%</div>
                <div class="font-body-sm text-body-sm text-on-surface-variant">Lolos Turnitin</div>
              </div>
            </div>
            <!-- Main Card -->
            <div class="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-xl relative overflow-hidden flex flex-col gap-space-md">
              <div class="flex items-center justify-between bg-surface-container-low p-space-sm rounded-lg">
                <div class="flex items-center gap-space-xs">
                  <span class="w-3 h-3 rounded-full bg-error"></span>
                  <span class="w-3 h-3 rounded-full bg-secondary-container"></span>
                  <span class="w-3 h-3 rounded-full bg-primary-container"></span>
                  <span class="font-label-code text-label-code text-on-surface ml-space-xs font-semibold">ID: #JK-9942</span>
                </div>
                <span class="bg-primary text-on-primary font-label-badge text-label-badge px-space-sm py-0.5 rounded-full uppercase">Express</span>
              </div>
              <div class="flex flex-col gap-space-xs">
                <div class="flex items-center justify-between">
                  <span class="font-label-badge text-label-badge text-on-surface-variant uppercase">Topik</span>
                  <span class="font-label-code text-label-code text-primary font-bold">Teknik Informatika</span>
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-extrabold">Aplikasi Kasir POS (Python &amp; MySQL)</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Deadline: Besok, 07:00 WIB (Sisa 12 Jam)</p>
              </div>
              <div class="flex flex-col gap-space-xs bg-surface-container-low p-space-sm rounded-lg">
                <div class="flex justify-between items-center font-label-code text-label-code">
                  <span class="text-on-surface font-semibold">Status</span>
                  <span class="text-primary font-bold">100% Selesai</span>
                </div>
                <div class="w-full bg-surface-container-highest h-3 rounded-full overflow-hidden">
                  <div class="bg-primary-container h-full w-full rounded-full transition-all duration-1000"></div>
                </div>
              </div>
              <div class="flex flex-col gap-space-xs font-body-sm text-body-sm">
                <div class="flex items-center gap-space-xs text-on-surface">
                  <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Source Code Clean Architecture</span>
                </div>
                <div class="flex items-center gap-space-xs text-on-surface">
                  <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Laporan 30 Halaman IEEE</span>
                </div>
                <div class="flex items-center gap-space-xs text-on-surface">
                  <span class="material-symbols-outlined text-primary text-lg">check_circle</span>
                  <span>Video Demo &amp; Panduan</span>
                </div>
              </div>
              <div class="flex items-center justify-between pt-space-xs bg-surface-container p-space-sm rounded-lg">
                <div class="flex flex-col">
                  <span class="font-label-badge text-label-badge text-on-surface-variant">Budget</span>
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

      <!-- Stats Strip -->
      <section class="w-full bg-surface-container-low py-space-lg">
        <div class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div class="flex flex-col items-center bg-surface-container-lowest p-space-md rounded-xl shadow-sm reveal reveal-delay-1">
              <span class="font-display-hero text-headline-lg md:text-display-hero text-primary font-black">2.500+</span>
              <span class="font-label-badge text-label-badge text-on-surface uppercase tracking-wider mt-1">Tugas Selesai</span>
            </div>
            <div class="flex flex-col items-center bg-surface-container-lowest p-space-md rounded-xl shadow-sm reveal reveal-delay-2">
              <span class="font-display-hero text-headline-lg md:text-display-hero text-on-surface font-black">99.4%</span>
              <span class="font-label-badge text-label-badge text-on-surface uppercase tracking-wider mt-1">Kepuasan Klien</span>
            </div>
            <div class="flex flex-col items-center bg-surface-container-lowest p-space-md rounded-xl shadow-sm reveal reveal-delay-3">
              <span class="font-display-hero text-headline-lg md:text-display-hero text-primary font-black">50+</span>
              <span class="font-label-badge text-label-badge text-on-surface uppercase tracking-wider mt-1">Mitra Ahli</span>
            </div>
            <div class="flex flex-col items-center bg-surface-container-lowest p-space-md rounded-xl shadow-sm reveal reveal-delay-4">
              <span class="font-display-hero text-headline-lg md:text-display-hero text-on-surface font-black">&lt;15 Mnt</span>
              <span class="font-label-badge text-label-badge text-on-surface uppercase tracking-wider mt-1">Respon Cepat</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Pillars -->
      <section class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div class="flex flex-col items-center text-center gap-space-xs max-w-xl mx-auto mb-space-xl reveal">
          <span class="font-label-badge text-label-badge text-primary uppercase tracking-widest bg-surface-container px-space-sm py-1 rounded-full">Keunggulan</span>
          <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Kenapa Harus JoKelar?</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow group reveal reveal-delay-1">
            <div class="flex flex-col gap-space-sm">
              <div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span class="material-symbols-outlined text-2xl">policy</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Anti-Plagiarisme</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant">Original work, bukti scan Turnitin resmi &lt;15%.</p>
            </div>
            <div class="mt-space-md pt-space-xs flex items-center gap-space-xs text-primary font-label-badge text-label-badge uppercase">
              <span>Garansi Orisinal</span>
              <span class="material-symbols-outlined text-sm">verified</span>
            </div>
          </div>
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow group reveal reveal-delay-2">
            <div class="flex flex-col gap-space-sm">
              <div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span class="material-symbols-outlined text-2xl">speed</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Express 24 Jam</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant">Tim fast-lane siap eksekusi dalam hitungan jam.</p>
            </div>
            <div class="mt-space-md pt-space-xs flex items-center gap-space-xs text-primary font-label-badge text-label-badge uppercase">
              <span>Tepat Waktu</span>
              <span class="material-symbols-outlined text-sm">schedule</span>
            </div>
          </div>
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow group reveal reveal-delay-3">
            <div class="flex flex-col gap-space-sm">
              <div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span class="material-symbols-outlined text-2xl">autorenew</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Revisi Sepuasnya</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant">Revisi gratis tanpa biaya tambahan sampai acc.</p>
            </div>
            <div class="mt-space-md pt-space-xs flex items-center gap-space-xs text-primary font-label-badge text-label-badge uppercase">
              <span>Full Support</span>
              <span class="material-symbols-outlined text-sm">check</span>
            </div>
          </div>
          <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col justify-between hover:shadow-xl transition-shadow group reveal reveal-delay-4">
            <div class="flex flex-col gap-space-sm">
              <div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span class="material-symbols-outlined text-2xl">savings</span>
              </div>
              <h3 class="font-headline-sm text-headline-sm text-on-surface font-bold">Harga Mahasiswa</h3>
              <p class="font-body-sm text-body-sm text-on-surface-variant">Skema DP 30%, bayar lunas setelah selesai.</p>
            </div>
            <div class="mt-space-md pt-space-xs flex items-center gap-space-xs text-primary font-label-badge text-label-badge uppercase">
              <span>DP Fleksibel</span>
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
              <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-xs">3 Langkah Sampai Beres</h2>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md reveal reveal-delay-1">
              <div class="flex items-center justify-between">
                <span class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center font-display-hero text-headline-md text-primary font-extrabold">01</span>
                <span class="material-symbols-outlined text-3xl text-on-surface-variant">send_and_archive</span>
              </div>
              <div class="flex flex-col gap-space-xs">
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-extrabold">Kirim Detail</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Kirim brief tugas &amp; deadline via WhatsApp.</p>
              </div>
              <div class="p-space-sm bg-surface-container-low rounded-lg font-label-code text-label-code text-on-surface flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-sm text-primary">attach_file</span>
                <span>Doc, PDF, Zip, GDrive</span>
              </div>
            </div>
            <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md reveal reveal-delay-2">
              <div class="flex items-center justify-between">
                <span class="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center font-display-hero text-headline-md text-on-secondary-fixed font-extrabold">02</span>
                <span class="material-symbols-outlined text-3xl text-on-surface-variant">handshake</span>
              </div>
              <div class="flex flex-col gap-space-xs">
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-extrabold">Deal &amp; DP</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Harga transparan, bayar DP untuk mulai.</p>
              </div>
              <div class="p-space-sm bg-surface-container-low rounded-lg font-label-code text-label-code text-on-surface flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-sm text-secondary">security</span>
                <span>Garansi Uang Kembali</span>
              </div>
            </div>
            <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md reveal reveal-delay-3">
              <div class="flex items-center justify-between">
                <span class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center font-display-hero text-headline-md text-primary font-extrabold">03</span>
                <span class="material-symbols-outlined text-3xl text-on-surface-variant">workspace_premium</span>
              </div>
              <div class="flex flex-col gap-space-xs">
                <h3 class="font-headline-sm text-headline-sm text-on-surface font-extrabold">Tugas Kelar!</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Terima hasil, revisi gratis sampai puas.</p>
              </div>
              <div class="p-space-sm bg-surface-container-low rounded-lg font-label-code text-label-code text-on-surface flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-sm text-primary">verified</span>
                <span>Rapi, Siap Submit</span>
              </div>
            </div>
          </div>
          <!-- Quick Action -->
          <div class="bg-surface-container-lowest rounded-xl p-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md shadow-sm reveal">
            <div class="flex items-center gap-space-md">
              <div class="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
                <span class="material-symbols-outlined">alarm</span>
              </div>
              <span class="font-headline-sm text-headline-sm text-on-surface font-bold">Deadline &lt; 12 jam?</span>
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
            <span class="font-label-badge text-label-badge text-primary uppercase tracking-widest bg-surface-container px-space-sm py-1 rounded-full">Populer</span>
            <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-space-xs">Layanan Paling Banyak Dipesan</h2>
          </div>
          <a class="font-headline-sm text-headline-sm text-primary hover:text-on-surface transition-colors flex items-center gap-1" data-path="katalog-tugas" href="#katalog-tugas">
            <span>Katalog Lengkap</span>
            <span class="material-symbols-outlined">east</span>
          </a>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <!-- Category 1 -->
          <div class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col reveal reveal-delay-1">
            <div class="h-44 w-full bg-surface-container-high relative overflow-hidden">
              <img class="w-full h-full object-cover" alt="Makalah & Jurnal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFnoeW5xZyBlTYW9GNZA9q_A_8QcUx3CG1dHDhfjmifg9fz9UJvmy_bvlEnNQXIQP_3ehI3HNcgS6bOlLWhLb0u8rh2u4DiSU6PJ7qzpKfM9hzYzQjYjuVXIjtc3jRLIYgCzVP0N_ssEaqiDFgVwuxRjdKwNU5gncnU3ohuO8AjQ38wmqIdehKERiwoms8YKZ4IuTT4QIQuzQMcBB5OT-tCHg6w2kwfNiIbCeyTtCr"/>
              <span class="absolute top-3 left-3 bg-secondary-container text-on-secondary-fixed font-label-badge text-label-badge px-space-sm py-0.5 rounded-full uppercase">Populer</span>
            </div>
            <div class="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
              <h3 class="font-headline-sm text-headline-sm text-on-surface font-extrabold">Makalah, Essay &amp; Jurnal</h3>
              <div class="flex items-center justify-between bg-surface-container-low p-space-sm rounded-lg">
                <div>
                  <span class="font-label-badge text-label-badge text-on-surface-variant">Mulai</span>
                  <div class="font-headline-sm text-headline-sm text-primary font-bold">Rp 45.000</div>
                </div>
                <a class="p-2 bg-surface-container-highest rounded-lg text-on-surface hover:bg-primary hover:text-on-primary transition-colors" data-path="katalog-tugas" href="#katalog-tugas">
                  <span class="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
          <!-- Category 2 -->
          <div class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col reveal reveal-delay-2">
            <div class="h-44 w-full bg-surface-container-high relative overflow-hidden">
              <img class="w-full h-full object-cover" alt="Coding & IT" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOnNHn5OnaM75CSa4QvXrk0Onxhc_XaCMHef9fzFH4nubdHagkiEHkaZjbDiCX_ReCquu1Uh3gHfT3wqol5G8HFLQRolBCbGGqWsEPJpBIxOx_88VsodvdSWP_bHpnvU7XDPB0lTCnw68ASN5mu-rCdlffpa4sPAT6aL0M0EGF8ESU0ntmF2dyKat7jGEnuawazwjWijFC9xOwQnEQWEF3IKVIIlxExISEEkp70aR4"/>
              <span class="absolute top-3 left-3 bg-primary text-on-primary font-label-badge text-label-badge px-space-sm py-0.5 rounded-full uppercase">IT</span>
            </div>
            <div class="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
              <h3 class="font-headline-sm text-headline-sm text-on-surface font-extrabold">Coding, Web &amp; Mobile</h3>
              <div class="flex items-center justify-between bg-surface-container-low p-space-sm rounded-lg">
                <div>
                  <span class="font-label-badge text-label-badge text-on-surface-variant">Mulai</span>
                  <div class="font-headline-sm text-headline-sm text-primary font-bold">Rp 75.000</div>
                </div>
                <a class="p-2 bg-surface-container-highest rounded-lg text-on-surface hover:bg-primary hover:text-on-primary transition-colors" data-path="katalog-tugas" href="#katalog-tugas">
                  <span class="material-symbols-outlined text-lg">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
          <!-- Category 3 -->
          <div class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col reveal reveal-delay-3">
            <div class="h-44 w-full bg-surface-container-high relative overflow-hidden">
              <img class="w-full h-full object-cover" alt="Olah Data & Skripsi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwFtw61nnuUbwLYOS1YRSpUuB7xWmL0k22Rft9w-uBFlNiMOGfWj4nzk7QhE_xevru4u7yZNq2oxwBJjpItk13UClRxYJAR5X-PybVHospT7XJnHHLXhyR0vO34JVkHDJq8Po3SVlML5y2TwiMZilcr1zXZpf-aPw3XQq84REO1NYnBPmLgUw8CROMPlB7EAz5Qk1krWL_jwV1kh-98SDAqTXEHjRqlmLJ6JdaraGK"/>
              <span class="absolute top-3 left-3 bg-surface-container-highest text-primary font-label-badge text-label-badge px-space-sm py-0.5 rounded-full uppercase">Lanjut</span>
            </div>
            <div class="p-space-md flex flex-col flex-1 justify-between gap-space-sm">
              <h3 class="font-headline-sm text-headline-sm text-on-surface font-extrabold">Olah Data &amp; Skripsi</h3>
              <div class="flex items-center justify-between bg-surface-container-low p-space-sm rounded-lg">
                <div>
                  <span class="font-label-badge text-label-badge text-on-surface-variant">Mulai</span>
                  <div class="font-headline-sm text-headline-sm text-primary font-bold">Rp 150.000</div>
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
          <div class="flex flex-col items-center text-center gap-space-xs max-w-xl mx-auto mb-space-xl reveal">
            <span class="font-label-badge text-label-badge text-primary uppercase tracking-widest bg-surface-container px-space-sm py-1 rounded-full">Testimoni</span>
            <h2 class="font-headline-lg text-headline-lg text-on-surface tracking-tight">Kata Mereka yang Sudah Kelar</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-md reveal reveal-delay-1">
              <div class="flex flex-col gap-space-sm">
                <div class="flex items-center text-secondary-container">
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
                <p class="font-body-sm text-body-sm text-on-surface italic">"Praktikum Struktur Data sisa 8 jam, 4 jam kelar lengkap video penjelasan. Dapet A!"</p>
              </div>
              <div class="flex items-center gap-space-sm bg-surface-container-low p-space-sm rounded-lg">
                <div class="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary font-bold text-sm">RA</div>
                <div>
                  <h4 class="font-body-sm text-body-sm text-on-surface font-bold">Rian A.</h4>
                  <p class="font-label-code text-label-code text-on-surface-variant">Ilmu Komputer</p>
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
                <p class="font-body-sm text-body-sm text-on-surface italic">"Bab 4 SmartPLS macet 2 bulan, dibantu JoKelar beres 2 hari. Siap sidang!"</p>
              </div>
              <div class="flex items-center gap-space-sm bg-surface-container-low p-space-sm rounded-lg">
                <div class="w-9 h-9 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed font-bold text-sm">NW</div>
                <div>
                  <h4 class="font-body-sm text-body-sm text-on-surface font-bold">Nadia W.</h4>
                  <p class="font-label-code text-label-code text-on-surface-variant">Manajemen</p>
                </div>
              </div>
            </div>
            <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between gap-space-md reveal reveal-delay-3">
              <div class="flex flex-col gap-space-sm">
                <div class="flex items-center text-secondary-container">
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">star</span>
                </div>
                <p class="font-body-sm text-body-sm text-on-surface italic">"Makalah 25 halaman, Turnitin cuma 6%! Harga ramah, admin responsif."</p>
              </div>
              <div class="flex items-center gap-space-sm bg-surface-container-low p-space-sm rounded-lg">
                <div class="w-9 h-9 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold text-sm">FK</div>
                <div>
                  <h4 class="font-body-sm text-body-sm text-on-surface font-bold">Faris K.</h4>
                  <p class="font-label-code text-label-code text-on-surface-variant">Hukum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Banner -->
      <section class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div class="bg-primary text-on-primary rounded-xl p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-xl shadow-xl relative overflow-hidden reveal-scale">
          <div class="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary-container/30 pointer-events-none"></div>
          <div class="flex flex-col gap-space-sm max-w-md z-10">
            <span class="font-label-badge text-label-badge bg-secondary-container text-on-secondary-fixed px-space-sm py-1 rounded-full w-fit uppercase font-bold">Promo Baru</span>
            <h2 class="font-headline-lg text-headline-lg font-black tracking-tight leading-tight">Jangan Biarkan Tugas Merusak Mentalmu.</h2>
            <div class="flex items-center gap-space-md text-label-code font-label-code text-surface-container-highest">
              <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">lock</span> Rahasia</span>
              <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">replay</span> Garansi Revisi</span>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row gap-space-md z-10 w-full md:w-auto">
            <a class="px-space-xl py-space-md bg-secondary-container text-on-secondary-fixed font-headline-sm text-headline-sm font-black rounded-xl transition-all duration-200 hover:bg-secondary-fixed text-center shadow-md active:scale-95 flex items-center justify-center gap-space-xs" href="https://wa.me/message/RUK4IFU7KE4YK1" rel="noopener noreferrer" target="_blank">
              <span class="material-symbols-outlined">chat</span>
              <span>Order via WhatsApp</span>
            </a>
            <a class="px-space-lg py-space-md bg-surface-container-lowest text-on-surface font-headline-sm text-headline-sm font-bold rounded-xl transition-all duration-200 hover:bg-surface-container-high text-center shadow-md active:scale-95" data-path="katalog-tugas" href="#katalog-tugas">
              Lihat Tarif
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function init() {
  // Animations handled by router
}
