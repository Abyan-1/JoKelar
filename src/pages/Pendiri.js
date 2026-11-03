/**
 * JoKelar — Halaman Tim Pendiri (Pendiri.js)
 * Clean White Executive Bento Grid Architecture with Logo Colors
 */

import { activeFounders } from '../data/databaseTemplates.js';

export function renderFounderCard(founder) {
  return `
    <div class="group rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_35px_-10px_rgba(0,55,176,0.12)] hover:border-blue-300 p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 ease-out hover:-translate-y-1.5">
      <div class="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-blue-700 via-sky-500 to-[#fed01b] shadow-sm">
        <div class="w-full h-full rounded-full overflow-hidden bg-slate-100">
          <img 
            src="${founder.image || ''}" 
            alt="${founder.name || 'Foto Pendiri'}" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(founder.name || 'JoKelar')}&background=0037b0&color=fff&size=256';"
          />
        </div>
      </div>

      <div class="flex flex-col items-center gap-1">
        <h3 class="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
          ${founder.name}
        </h3>
        <span class="text-xs font-mono text-blue-700 font-bold">
          ${founder.role}
        </span>
        ${
          founder.bio
            ? `<p class="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed max-w-xs">${founder.bio}</p>`
            : ''
        }
      </div>

      <div class="w-full pt-3 border-t border-slate-100 flex items-center justify-center gap-3 text-slate-500">
        <span class="text-[11px] font-mono font-semibold">Executive Council</span>
      </div>
    </div>
  `;
}

