/**
 * JoKelar — Halaman Kontak (Kontak.js)
 * Hanya memuat 4 kanal kontak resmi: WhatsApp, Instagram, X, dan Email,
 * serta alur pengerjaan ringkas dan transparan.
 * Desain minimalis dan modern.
 */

export function render() {
  return `
    <div class="flex flex-col w-full">
      <div class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin pt-space-lg pb-space-xl">
        
        <!-- Header Minimalis -->
        <div class="text-center max-w-2xl mx-auto mb-space-xl flex flex-col items-center gap-space-xs">
          <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container rounded-full">
            <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span class="font-label-badge text-xs uppercase text-primary font-bold tracking-wider">Online 24/7</span>
          </div>
          <h1 class="font-headline-lg text-2xl md:text-4xl text-on-surface tracking-tight font-extrabold">
            Hubungi JoKelar
          </h1>
          <p class="font-body-sm text-sm text-on-surface-variant max-w-md">
            Pilih kanal komunikasi resmi kami di bawah ini untuk konsultasi tugas, tanya estimasi harga, atau diskusi materi.
          </p>
        </div>

        <!-- 4 Kanal Kontak Resmi (Grid Minimalis Modern) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-space-md max-w-4xl mx-auto mb-space-xl">
          
          <!-- 1. WhatsApp -->
          <div class="bg-surface-container-lowest rounded-2xl p-space-lg border-2 border-primary/20 hover:border-primary shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-space-md">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-space-sm">
                <div class="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold">
                  <span class="material-symbols-outlined text-2xl">chat</span>
                </div>
                <div>
                  <span class="font-label-code text-xs text-primary font-bold uppercase tracking-wider">Fast Response</span>
                  <h3 class="font-headline-sm text-lg font-black text-on-surface">WhatsApp</h3>
                </div>
              </div>
              <span class="inline-flex items-center gap-1 text-[11px] font-label-code bg-surface-container text-primary px-2.5 py-1 rounded-full font-semibold">
                <span class="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
                <span>Aktif</span>
              </span>
            </div>
            
            <p class="font-body-sm text-xs text-on-surface-variant leading-relaxed">
              Kanal utama konsultasi langsung dengan admin. Kirimkan soal, silabus, atau deadline tugasmu untuk respon cepat &lt; 5 menit.
            </p>

            <div class="flex items-center gap-2 pt-2 border-t border-surface-container-low">
              <a 
                href="https://wa.me/message/RUK4IFU7KE4YK1" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex-1 py-2.5 px-4 bg-primary text-on-primary hover:bg-primary-container font-label-badge text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-xs"
              >
                <span class="material-symbols-outlined text-base">forum</span>
                <span>Chat WhatsApp</span>
              </a>
              <button 
                data-copy="https://wa.me/message/RUK4IFU7KE4YK1" 
                class="copy-btn p-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl transition-colors"
                title="Salin Link WhatsApp"
                aria-label="Salin Link WhatsApp"
              >
                <span class="material-symbols-outlined text-base pointer-events-none">content_copy</span>
              </button>
            </div>
          </div>

          <!-- 2. Instagram -->
          <div class="bg-surface-container-lowest rounded-2xl p-space-lg border border-outline-variant/30 hover:border-primary/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-space-md">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-space-sm">
                <div class="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center">
                  <span class="material-symbols-outlined text-2xl">photo_camera</span>
                </div>
                <div>
                  <span class="font-label-code text-xs text-on-surface-variant font-medium">@jokelartugas</span>
                  <h3 class="font-headline-sm text-lg font-bold text-on-surface">Instagram</h3>
                </div>
              </div>
              <span class="font-label-code text-xs text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded-md">Official</span>
            </div>

            <p class="font-body-sm text-xs text-on-surface-variant leading-relaxed">
              Ikuti informasi promo tugas, testimoni berkala, edukasi akademik, dan pembaruan layanan JoKelar melalui feed &amp; story.
            </p>

            <div class="flex items-center gap-2 pt-2 border-t border-surface-container-low">
              <a 
                href="https://www.instagram.com/jokelartugas?stkn=MXI0NjgzZzVxcGV5eg==" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex-1 py-2.5 px-4 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-badge text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5"
              >
                <span>Buka Instagram</span>
                <span class="material-symbols-outlined text-sm">open_in_new</span>
              </a>
              <button 
                data-copy="@jokelartugas" 
                class="copy-btn p-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl transition-colors"
                title="Salin Handle Instagram"
                aria-label="Salin Handle Instagram"
              >
                <span class="material-symbols-outlined text-base pointer-events-none">content_copy</span>
              </button>
            </div>
          </div>

          <!-- 3. Twitter / X -->
          <div class="bg-surface-container-lowest rounded-2xl p-space-lg border border-outline-variant/30 hover:border-primary/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-space-md">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-space-sm">
                <div class="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center">
                  <span class="material-symbols-outlined text-2xl">alternate_email</span>
                </div>
                <div>
                  <span class="font-label-code text-xs text-on-surface-variant font-medium">@jokelarhub</span>
                  <h3 class="font-headline-sm text-lg font-bold text-on-surface">Twitter / X</h3>
                </div>
              </div>
              <span class="font-label-code text-xs text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded-md">Community</span>
            </div>

            <p class="font-body-sm text-xs text-on-surface-variant leading-relaxed">
              Tanya jawab santai seputar tips kuliah, skripsi, diskusi tugas, dan update cepat melalui thread di platform X.
            </p>

            <div class="flex items-center gap-2 pt-2 border-t border-surface-container-low">
              <a 
                href="https://x.com/JoKelarHub" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex-1 py-2.5 px-4 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-badge text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5"
              >
                <span>Buka Akun X</span>
                <span class="material-symbols-outlined text-sm">open_in_new</span>
              </a>
              <button 
                data-copy="@jokelarhub" 
                class="copy-btn p-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl transition-colors"
                title="Salin Handle X"
                aria-label="Salin Handle X"
              >
                <span class="material-symbols-outlined text-base pointer-events-none">content_copy</span>
              </button>
            </div>
          </div>

          <!-- 4. Email -->
          <div class="bg-surface-container-lowest rounded-2xl p-space-lg border border-outline-variant/30 hover:border-primary/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between gap-space-md">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-space-sm">
                <div class="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center">
                  <span class="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div>
                  <span class="font-label-code text-xs text-on-surface-variant font-medium">Email Resmi</span>
                  <h3 class="font-headline-sm text-lg font-bold text-on-surface">Email</h3>
                </div>
              </div>
              <span class="font-label-code text-xs text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded-md">Formal</span>
            </div>

            <p class="font-body-sm text-xs text-on-surface-variant leading-relaxed">
              Pengiriman dokumen skala besar, korespondensi institusi, atau kebutuhan kolaborasi akademik: <b class="text-on-surface">jokelartugas@gmail.com</b>
            </p>

            <div class="flex items-center gap-2 pt-2 border-t border-surface-container-low">
              <a 
                href="mailto:jokelartugas@gmail.com" 
                class="flex-1 py-2.5 px-4 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-badge text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5"
              >
                <span>Kirim Email</span>
                <span class="material-symbols-outlined text-sm">send</span>
              </a>
              <button 
                data-copy="jokelartugas@gmail.com" 
                class="copy-btn p-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl transition-colors"
                title="Salin Alamat Email"
                aria-label="Salin Alamat Email"
              >
                <span class="material-symbols-outlined text-base pointer-events-none">content_copy</span>
              </button>
            </div>
          </div>

        </div>

        <!-- Alur Singkat Pemesanan (7 Langkah Ringkas) -->
        <div class="max-w-4xl mx-auto bg-surface-container-low rounded-2xl p-space-lg border border-outline-variant/30">
          <div class="flex items-center justify-between pb-space-sm border-b border-surface-container mb-space-md">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-primary"></span>
              <h3 class="font-headline-sm text-sm md:text-base font-bold text-on-surface">Alur Pengerjaan Setelah Menghubungi Kami</h3>
            </div>
            <a href="#catalog" class="font-label-code text-xs text-primary font-bold hover:underline flex items-center gap-0.5">
              <span>Detail Alur</span>
              <span class="material-symbols-outlined text-xs">arrow_forward</span>
            </a>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 text-center">
            <div class="bg-surface-container-lowest p-2 rounded-xl flex flex-col items-center">
              <span class="w-6 h-6 rounded-md bg-primary text-on-primary font-label-code text-xs font-bold flex items-center justify-center mb-1">1</span>
              <span class="font-headline-sm text-xs font-bold text-on-surface">Konsultasi</span>
              <span class="text-[10px] text-on-surface-variant mt-0.5">Kirim detail</span>
            </div>
            <div class="bg-surface-container-lowest p-2 rounded-xl flex flex-col items-center">
              <span class="w-6 h-6 rounded-md bg-primary text-on-primary font-label-code text-xs font-bold flex items-center justify-center mb-1">2</span>
              <span class="font-headline-sm text-xs font-bold text-on-surface">Deal</span>
              <span class="text-[10px] text-on-surface-variant mt-0.5">Estimasi harga</span>
            </div>
            <div class="bg-surface-container-lowest p-2 rounded-xl flex flex-col items-center">
              <span class="w-6 h-6 rounded-md bg-secondary-container text-on-secondary-fixed font-label-code text-xs font-bold flex items-center justify-center mb-1">3</span>
              <span class="font-headline-sm text-xs font-bold text-on-surface">DP 50%</span>
              <span class="text-[10px] text-on-surface-variant mt-0.5">Masuk antrean</span>
            </div>
            <div class="bg-surface-container-lowest p-2 rounded-xl flex flex-col items-center">
              <span class="w-6 h-6 rounded-md bg-primary text-on-primary font-label-code text-xs font-bold flex items-center justify-center mb-1">4</span>
              <span class="font-headline-sm text-xs font-bold text-on-surface">Pengerjaan</span>
              <span class="text-[10px] text-on-surface-variant mt-0.5">Sesuai keahlian</span>
            </div>
            <div class="bg-surface-container-lowest p-2 rounded-xl flex flex-col items-center">
              <span class="w-6 h-6 rounded-md bg-secondary-container text-on-secondary-fixed font-label-code text-xs font-bold flex items-center justify-center mb-1">5</span>
              <span class="font-headline-sm text-xs font-bold text-on-surface">Revisi</span>
              <span class="text-[10px] text-on-surface-variant mt-0.5">Maks 2x cek</span>
            </div>
            <div class="bg-surface-container-lowest p-2 rounded-xl flex flex-col items-center">
              <span class="w-6 h-6 rounded-md bg-secondary-container text-on-secondary-fixed font-label-code text-xs font-bold flex items-center justify-center mb-1">6</span>
              <span class="font-headline-sm text-xs font-bold text-on-surface">Pelunasan</span>
              <span class="text-[10px] text-on-surface-variant mt-0.5">File final</span>
            </div>
            <div class="bg-surface-container-lowest p-2 rounded-xl flex flex-col items-center">
              <span class="w-6 h-6 rounded-md bg-primary text-on-primary font-label-code text-xs font-bold flex items-center justify-center mb-1">7</span>
              <span class="font-headline-sm text-xs font-bold text-on-surface">Garansi</span>
              <span class="text-[10px] text-on-surface-variant mt-0.5">Garansi 7 hari</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Toast Feedback (Copy Notice) -->
      <div id="copyToast" class="fixed bottom-6 right-6 z-50 hidden bg-inverse-surface text-inverse-on-surface px-4 py-2.5 rounded-xl text-xs font-label-code shadow-lg items-center gap-2 transition-all">
        <span class="material-symbols-outlined text-base text-secondary-container">check_circle</span>
        <span id="copyToastText">Berhasil disalin ke clipboard!</span>
      </div>
    </div>
  `;
}

export function init() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('copyToast');
  const toastText = document.getElementById('copyToastText');
  let timeoutId = null;

  function showToast(msg) {
    if (!toast) return;
    if (toastText) toastText.textContent = msg;
    toast.classList.remove('hidden');
    toast.classList.add('flex');

    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      toast.classList.add('hidden');
      toast.classList.remove('flex');
    }, 2200);
  }

  copyBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        showToast(`Tersalin: ${textToCopy}`);
      } catch (err) {
        // Fallback for clipboard
        const input = document.createElement('input');
        input.value = textToCopy;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        showToast(`Tersalin: ${textToCopy}`);
      }
    });
  });
}
