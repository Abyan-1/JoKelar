/**
 * JoKelar — Kontak (Contact) Page
 */

export function render() {
  return `
    <div class="flex flex-col w-full page-enter">
      <!-- Top Trust Marquee Bar -->
      <div class="w-full bg-secondary-container py-space-xs overflow-hidden select-none">
        <div class="flex items-center gap-space-lg text-on-secondary-fixed font-label-badge text-label-badge uppercase tracking-wider animate-ticker px-margin-mobile md:px-margin whitespace-nowrap">
          <span class="flex items-center gap-1 font-bold"><span class="material-symbols-outlined text-sm">verified_user</span> 100% RAHASIA IDENTITAS TERJAMIN</span>
          <span class="text-on-secondary-fixed/50">•</span>
          <span class="flex items-center gap-1 font-bold"><span class="material-symbols-outlined text-sm">bolt</span> RESPON ADMIN &lt; 5 MENIT</span>
          <span class="text-on-secondary-fixed/50">•</span>
          <span class="flex items-center gap-1 font-bold"><span class="material-symbols-outlined text-sm">security</span> REKBER RESMI / QRIS MULTI-BANK</span>
          <span class="text-on-secondary-fixed/50">•</span>
          <span class="flex items-center gap-1 font-bold"><span class="material-symbols-outlined text-sm">schedule</span> SIAP BANTU TUGAS DEADLINE H-2 JAM</span>
          <!-- Duplicate for infinite marquee effect -->
          <span class="text-on-secondary-fixed/50">•</span>
          <span class="flex items-center gap-1 font-bold"><span class="material-symbols-outlined text-sm">verified_user</span> 100% RAHASIA IDENTITAS TERJAMIN</span>
          <span class="text-on-secondary-fixed/50">•</span>
          <span class="flex items-center gap-1 font-bold"><span class="material-symbols-outlined text-sm">bolt</span> RESPON ADMIN &lt; 5 MENIT</span>
        </div>
      </div>

      <!-- Main Container -->
      <div class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <!-- Header Block -->
        <div class="flex flex-col gap-space-sm mb-space-xl relative reveal">
          <div class="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container rounded-xl w-fit">
            <span class="w-2.5 h-2.5 rounded-full bg-secondary-container animate-pulse"></span>
            <span class="font-label-code text-label-code text-primary uppercase">Status Admin: ONLINE (Siaga 24/7)</span>
          </div>
          <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
            <div>
              <h1 class="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight leading-none mb-space-xs">
                Hubungi JoKelar.
              </h1>
              <p class="font-headline-sm text-headline-sm text-on-surface-variant font-medium max-w-2xl">
                Solusi kilat anti-panik tugas kuliah &amp; sekolah. Konsultasikan deadline, hitung estimasi biaya, atau langsung amankan slot pengerjaan.
              </p>
            </div>
            <!-- Operating Hours Pill Indicator -->
            <div class="flex items-center gap-space-sm bg-surface-container-high p-space-sm rounded-xl">
              <div class="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center">
                <span class="material-symbols-outlined text-xl">acute</span>
              </div>
              <div class="flex flex-col">
                <span class="font-label-badge text-label-badge uppercase tracking-wider text-on-surface">Jam Operasional Tim</span>
                <span class="font-label-code text-label-code text-on-surface-variant font-bold">08:00 - 02:00 WIB (UAS/UTS 24 Jam)</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 12-Column Responsive Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          
          <!-- Left Column: Channel Cards (7 Cols on Desktop) -->
          <div class="lg:col-span-7 flex flex-col gap-space-lg reveal-left">
            <!-- 1. WhatsApp Hero Card -->
            <div class="bg-surface-container-lowest rounded-xl p-space-lg shadow-md hover:shadow-xl transition-all relative overflow-hidden group">
              <div class="absolute top-0 right-0 w-32 h-32 bg-secondary-container/20 rounded-bl-full pointer-events-none -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
              <div class="flex items-start justify-between gap-space-md relative z-10 mb-space-md">
                <div class="flex items-center gap-space-sm">
                  <div class="w-14 h-14 rounded-xl bg-secondary-container text-on-secondary-fixed flex items-center justify-center font-bold">
                    <span class="material-symbols-outlined text-3xl">chat</span>
                  </div>
                  <div>
                    <span class="font-label-badge text-label-badge bg-primary text-on-primary px-space-xs py-0.5 rounded-lg inline-block mb-1">
                      Paling Direkomendasikan
                    </span>
                    <h2 class="font-headline-md text-headline-md text-on-surface tracking-tight">WhatsApp Admin Resmi</h2>
                  </div>
                </div>
                <div class="hidden sm:flex flex-col items-end">
                  <span class="font-label-code text-label-code text-primary font-bold">Fast Response</span>
                  <span class="font-label-code text-label-code text-on-surface-variant">&lt; 5 Menit</span>
                </div>
              </div>
              <p class="font-body-md text-body-md text-on-surface-variant mb-space-lg">
                Terhubung langsung dengan koordinator bidang studi. Kirim silabus, panduan modul, atau brief tugas untuk audit &amp; penawaran harga instan tanpa ribet.
              </p>
              <div class="bg-surface-container-low rounded-xl p-space-md mb-space-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
                <div class="flex items-center gap-space-sm">
                  <span class="material-symbols-outlined text-primary text-2xl">call</span>
                  <div>
                    <span class="font-label-badge text-label-badge uppercase text-on-surface-variant block">Nomor WhatsApp Aktif</span>
                    <span class="font-label-code text-label-code text-on-surface font-bold text-lg" id="wa-number">+62 812-3456-7890</span>
                  </div>
                </div>
                <div class="flex items-center gap-1 text-on-surface-variant font-label-code text-label-code bg-surface-container-lowest px-space-sm py-1 rounded-lg w-fit">
                  <span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                  <span>5 Konsultan Siaga</span>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-space-sm">
                <a class="flex-1 py-space-sm px-space-md bg-secondary-container hover:bg-secondary-fixed text-on-secondary-fixed font-label-badge text-label-badge uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-space-xs active:translate-x-0.5 active:translate-y-0.5" href="https://wa.me/message/RUK4IFU7KE4YK1" rel="noopener noreferrer" target="_blank">
                  <span class="material-symbols-outlined text-xl">forum</span>
                  <span>Mulai Chat WhatsApp Sekarang</span>
                </a>
                <button id="copy-btn" class="py-space-sm px-space-md bg-surface-container hover:bg-surface-container-high text-on-surface font-label-badge text-label-badge uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-space-xs">
                  <span class="material-symbols-outlined text-lg">content_copy</span>
                  <span>Salin Nomor</span>
                </button>
              </div>
            </div>

            <!-- 2. Split Social Grid (Instagram & Twitter / X) -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
              <div class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div class="flex items-center justify-between mb-space-sm">
                    <div class="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors">
                      <span class="material-symbols-outlined text-2xl">photo_camera</span>
                    </div>
                    <span class="font-label-badge text-label-badge bg-surface-container px-space-xs py-0.5 rounded-lg text-on-surface-variant">Update Harian</span>
                  </div>
                  <h3 class="font-headline-sm text-headline-sm text-on-surface">Instagram</h3>
                  <p class="font-label-code text-label-code text-primary font-bold mb-space-xs">@jokelar.id</p>
                  <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    Ikuti tips jitu akademik kuliah, voucher diskon bulanan, testimoni nilai A, &amp; update slot joki harian.
                  </p>
                </div>
                <a class="w-full py-space-sm px-space-md bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-badge text-label-badge uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-space-xs" href="https://www.instagram.com/jokelartugas?stkn=MXI0NjgzZzVxcGV5eg==" rel="noopener noreferrer" target="_blank">
                  <span>Kunjungi Instagram</span>
                  <span class="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
              
              <div class="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div class="flex items-center justify-between mb-space-sm">
                    <div class="w-12 h-12 rounded-xl bg-surface-container text-on-surface flex items-center justify-center group-hover:bg-inverse-surface group-hover:text-inverse-on-surface transition-colors">
                      <span class="material-symbols-outlined text-2xl">alternate_email</span>
                    </div>
                    <span class="font-label-badge text-label-badge bg-surface-container px-space-xs py-0.5 rounded-lg text-on-surface-variant">Promo Flash</span>
                  </div>
                  <h3 class="font-headline-sm text-headline-sm text-on-surface">Twitter / X</h3>
                  <p class="font-label-code text-label-code text-primary font-bold mb-space-xs">@jokelar_tugas</p>
                  <p class="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    Diskusi santai, sambat revisi dosen pembimbing, giveaway tugas gratis, &amp; promo kilat deadline mepet.
                  </p>
                </div>
                <a class="w-full py-space-sm px-space-md bg-surface-container hover:bg-inverse-surface hover:text-inverse-on-surface text-on-surface font-label-badge text-label-badge uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-space-xs" href="https://x.com/JoKelarHub" rel="noopener noreferrer" target="_blank">
                  <span>Follow di Twitter / X</span>
                  <span class="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </div>
            </div>

            <!-- Security & Guarantee Trust Banner -->
            <div class="bg-surface-container rounded-xl p-space-md flex flex-col sm:flex-row items-center gap-space-md">
              <div class="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0">
                <span class="material-symbols-outlined text-2xl">lock</span>
              </div>
              <div class="flex flex-col">
                <h4 class="font-headline-sm text-headline-sm text-on-surface">Protokol Keamanan &amp; Kerahasiaan Mahasiswa</h4>
                <p class="font-body-sm text-body-sm text-on-surface-variant">
                  Semua dokumen, identitas NIM, nama kampus, dan file lampiran otomatis di-enkripsi dan dimusnahkan secara berkala setelah masa garansi revisi berakhir.
                </p>
              </div>
            </div>
            
            <!-- Visual Mini Showcase / Mascot Banner -->
            <div class="bg-surface-container-low rounded-xl p-space-lg flex items-center justify-between gap-space-md">
              <div class="flex flex-col max-w-sm">
                <span class="font-label-badge text-label-badge text-primary uppercase font-bold">Motto Kerja JoKelar</span>
                <h3 class="font-headline-md text-headline-md text-on-surface tracking-tight">"Membantu dan Membuat Pekerjaan Kelar Tepat Waktu."</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant mt-space-xs">Didukung lebih dari 150+ master &amp; sarjana terpilih dari universitas top Indonesia.</p>
              </div>
              <div class="hidden md:flex w-28 h-28 rounded-xl bg-surface-container-lowest p-2 shadow-sm flex-col items-center justify-center text-center">
                <span class="material-symbols-outlined text-4xl text-primary mb-1">sentiment_satisfied</span>
                <span class="font-label-code text-label-code text-on-surface font-bold">99.4%</span>
                <span class="font-label-badge text-label-badge text-on-surface-variant text-[10px]">Nilai A/B</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Quick Brief Calculator (5 Cols on Desktop) -->
          <div class="lg:col-span-5 bg-surface-container-lowest rounded-xl p-space-lg shadow-lg relative reveal-right">
            <div class="flex items-center justify-between mb-space-md pb-space-sm bg-surface-container-low -mx-space-lg -mt-space-lg p-space-md rounded-t-xl">
              <div class="flex items-center gap-space-xs">
                <span class="material-symbols-outlined text-primary text-xl">calculate</span>
                <span class="font-headline-sm text-headline-sm text-on-surface">Kalkulator Brief Tugas</span>
              </div>
              <span class="font-label-badge text-label-badge bg-secondary-container text-on-secondary-fixed px-space-xs py-0.5 rounded-lg">
                Direct WA
              </span>
            </div>

            <form id="orderForm" class="flex flex-col gap-space-md">
              <!-- Category Selector -->
              <div class="flex flex-col gap-1">
                <label class="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant">1. Jenjang Pendidikan</label>
                <div class="grid grid-cols-3 gap-2">
                  <label class="cursor-pointer">
                    <input checked="" class="peer sr-only" name="jenjang" type="radio" value="Mahasiswa (S1/D3/S2)"/>
                    <div class="text-center py-2 px-1 bg-surface-container peer-checked:bg-primary peer-checked:text-on-primary text-on-surface rounded-lg font-body-sm text-body-sm transition-all select-none">Mahasiswa</div>
                  </label>
                  <label class="cursor-pointer">
                    <input class="peer sr-only" name="jenjang" type="radio" value="Pelajar (SMA/SMK)"/>
                    <div class="text-center py-2 px-1 bg-surface-container peer-checked:bg-primary peer-checked:text-on-primary text-on-surface rounded-lg font-body-sm text-body-sm transition-all select-none">SMA / SMK</div>
                  </label>
                  <label class="cursor-pointer">
                    <input class="peer sr-only" name="jenjang" type="radio" value="Umum / Profesional"/>
                    <div class="text-center py-2 px-1 bg-surface-container peer-checked:bg-primary peer-checked:text-on-primary text-on-surface rounded-lg font-body-sm text-body-sm transition-all select-none">Umum</div>
                  </label>
                </div>
              </div>

              <!-- Task Type -->
              <div class="flex flex-col gap-1">
                <label class="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant" for="taskType">2. Jenis Tugas</label>
                <div class="relative">
                  <select class="w-full bg-surface-container py-2.5 px-space-md rounded-xl font-body-sm text-body-sm text-on-surface appearance-none outline-none focus:ring-2 focus:ring-primary" id="taskType">
                    <option value="Makalah / Essay / Paper Ilmiah">Makalah / Essay / Paper Ilmiah</option>
                    <option value="Skripsi / Tesis / Proposal Penelitian">Skripsi / Tesis / Proposal Penelitian</option>
                    <option value="Coding / IT / Web Dev / Database">Coding / IT / Web Dev / Database</option>
                    <option value="Olah Data (SPSS / SEM / SmartPLS / Excel)">Olah Data (SPSS / SEM / SmartPLS / Excel)</option>
                    <option value="Presentasi PPT / Slide Pitch Deck">Presentasi PPT / Slide Pitch Deck</option>
                    <option value="Review Jurnal / Bibliografi">Review Jurnal / Bibliografi</option>
                    <option value="Tugas Matkul Khusus / Hitungan / Kasus">Tugas Matkul Khusus / Hitungan / Kasus</option>
                  </select>
                  <span class="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant pointer-events-none">expand_more</span>
                </div>
              </div>

              <!-- Deadline Date & Urgency Picker -->
              <div class="flex flex-col gap-1">
                <label class="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant">3. Tenggat Waktu (Deadline)</label>
                <div class="grid grid-cols-2 gap-2">
                  <input class="bg-surface-container py-2 px-space-sm rounded-xl font-body-sm text-body-sm text-on-surface outline-none focus:ring-2 focus:ring-primary" id="deadlineDate" required="" type="date"/>
                  <select class="bg-surface-container py-2 px-space-sm rounded-xl font-body-sm text-body-sm text-on-surface outline-none focus:ring-2 focus:ring-primary" id="urgencySpeed">
                    <option value="Santai (> 3 Hari)">Santai (&gt; 3 Hari)</option>
                    <option value="Standar (24 - 48 Jam)">Standar (24 - 48 Jam)</option>
                    <option value="⚡ Express Kilat (H-6 s/d 12 Jam)">⚡ Express Kilat (H-6 s/d 12 Jam)</option>
                    <option value="🔥 Super Megat (Malam Ini)">🔥 Super Megat (Malam Ini)</option>
                  </select>
                </div>
              </div>

              <!-- Page or Volume Estimation -->
              <div class="grid grid-cols-2 gap-space-sm">
                <div class="flex flex-col gap-1">
                  <label class="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant" for="volumeInput">Jumlah Halaman / File</label>
                  <input class="bg-surface-container py-2 px-space-sm rounded-xl font-body-sm text-body-sm text-on-surface outline-none focus:ring-2 focus:ring-primary" id="volumeInput" placeholder="Contoh: 15 Halaman" type="text"/>
                </div>
                <div class="flex flex-col gap-1">
                  <label class="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant" for="turnitinReq">Target Turnitin</label>
                  <select class="bg-surface-container py-2 px-space-sm rounded-xl font-body-sm text-body-sm text-on-surface outline-none focus:ring-2 focus:ring-primary" id="turnitinReq">
                    <option value="< 20% (Standar Kampus)">&lt; 20% (Standar Kampus)</option>
                    <option value="< 10% (Sangat Ketat)">&lt; 10% (Sangat Ketat)</option>
                    <option value="Tidak Perlu Cek">Tidak Perlu Cek</option>
                  </select>
                </div>
              </div>

              <!-- Detail Brief / Notes -->
              <div class="flex flex-col gap-1">
                <label class="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant" for="taskNotes">4. Catatan Tugas / Link GDrive (Opsional)</label>
                <textarea class="w-full bg-surface-container p-space-sm rounded-xl font-body-sm text-body-sm text-on-surface outline-none focus:ring-2 focus:ring-primary resize-none" id="taskNotes" placeholder="Tuliskan judul, instruksi dosen, format penulisan, atau link file..." rows="3"></textarea>
              </div>

              <!-- Dynamic Estimation Box -->
              <div class="bg-surface-container-high rounded-xl p-space-sm flex items-center justify-between">
                <div class="flex flex-col">
                  <span class="font-label-badge text-label-badge text-on-surface-variant uppercase">Estimasi Penanganan</span>
                  <span class="font-label-code text-label-code text-primary font-bold">Prioritas Konsultan Match</span>
                </div>
                <span class="font-label-badge text-label-badge bg-secondary-container text-on-secondary-fixed px-2 py-1 rounded-lg font-bold">FREE REVISI 100%</span>
              </div>

              <!-- Action Button -->
              <button class="w-full py-space-md px-space-lg bg-secondary-container hover:bg-secondary-fixed text-on-secondary-fixed font-headline-sm text-headline-sm rounded-xl shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-space-sm active:translate-x-0.5 active:translate-y-0.5" type="submit">
                <span class="material-symbols-outlined text-2xl">send</span>
                <span>Kirim Brief ke WhatsApp</span>
              </button>
              <p class="font-label-code text-label-code text-center text-on-surface-variant text-[11px]">
                Format pesan otomatis terisi rapi di WhatsApp. Tim langsung membalas dalam hitungan menit.
              </p>
            </form>
          </div>
        </div>

        <!-- FAQ & Process Strip -->
        <div class="mt-space-xl pt-space-xl">
          <div class="flex flex-col items-center text-center mb-space-lg reveal">
            <span class="font-label-badge text-label-badge uppercase bg-surface-container px-space-sm py-1 rounded-full text-primary font-bold">Transparan &amp; Terpercaya</span>
            <h2 class="font-headline-lg text-headline-lg text-on-surface mt-space-xs">Alur Cepat Pengerjaan di JoKelar</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-space-md">
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between reveal reveal-delay-1">
              <div>
                <div class="w-9 h-9 rounded-lg bg-primary text-on-primary font-headline-sm text-headline-sm flex items-center justify-center font-bold mb-space-sm">1</div>
                <h4 class="font-headline-sm text-headline-sm text-on-surface mb-1">Kirim Materi</h4>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Hubungi WhatsApp admin &amp; lampirkan brief tugas serta tanggal deadline.</p>
              </div>
              <span class="font-label-code text-label-code text-primary mt-space-sm">Step 01 • Estimasi</span>
            </div>
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between reveal reveal-delay-2">
              <div>
                <div class="w-9 h-9 rounded-lg bg-surface-container text-on-surface font-headline-sm text-headline-sm flex items-center justify-center font-bold mb-space-sm">2</div>
                <h4 class="font-headline-sm text-headline-sm text-on-surface mb-1">Deal &amp; DP Aman</h4>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Dapatkan estimasi biaya transparan. Pembayaran aman via QRIS, BCA, Mandiri, atau E-Wallet.</p>
              </div>
              <span class="font-label-code text-label-code text-on-surface-variant mt-space-sm">Step 02 • Verifikasi</span>
            </div>
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between reveal reveal-delay-3">
              <div>
                <div class="w-9 h-9 rounded-lg bg-surface-container text-on-surface font-headline-sm text-headline-sm flex items-center justify-center font-bold mb-space-sm">3</div>
                <h4 class="font-headline-sm text-headline-sm text-on-surface mb-1">Proses Pengerjaan</h4>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Tugas dikerjakan spesialis bidangnya. Laporan progres berkala bisa dipantau langsung.</p>
              </div>
              <span class="font-label-code text-label-code text-on-surface-variant mt-space-sm">Step 03 • Eksekusi</span>
            </div>
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between reveal reveal-delay-4">
              <div>
                <div class="w-9 h-9 rounded-lg bg-secondary-container text-on-secondary-fixed font-headline-sm text-headline-sm flex items-center justify-center font-bold mb-space-sm">4</div>
                <h4 class="font-headline-sm text-headline-sm text-on-surface mb-1">Terima &amp; Garansi</h4>
                <p class="font-body-sm text-body-sm text-on-surface-variant">File selesai tepat waktu berserta report turnitin. Tersedia garansi revisi gratis sampai fix.</p>
              </div>
              <span class="font-label-code text-label-code text-on-secondary-fixed font-bold mt-space-sm">Step 04 • Beres</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function init() {
  // Set default min date for deadline picker to today
  const dateInput = document.getElementById('deadlineDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  // Handle WhatsApp form submission
  const orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const jenjangEl = document.querySelector('input[name="jenjang"]:checked');
      const jenjang = jenjangEl ? jenjangEl.value : 'Mahasiswa';
      const taskType = document.getElementById('taskType').value;
      const deadlineDate = document.getElementById('deadlineDate').value;
      const urgencySpeed = document.getElementById('urgencySpeed').value;
      const volumeInput = document.getElementById('volumeInput').value || '-';
      const turnitinReq = document.getElementById('turnitinReq').value;
      const taskNotes = document.getElementById('taskNotes').value || 'Mohon dibantu konfirmasi ketersediaan slot.';

      const message = 
        `Halo Admin JoKelar, saya ingin konsultasi pengerjaan tugas:%0A%0A` +
        `📚 *Jenjang*: ${encodeURIComponent(jenjang)}%0A` +
        `📝 *Jenis Tugas*: ${encodeURIComponent(taskType)}%0A` +
        `⏱️ *Deadline*: ${encodeURIComponent(deadlineDate)} (${encodeURIComponent(urgencySpeed)})%0A` +
        `📄 *Estimasi Volume*: ${encodeURIComponent(volumeInput)}%0A` +
        `🔍 *Cek Plagiasi*: ${encodeURIComponent(turnitinReq)}%0A` +
        `📌 *Catatan / Keterangan*: ${encodeURIComponent(taskNotes)}%0A%0A` +
        `Mohon estimasi harga dan waktu pengerjaannya. Terima kasih!`;

      const waUrl = `https://wa.me/message/RUK4IFU7KE4YK1`;
      window.open(waUrl, '_blank');
    });
  }

  // Copy number button
  const copyBtn = document.getElementById('copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('+6281234567890');
      alert('Nomor WhatsApp disalin ke clipboard!');
    });
  }
}