export function render() {
  const hasData = Array.isArray(activeFounders) && activeFounders.length > 0;

  return `
    <div class="w-full flex flex-col items-center">
      
      <!-- HERO HEADER -->
      <section class="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-12 md:py-16">
        <div class="flex flex-col items-center text-center gap-4 max-w-3xl mx-auto reveal">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            <span class="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">Kepemimpinan &amp; Visi</span>
          </div>

          <h1 class="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Di Balik Layar <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">JoKelar.</span>
          </h1>

          <p class="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
            Menyatukan keahlian teknik informatika, analisis data, dan metodologi riset ilmiah untuk merevolusi bantuan akademik yang berintegritas.
          </p>
        </div>
      </section>

      <!-- EXECUTIVE BENTO BOARD -->
      <section class="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-24">
        
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          
          <!-- Box 1 (8 cols) -->
          <div class="md:col-span-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] p-8 flex flex-col justify-between gap-6 relative overflow-hidden">
            <div class="absolute -top-12 -right-12 w-48 h-48 bg-blue-500/[0.06] rounded-full blur-3xl pointer-events-none"></div>
            
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-blue-700 text-xl">psychology</span>
              <span class="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold">Filosofi Inti</span>
            </div>

            <div class="flex flex-col gap-2">
              <h2 class="text-2xl sm:text-3xl font-black text-slate-900">Bukan Sekadar Joki, Ini Asistensi Edukatif.</h2>
              <p class="text-sm text-slate-600 leading-relaxed max-w-2xl">
                Kami percaya setiap mahasiswa berhak mendapatkan arahan yang jelas ketika menghadapi jalan buntu dalam koding dan analisis data. Melalui pendampingan terstruktur, klien kami tidak hanya menerima hasil jadi, tetapi juga memahami logika di balik solusinya.
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-700 font-medium pt-2 border-t border-slate-100">
              <span class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Transparansi Kode</span>
              <span class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Edukasi Metodologi</span>
              <span class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Standar Turnitin Bebas Plagiasi</span>
            </div>
          </div>

          <!-- Box 2 (4 cols) -->
          <div class="md:col-span-4 rounded-3xl bg-blue-50/70 border border-blue-200 p-8 flex flex-col justify-between gap-6 shadow-xs">
            <div class="flex items-center justify-between">
              <span class="font-mono text-xs uppercase text-blue-800 font-bold">Sertifikasi Integritas</span>
              <span class="material-symbols-outlined text-blue-700 text-2xl">verified</span>
            </div>

            <div class="flex flex-col gap-1">
              <span class="text-4xl font-black text-slate-900">100%</span>
              <span class="text-sm font-bold text-slate-800">Kerahasiaan Data Mahasiswa</span>
              <p class="text-xs text-slate-600 mt-2 leading-relaxed">
                Identitas klien, nama universitas, dan materi tugas dienkripsi dan tidak akan pernah dipublikasikan tanpa izin.
              </p>
            </div>

            <div class="text-[11px] font-mono text-slate-500 pt-3 border-t border-blue-200/60 font-semibold">
              JoKelar Ethical Framework 2026
            </div>
          </div>

        </div>

        <div class="flex flex-col gap-6">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-slate-900">Dewan Pengarah &amp; Tim Inti</h3>
            <span class="text-xs font-mono text-slate-500 font-semibold">Academic Engineering Team</span>
          </div>

          ${
            hasData
              ? `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  ${activeFounders.map(renderFounderCard).join('')}
                </div>`
              : `
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  <div class="rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] p-6 flex flex-col items-center text-center gap-4 hover:border-blue-300 hover:shadow-md transition-all">
                    <div class="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-700 to-indigo-600 p-1 shadow-sm">
                      <div class="w-full h-full rounded-full bg-blue-50 flex items-center justify-center text-xl font-black text-blue-800">
                        JK
                      </div>
                    </div>
                    <div class="flex flex-col items-center">
                      <h4 class="text-base font-bold text-slate-900">Chief Academic Officer</h4>
                      <span class="text-xs font-mono text-blue-700 font-bold">Lead Curriculum &amp; Research</span>
                      <p class="text-xs text-slate-600 mt-2 leading-relaxed">
                        Mengawasi standar penulisan ilmiah, uji Turnitin, dan validitas referensi jurnal Scopus &amp; Sinta.
                      </p>
                    </div>
                  </div>

                  <div class="rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] p-6 flex flex-col items-center text-center gap-4 hover:border-amber-300 hover:shadow-md transition-all">
                    <div class="w-24 h-24 rounded-full bg-gradient-to-tr from-[#fed01b] to-amber-500 p-1 shadow-sm">
                      <div class="w-full h-full rounded-full bg-amber-50 flex items-center justify-center text-xl font-black text-amber-800">
                        DEV
                      </div>
                    </div>
                    <div class="flex flex-col items-center">
                      <h4 class="text-base font-bold text-slate-900">Head of Software Engineering</h4>
                      <span class="text-xs font-mono text-blue-700 font-bold">Systems &amp; Architecture</span>
                      <p class="text-xs text-slate-600 mt-2 leading-relaxed">
                        Memvalidasi clean code, arsitektur database, dan implementasi algoritma machine learning pada tugas pemrograman.
                      </p>
                    </div>
                  </div>

                  <div class="rounded-3xl bg-white border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] p-6 flex flex-col items-center text-center gap-4 hover:border-emerald-300 hover:shadow-md transition-all">
                    <div class="w-24 h-24 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 p-1 shadow-sm">
                      <div class="w-full h-full rounded-full bg-emerald-50 flex items-center justify-center text-xl font-black text-emerald-800">
                        STAT
                      </div>
                    </div>
                    <div class="flex flex-col items-center">
                      <h4 class="text-base font-bold text-slate-900">Lead Data Scientist</h4>
                      <span class="text-xs font-mono text-emerald-700 font-bold">Quantitative Modeling</span>
                      <p class="text-xs text-slate-600 mt-2 leading-relaxed">
                        Menangani analisis statistika parametrik/non-parametrik, validasi kuesioner, dan interpretasi output SmartPLS &amp; SPSS.
                      </p>
                    </div>
                  </div>

                </div>
              `
          }
        </div>

      </section>

    </div>
  `;
}
