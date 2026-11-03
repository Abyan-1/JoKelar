/**
 * JoKelar — Halaman Kontak (Kontak.js)
 * Clean White High-Contrast Communication Hub with Logo Palette (White, Blue, Yellow, Gray, Black)
 */

export function render() {
  return `
    <div class="w-full flex flex-col items-center">
      
      <!-- HERO HEADER -->
      <section class="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-12 md:py-16">
        <div class="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto reveal">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
            <span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span class="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">Fast Response 24/7 SLA</span>
          </div>

          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Hubungi <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">Tim JoKelar.</span>
          </h1>

          <p class="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
            Pilih kanal komunikasi resmi kami di bawah ini untuk konsultasi pengerjaan, tanya estimasi tarif, atau diskusi materi kuliahmu.
          </p>
        </div>
      </section>

      <!-- 4 OFFICIAL CHANNELS: ASYMMETRICAL BENTO -->
      <section class="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-16">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          <!-- 1. WhatsApp Primary Bento Card (Large 7 cols) -->
          <div class="md:col-span-7 rounded-3xl bg-blue-50/50 border-2 border-blue-600 shadow-[0_10px_35px_-8px_rgba(0,55,176,0.15)] p-7 sm:p-8 flex flex-col justify-between gap-6 relative overflow-hidden">
            <div class="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/[0.08] rounded-full blur-3xl pointer-events-none"></div>

            <div class="flex items-start justify-between">
              <div class="flex items-center gap-4">
                <div class="w-14 h-14 rounded-2xl bg-[#0037b0] flex items-center justify-center text-white shadow-md shadow-blue-600/30">
                  <span class="material-symbols-outlined text-3xl">chat</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-xs font-mono text-emerald-700 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                    Admin Siaga &lt; 5 Menit
                  </span>
                  <h3 class="text-2xl font-black text-slate-900">WhatsApp Hotline</h3>
                </div>
              </div>
              <span class="font-mono text-xs px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">
                Kanal Utama
              </span>
            </div>

            <p class="text-sm text-slate-700 leading-relaxed max-w-md">
              Kirimkan instruksi soal, format penulisan, atau file materi tugas kuliahmu langsung ke nomor resmi WhatsApp kami untuk penaksiran cepat.
            </p>

            <div class="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-blue-200/60">
              <a 
                href="https://wa.me/6285150754258?text=Halo%20Admin%20JoKelar%2C%20saya%20ingin%20konsultasi%20pengerjaan%20tugas."
                target="_blank"
                rel="noopener noreferrer"
                class="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-[#fed01b] hover:bg-[#ffd633] text-slate-950 font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-sm border border-amber-300"
              >
                <span class="material-symbols-outlined text-base">forum</span>
                <span>Chat Admin Sekarang</span>
              </a>

              <button 
                data-copy="+6285150754258"
                class="copy-btn w-full sm:w-auto py-3.5 px-5 rounded-2xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-900 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
                title="Salin Nomor WhatsApp"
              >
                <span class="material-symbols-outlined text-sm text-slate-500">content_copy</span>
                <span>+62 851-5075-4258</span>
              </button>
            </div>
          </div>

          <!-- 2. Instagram Bento Card (5 cols) -->
          <div class="md:col-span-5 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] p-7 sm:p-8 flex flex-col justify-between gap-6 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-600 via-rose-500 to-amber-500 flex items-center justify-center text-white shadow-xs">
                  <span class="material-symbols-outlined text-2xl">photo_camera</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-xs font-mono text-slate-500 font-semibold">@jokelartugas</span>
                  <h3 class="text-xl font-bold text-slate-900">Instagram</h3>
                </div>
              </div>
              <span class="font-mono text-xs px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-medium">Official</span>
            </div>

            <p class="text-xs text-slate-600 leading-relaxed">
              Dapatkan update promo bulanan mahasiswa, tips trik riset akademik, dan infografis edukatif seputar skripsi.
            </p>

            <a 
              href="https://www.instagram.com/jokelartugas?stkn=MXI0NjgzZzVxcGV5eg=="
              target="_blank"
              rel="noopener noreferrer"
              class="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-pink-50 border border-slate-200 hover:border-pink-300 text-slate-900 font-mono text-xs font-bold text-center flex items-center justify-center gap-2 transition-all"
            >
              <span>Kunjungi Profil Instagram</span>
              <span class="material-symbols-outlined text-sm">north_east</span>
            </a>
          </div>

          <!-- 3. Email Resmi (6 cols) -->
          <div class="md:col-span-6 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] p-7 sm:p-8 flex flex-col justify-between gap-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                  <span class="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-xs font-mono text-slate-500 font-semibold">Korespondensi Dokumen</span>
                  <h3 class="text-xl font-bold text-slate-900">Email Resmi</h3>
                </div>
              </div>
              <span class="font-mono text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold">Formal</span>
            </div>

            <p class="text-xs text-slate-600 leading-relaxed">
              Khusus pengiriman file zip arsip proyek besar, dataset mentah, atau proposal kemitraan institusi.
            </p>

            <div class="flex items-center gap-2">
              <button 
                data-copy="jokelartugas@gmail.com"
                class="copy-btn w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-900 font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <span class="material-symbols-outlined text-sm text-slate-500">content_copy</span>
                <span>jokelartugas@gmail.com</span>
              </button>
            </div>
          </div>

          <!-- 4. X / Twitter (6 cols) -->
          <div class="md:col-span-6 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] p-7 sm:p-8 flex flex-col justify-between gap-6 hover:border-slate-400 hover:shadow-lg transition-all duration-300">
            <div class="flex items-start justify-between">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-white shadow-xs">
                  <span class="font-bold text-lg">𝕏</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-xs font-mono text-slate-500 font-semibold">@jokelartugas</span>
                  <h3 class="text-xl font-bold text-slate-900">Platform X (Twitter)</h3>
                </div>
              </div>
              <span class="font-mono text-xs px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 font-medium">Community</span>
            </div>

            <p class="text-xs text-slate-600 leading-relaxed">
              Ruang diskusi seputar keluh kesah dunia perkuliahan, rekomendasi tools produktivitas, dan sesi tanya jawab cepat.
            </p>

            <a 
              href="https://x.com/jokelartugas"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-900 font-mono text-xs font-bold text-center flex items-center justify-center gap-2 transition-all"
            >
              <span>Follow @jokelartugas</span>
              <span class="material-symbols-outlined text-sm">north_east</span>
            </a>
          </div>

        </div>
      </section>

      <!-- FAQ ACCORDION SECTION -->
      <section class="w-full max-w-4xl mx-auto px-6 sm:px-8 py-16 border-t border-slate-200">
        <div class="flex flex-col items-center text-center gap-2 mb-10">
          <span class="text-xs font-mono font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">Pertanyaan Umum</span>
          <h2 class="text-2xl sm:text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
        </div>

        <div class="flex flex-col gap-3" id="faq-list">
          
          <div class="faq-item rounded-2xl bg-white border border-slate-200 shadow-xs overflow-hidden transition-all">
            <button class="faq-toggle w-full p-5 text-left flex items-center justify-between text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors">
              <span>Bagaimana sistem pembayaran di JoKelar?</span>
              <span class="material-symbols-outlined text-slate-500 transition-transform">expand_more</span>
            </button>
            <div class="faq-answer hidden px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
              Kami menggunakan sistem pembayaran 2 tahap: DP 50% di awal sebagai tanda jadi dan konfirmasi antrean, lalu sisa 50% dilunasi setelah Anda memeriksa preview hasil pengerjaan atau screenshot verifikasi.
            </div>
          </div>

          <div class="faq-item rounded-2xl bg-white border border-slate-200 shadow-xs overflow-hidden transition-all">
            <button class="faq-toggle w-full p-5 text-left flex items-center justify-between text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors">
              <span>Apakah ada jaminan tidak terdeteksi plagiasi Turnitin?</span>
              <span class="material-symbols-outlined text-slate-500 transition-transform">expand_more</span>
            </button>
            <div class="faq-answer hidden px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
              Ya, 100% bergaransi. Kami menyertakan laporan resmi Turnitin No-Repository sehingga dokumen Anda tidak tersimpan di database global kampus, dengan nilai kesamaan (similarity index) di bawah 15%.
            </div>
          </div>

          <div class="faq-item rounded-2xl bg-white border border-slate-200 shadow-xs overflow-hidden transition-all">
            <button class="faq-toggle w-full p-5 text-left flex items-center justify-between text-sm font-bold text-slate-900 hover:text-blue-700 transition-colors">
              <span>Bagaimana jika dosen saya memberikan catatan revisi?</span>
              <span class="material-symbols-outlined text-slate-500 transition-transform">expand_more</span>
            </button>
            <div class="faq-answer hidden px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
              Revisi materi sesuai ruang lingkup kesepakatan awal GRATIS tanpa biaya tambahan. Tim kami akan mendampingi perbaikan hingga draf tugas disetujui dosen.
            </div>
          </div>

        </div>
      </section>

      <!-- FLOATING TOAST NOTIFICATION -->
      <div id="copy-toast" class="fixed bottom-6 right-6 z-50 hidden items-center gap-2 px-5 py-3 rounded-full bg-slate-900 text-white font-mono text-xs font-bold shadow-2xl transition-all">
        <span class="material-symbols-outlined text-base text-emerald-400">check_circle</span>
        <span id="toast-msg">Tersalin ke Clipboard!</span>
      </div>

    </div>
  `;
}

export function init() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('copy-toast');
  const toastMsg = document.getElementById('toast-msg');

  copyBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          if (toast && toastMsg) {
            toastMsg.textContent = `${text} tersalin!`;
            toast.classList.remove('hidden');
            toast.classList.add('flex');
            setTimeout(() => {
              toast.classList.add('hidden');
              toast.classList.remove('flex');
            }, 2500);
          }
        });
      }
    });
  });

  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach((toggle) => {
    toggle.addEventListener('click', () => {
      const item = toggle.parentElement;
      const answer = item.querySelector('.faq-answer');
      const icon = toggle.querySelector('.material-symbols-outlined');

      const isHidden = answer.classList.contains('hidden');
      if (isHidden) {
        answer.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
      } else {
        answer.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
      }
    });
  });
}
