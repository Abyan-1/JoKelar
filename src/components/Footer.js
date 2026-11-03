/**
 * JoKelar — Shared Clean Bento-Style Footer Component
 * Architectural Light Theme Layout with Logo Colors (White, Blue, Yellow, Gray, Black)
 */

import logoSrc from '../assets/logo.jpeg';

export function renderFooter() {
  return `
    <footer class="w-full relative mt-24 border-t border-slate-200 bg-white z-20">
      <!-- Top Subtle Blue Accent Border Glow -->
      <div class="absolute -top-px left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <!-- Asymmetrical Bento Grid -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-200">
          
          <!-- Column 1: Brand & Verified Identity (5 cols) -->
          <div class="md:col-span-5 flex flex-col gap-5">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-slate-50 shadow-xs">
                <img src="${logoSrc}" alt="JoKelar Brand Logo" class="w-full h-full object-cover" />
              </div>
              <div class="flex flex-col">
                <span class="font-extrabold text-xl tracking-tight text-slate-900">JoKelar</span>
                <span class="font-mono text-xs text-blue-700 font-semibold">Academic Engineering Hub</span>
              </div>
            </div>

            <p class="text-sm text-slate-600 leading-relaxed max-w-md">
              Pionir platform asistensi tugas akademik modern berintegritas tinggi. Menghadirkan pendampingan pengerjaan kode, olah data statistik, dan telaah ilmiah bebas plagiasi dengan transparansi penuh.
            </p>

            <div class="flex flex-wrap items-center gap-2 pt-1">
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold">
                <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>Turnitin Verified &lt;15%</span>
              </div>
              <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-semibold">
                <span class="w-2 h-2 rounded-full bg-[#fed01b]"></span>
                <span>Active 24/7 SLA</span>
              </div>
            </div>
          </div>

          <!-- Column 2: Navigasi Cepat (2 cols) -->
          <div class="md:col-span-2 flex flex-col gap-4">
            <span class="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">Navigasi</span>
            <ul class="flex flex-col gap-2.5 text-sm text-slate-600">
              <li><a href="#beranda" class="hover:text-blue-700 transition-colors">Beranda</a></li>
              <li><a href="#catalog" class="hover:text-blue-700 transition-colors">Katalog Layanan</a></li>
              <li><a href="#portofolio" class="hover:text-blue-700 transition-colors">Portofolio</a></li>
              <li><a href="#pendiri" class="hover:text-blue-700 transition-colors">Tim Pendiri</a></li>
              <li><a href="#kontak" class="hover:text-blue-700 transition-colors">Pusat Bantuan</a></li>
            </ul>
          </div>

          <!-- Column 3: Cakupan Solusi (2 cols) -->
          <div class="md:col-span-2 flex flex-col gap-4">
            <span class="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">Bidang Tugas</span>
            <ul class="flex flex-col gap-2.5 text-sm text-slate-600">
              <li><a href="#catalog" class="hover:text-blue-700 transition-colors">Web &amp; Software Dev</a></li>
              <li><a href="#catalog" class="hover:text-blue-700 transition-colors">Analisis Data SPSS &amp; PLS</a></li>
              <li><a href="#catalog" class="hover:text-blue-700 transition-colors">Makalah &amp; Skripsi Ilmiah</a></li>
              <li><a href="#catalog" class="hover:text-blue-700 transition-colors">Desain UI &amp; Presentasi</a></li>
            </ul>
          </div>

          <!-- Column 4: Dedicated Support & Direct WA (3 cols) -->
          <div class="md:col-span-3 flex flex-col gap-4">
            <span class="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">Fast Response</span>
            <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3 shadow-xs">
              <div class="flex items-center gap-2 text-xs text-slate-900">
                <span class="material-symbols-outlined text-blue-700 text-lg">headset_mic</span>
                <span class="font-bold">Bantuan Konsultasi Kilat</span>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">
                Terkendala deadline malam ini? Tim admin siaga merespons dalam &lt; 5 menit via bot &amp; agen.
              </p>
              <a 
                href="https://wa.me/6285150754258?text=Halo%20Admin%20JoKelar%2C%20saya%20ingin%20konsultasi%20pengerjaan%20tugas." 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:shadow-[0_4px_15px_rgba(0,55,176,0.3)] shadow-sm"
              >
                <span>WhatsApp Hotline</span>
                <span class="material-symbols-outlined text-sm">north_east</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Bottom Copyright & Legal Strip -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 JoKelar Academic Assistant. Seluruh Hak Cipta Dilindungi.</p>
          <div class="flex items-center gap-6 font-mono">
            <span class="text-emerald-600 flex items-center gap-1.5 font-semibold">
              <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              All Systems Operational
            </span>
            <span class="hover:text-slate-800 cursor-pointer">Integritas Akademik</span>
          </div>
        </div>

      </div>
    </footer>
  `;
}
