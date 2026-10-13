
export function render() {
  return `
<div class="flex flex-col w-full">
<!-- Subtle Background Grid Accent (inline SVG pattern simulation) -->
<div class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-xl">
<!-- Top Showcase Banner / Title Header -->
<div class="py-space-xl mb-space-lg text-center max-w-2xl mx-auto flex flex-col items-center gap-space-xs"><span class="font-label-code text-label-code text-primary uppercase tracking-wider font-semibold">Portofolio Terverifikasi</span><h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight font-extrabold">Katalog Tugas</h1><p class="font-body-md text-body-md text-on-surface-variant max-w-md">Koleksi pengerjaan akademik terbaik bebas plagiarisme dengan standar mutu tinggi.</p></div>
<!-- Filter Bar & Search Tools -->
<div class="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-xl pb-space-md"><div class="flex flex-wrap items-center gap-space-xs" id="filter-container"><button class="filter-tab px-space-md py-space-xs rounded-full font-label-badge text-label-badge transition-all bg-on-surface text-surface-bright shadow-sm" data-target="all" >Semua</button><button class="filter-tab px-space-md py-space-xs rounded-full font-label-badge text-label-badge transition-all text-on-surface-variant hover:text-on-surface bg-surface-container-low" data-target="mahasiswa" >Mahasiswa</button><button class="filter-tab px-space-md py-space-xs rounded-full font-label-badge text-label-badge transition-all text-on-surface-variant hover:text-on-surface bg-surface-container-low" data-target="pelajar" >Pelajar</button><button class="filter-tab px-space-md py-space-xs rounded-full font-label-badge text-label-badge transition-all text-on-surface-variant hover:text-on-surface bg-surface-container-low" data-target="umum" >Umum / Profesional</button></div><div class="relative w-full sm:w-64"><input class="w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/60 font-body-sm text-body-sm px-space-md py-space-xs pl-9 rounded-full shadow-none outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all" id="searchInput" onkeyup="searchCards()" placeholder="Cari tugas..." type="text"><span class="material-symbols-outlined absolute left-2.5 top-2 text-on-surface-variant text-lg">search</span></div></div>
<!-- Cards Grid (Desktop 3 to 4 columns) -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-space-lg" id="catalogGrid"><article class="catalog-item group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-none hover:shadow-md transition-all duration-300 cursor-pointer" data-category="mahasiswa" ><div class="relative h-44 w-full overflow-hidden bg-surface-container-low"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Skripsi Sistem Informasi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBupCpP8dVKmGGpSbQX3Sgdjp5GpL5zgZeuOkHmsVZVCuPoR7at2UozNwJ4wR-a_V9xWAEwlg1gf8Fpc7zwxlQ330jMt7Cs1QmNQ8ABl7ESJpFIbFIPkqHcxodDJXMbaJX5SIbLOeCMQbUKdR6B1-ltevpZ8AmhVFPRbKSgspHgmEqoNlVEhCr38MAHN-zBWkRSa8lZMDSphWqoHwMLj8dyL1M2J3pLJfcDriDBrokA"><span class="absolute top-space-xs left-space-xs px-space-xs py-0.5 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-badge text-label-badge rounded">Mahasiswa</span></div><div class="p-space-md flex flex-col flex-1 justify-between gap-space-sm"><div><span class="font-label-code text-label-code text-on-surface-variant">Informatika</span><h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2 mt-0.5">Skripsi Sistem Informasi - Full Stack Web AI</h3></div><div class="flex items-center justify-between font-label-code text-label-code text-on-surface-variant pt-space-xs"><span class="">Turnitin 6%</span><span class="text-primary font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">Detail →</span></div></div></article><article class="catalog-item group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-none hover:shadow-md transition-all duration-300 cursor-pointer" data-category="mahasiswa" ><div class="relative h-44 w-full overflow-hidden bg-surface-container-low"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Makalah Hukum Bisnis" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwJoJ4h60mjuAYQEoBVTjGfYecxjRKjdaK0vsG09fzyhNXjlK6JwwrLa6x6fQc2HdS76lvbpikC8i9Wu_BY-Xu0i05cvLXmIDhonrFU7Yy5tj9EmS-YMzdGQb4h0ifETysrtL1FBDV21Nh0QWpOUvzcE0THOrkSn6SN1oXEUUPHtroYTy5EItSvDPA2pISjU3XNnRNywC5iLJsEfJQpG_KgXOMwVSvO_ZBBPfo6-h_"><span class="absolute top-space-xs left-space-xs px-space-xs py-0.5 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-badge text-label-badge rounded">Mahasiswa</span></div><div class="p-space-md flex flex-col flex-1 justify-between gap-space-sm"><div><span class="font-label-code text-label-code text-on-surface-variant">Ilmu Hukum</span><h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2 mt-0.5">Makalah Analisis Hukum Bisnis Internasional</h3></div><div class="flex items-center justify-between font-label-code text-label-code text-on-surface-variant pt-space-xs"><span class="">Turnitin 8%</span><span class="text-primary font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">Detail →</span></div></div></article><article class="catalog-item group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-none hover:shadow-md transition-all duration-300 cursor-pointer" data-category="mahasiswa" ><div class="relative h-44 w-full overflow-hidden bg-surface-container-low"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Machine Learning Python" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnlUiLSVCmFIOAj8IyeUovOXkq6bKa5NypNAC4Mg7YJofGv4L5wOon-nTwacgakuoXr8fXNlidMpjn7IJ_sv2EyS7Wy_gQJSeWn8R-OS0oOiVpAeU8w-6v-tUQbAGONz_2wO6VjpD_pz94-QOGN5RgjEVy1Nu3psyV8E3AHKFGZ2cUhniHdyVvCdRn6r8UodDkn-SRD5TJpe7MAwjt-hIf5xGIIuqMgX8a5kGhYY65"><span class="absolute top-space-xs left-space-xs px-space-xs py-0.5 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-badge text-label-badge rounded">Mahasiswa</span></div><div class="p-space-md flex flex-col flex-1 justify-between gap-space-sm"><div><span class="font-label-code text-label-code text-on-surface-variant">Data Science</span><h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2 mt-0.5">Tugas Akhir Machine Learning Python</h3></div><div class="flex items-center justify-between font-label-code text-label-code text-on-surface-variant pt-space-xs"><span class="">Akurasi 94.8%</span><span class="text-primary font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">Detail →</span></div></div></article><article class="catalog-item group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-none hover:shadow-md transition-all duration-300 cursor-pointer" data-category="pelajar" ><div class="relative h-44 w-full overflow-hidden bg-surface-container-low"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Praktikum Fisika SMA" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArxYhwIbHzhd6yAKyQj5FERWnUAdBGoqiuT24t0h8l_r4oLpTfuHQMmF_iGfzAumk7VbkkPBca6bNQ0jVoS48KriS_01J6FX1GDXxdwD-JSrVVJ3tzCgqa-SI26IJq7iAqtKAY-RSXMROLCh2OqC6HZLniB6h_gzugX4QoEr4Ixa9UeXcpaxF73mDdnqWlNYtv8VizYXunsK7o2me07jOBT8nzNe5kmwqibb9mUjfp"><span class="absolute top-space-xs left-space-xs px-space-xs py-0.5 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-badge text-label-badge rounded">Pelajar</span></div><div class="p-space-md flex flex-col flex-1 justify-between gap-space-sm"><div><span class="font-label-code text-label-code text-on-surface-variant">Fisika SMA</span><h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2 mt-0.5">Laporan Praktikum Fisika Dasar SMA</h3></div><div class="flex items-center justify-between font-label-code text-label-code text-on-surface-variant pt-space-xs"><span class="">Nilai 96</span><span class="text-primary font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">Detail →</span></div></div></article><article class="catalog-item group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-none hover:shadow-md transition-all duration-300 cursor-pointer" data-category="mahasiswa" ><div class="relative h-44 w-full overflow-hidden bg-surface-container-low"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="SPSS &amp; SEM PLS" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1f2lfi9UgzzzCLOSLSK0v1IJv3ih2mJ0pJR27VpQ8Gm1CK7Dr4Y7anftXitzNcLqwu1iSal9pM7Rr-PUBbVajMnu4pkpncmhEUBs9n3LnSnpbihE05p_BSNkSbEWYERdGmT5G4G4c5mEFSU6akvaSO0EZD2ZXhv5tkaiglhOI46agp0ikOr2xV03KVuiLHatGUTy3BaTAcWX1M-bX8783ucgCs4k_3CFoJRL7KiIp"><span class="absolute top-space-xs left-space-xs px-space-xs py-0.5 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-badge text-label-badge rounded">Mahasiswa</span></div><div class="p-space-md flex flex-col flex-1 justify-between gap-space-sm"><div><span class="font-label-code text-label-code text-on-surface-variant">Statistika</span><h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2 mt-0.5">Olah Data SPSS &amp; SEM-PLS Pasar</h3></div><div class="flex items-center justify-between font-label-code text-label-code text-on-surface-variant pt-space-xs"><span class="">N=250 Responden</span><span class="text-primary font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">Detail →</span></div></div></article><article class="catalog-item group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-none hover:shadow-md transition-all duration-300 cursor-pointer" data-category="umum" ><div class="relative h-44 w-full overflow-hidden bg-surface-container-low"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Pitch Deck Startup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2ytFb74tpescZCTyXpKNuAMW8_OgH9g9-jcXbMi3ur78u4l9eusKpRqiqBKGZMFUlRlzRJTfbDL45196BwbVMaD5_ESQe06WwoAsi2367VOgeImnQJ1BKMfSD71xfpsL9RY6UqsM65GsI-WGIQlflK_L8ArpCavVnVC9o8Ni_LT1NqhfrdTWQjSG41ZaMNUqOcu0AOqQjNd5zz0YYU0t95DMcpG8GzFxYuSFv-6dq"><span class="absolute top-space-xs left-space-xs px-space-xs py-0.5 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-badge text-label-badge rounded">Umum / Pro</span></div><div class="p-space-md flex flex-col flex-1 justify-between gap-space-sm"><div><span class="font-label-code text-label-code text-on-surface-variant">Business Strategy</span><h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2 mt-0.5">Presentasi Pitch Deck Bisnis Startup</h3></div><div class="flex items-center justify-between font-label-code text-label-code text-on-surface-variant pt-space-xs"><span class="">18 Slides</span><span class="text-primary font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">Detail →</span></div></div></article><article class="catalog-item group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-none hover:shadow-md transition-all duration-300 cursor-pointer" data-category="mahasiswa" ><div class="relative h-44 w-full overflow-hidden bg-surface-container-low"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Jurnal Ilmiah Sinta 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8PrZLPNIKRdGQX5ogSZimm9dwsCPuAOrlVRjiZkIqz4NAVqtPP0syo-xEi4CS1hpVvimxqfPcWwxrfO3stJA8Wv09SamwsLUld1vTpo5olJBoqM_akZ_B8NjV9VYcFQGetrhdZtMesUX5c86Yn8kPnjVOnPnT1fP1YS08xWHkf3wGLTo54aGMkIa6IXAGdnyLlsur119Vixn48mzb-f71Gp3Q9LkOYv21UG2Svig5"><span class="absolute top-space-xs left-space-xs px-space-xs py-0.5 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-badge text-label-badge rounded">Mahasiswa</span></div><div class="p-space-md flex flex-col flex-1 justify-between gap-space-sm"><div><span class="font-label-code text-label-code text-on-surface-variant">Publikasi</span><h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2 mt-0.5">Jurnal Ilmiah Terindeks Sinta 2</h3></div><div class="flex items-center justify-between font-label-code text-label-code text-on-surface-variant pt-space-xs"><span class="">Turnitin 4%</span><span class="text-primary font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">Detail →</span></div></div></article><article class="catalog-item group flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-none hover:shadow-md transition-all duration-300 cursor-pointer" data-category="mahasiswa" ><div class="relative h-44 w-full overflow-hidden bg-surface-container-low"><img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Pemrograman C++" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw7GCqP76MFHPqqtYXP7_vrNf1kq3CMymESUrBbcH3Cglfi4NEch9oU3o5VEIZsb-TjTvSsiy8uMvoQnuvbmM11MYO8ZvAqvsit1sW6uBFga34G7TH_lk0sreUebP27cfJnQhfv4lwQCXY3NLysHdT3sr1SnjicBBXvzRzdxnLsNNncnfir6gsDmXJcq_uEIxrgWTC9jtkqDrjE8yvNLvq89l4PVEe2kBdmgwJbwMC"><span class="absolute top-space-xs left-space-xs px-space-xs py-0.5 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface font-label-badge text-label-badge rounded">Mahasiswa</span></div><div class="p-space-md flex flex-col flex-1 justify-between gap-space-sm"><div><span class="font-label-code text-label-code text-on-surface-variant">Informatika</span><h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2 mt-0.5">Tugas Pemrograman C++ Struktur Data</h3></div><div class="flex items-center justify-between font-label-code text-label-code text-on-surface-variant pt-space-xs"><span class="">Skor 100/100</span><span class="text-primary font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">Detail →</span></div></div></article></div>
<!-- Empty State Notification (Hidden by default) -->
<div class="hidden flex-col items-center justify-center p-space-xl bg-surface-container rounded-xl text-center my-space-lg" id="emptyNotice">
<span class="material-symbols-outlined text-4xl text-on-surface-variant mb-space-xs">search_off</span>
<h4 class="font-headline-sm text-headline-sm text-on-surface">Portofolio tidak ditemukan</h4>
<p class="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-md">
        Coba gunakan kata kunci lain atau pilih kategori 'Semua' untuk melihat seluruh portofolio pengerjaan kami.
      </p>
</div>
<!-- Bottom Action Conversion Banner -->
<section class="mt-space-xl py-space-xl px-space-md bg-surface-container-low rounded-2xl text-center flex flex-col items-center justify-center gap-space-md max-w-3xl mx-auto"><h2 class="font-headline-sm text-headline-sm text-on-surface font-bold tracking-tight">Punya tugas spesifik yang ingin dikerjakan?</h2><p class="font-body-sm text-body-sm text-on-surface-variant max-w-md">Konsultasikan silabus, panduan, atau deadline tugas Anda secara langsung dengan tim spesialis kami.</p><a class="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-sm bg-primary text-on-primary font-body-sm text-body-sm font-semibold rounded-full hover:bg-primary-container transition-all active:scale-[0.98]" href="https://wa.me/message/RUK4IFU7KE4YK1" rel="noopener noreferrer" target="_blank"><span class="material-symbols-outlined text-base">chat</span><span class="">Konsultasi Bebas Biaya</span></a></section>
</div>
<!-- Interactive Project Detail Modal -->
<div class="fixed inset-0 z-50 hidden bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-space-md md:p-space-lg transition-opacity duration-300" id="projectModal">
<div class="relative w-full max-w-3xl max-h-[921px] bg-surface-container-lowest rounded-2xl shadow-2xl overflow-y-auto flex flex-col" >
<!-- Modal Header -->
<div class="sticky top-0 z-20 flex items-center justify-between p-space-md bg-surface-container-lowest/95 backdrop-blur-md shadow-sm">
<div class="flex items-center gap-space-sm">
<span class="px-space-sm py-space-xs rounded-lg font-label-badge text-label-badge bg-primary text-on-primary" id="modalCategoryBadge">
            Mahasiswa
          </span>
<span class="font-label-code text-label-code text-primary bg-surface-container-high px-space-sm py-space-xs rounded-lg font-bold" id="modalGradeBadge">
            Grade A (95/100)
          </span>
</div>
<button class="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-highest transition-colors" >
<span class="material-symbols-outlined">close</span>
</button>
</div>
<!-- Modal Body Content -->
<div class="p-space-md md:p-space-lg flex flex-col gap-space-lg">
<div>
<h2 class="font-headline-lg text-headline-lg text-on-surface mb-space-xs" id="modalTitle">
            Skripsi Sistem Informasi - Full Stack Web AI
          </h2>
<div class="flex flex-wrap items-center gap-space-md text-on-surface-variant font-label-code text-label-code">
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span> Pengerjaan: <b class="text-on-surface" id="modalDuration">4 Hari</b></span>
<span class="">•</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">check_circle</span> Similarity: <b class="text-on-surface" id="modalTurnitin">6% Turnitin</b></span>
<span class="">•</span>
<span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">school</span> Status: <b class="text-primary">Lulus Sidang Sempurna</b></span>
</div>
</div>
<!-- Section 1: Brief & Tantangan -->
<div class="bg-surface-container-low p-space-md rounded-xl">
<h4 class="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs mb-space-xs">
<span class="material-symbols-outlined text-primary">assignment</span>
<span class="">Brief &amp; Tantangan Klien</span>
</h4>
<p class="font-body-md text-body-md text-on-surface-variant" id="modalBrief">
            Klien membutuhkan prototipe sistem web cerdas dengan deadline sidang skripsi yang sangat mepet. Dosen penguji meminta integrasi model kecerdasan buatan NLP dan pengujian sistem ISO 25010 secara lengkap.
          </p>
</div>
<!-- Section 2: Solusi Tim JoKelar -->
<div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
<h4 class="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs mb-space-xs">
<span class="material-symbols-outlined text-secondary-container">bolt</span>
<span class="">Solusi &amp; Pengerjaan JoKelar</span>
</h4>
<ul class="font-body-md text-body-md text-on-surface-variant list-disc pl-5 space-y-1" id="modalSolution">
<li class="">Menyusun arsitektur sistem berbasis RESTful API dengan FastAPI dan dashboard frontend modern.</li>
<li class="">Melakukan fine-tuning model klasifikasi teks bahasa Indonesia dengan benchmark F1-Score 92%.</li>
<li class="">Menulis Bab 4 (Hasil &amp; Pembahasan) beserta Bab 5 lengkap dengan lampiran kode beranotasi rapi.</li>
</ul>
</div>
<!-- Section 3: Feedback & Hasil Klien -->
<div class="bg-surface-container-high p-space-md rounded-xl">
<div class="flex items-center justify-between mb-space-xs">
<span class="font-label-badge text-label-badge uppercase tracking-wider text-on-surface-variant">Testimoni Klien Terverifikasi</span>
<div class="flex text-secondary-container">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
</div>
</div>
<p class="font-body-md text-body-md text-on-surface italic" id="modalFeedback">
            "Alhamdulillah dapat A dari dewan penguji! Pengerjaan bener-bener cepet dan pas ditanya pas sidang saya bisa jawab karena dibuatin modul penjelasan lengkap. Makasih banyak JoKelar!"
          </p>
<div class="mt-space-xs flex items-center justify-between font-label-code text-label-code text-on-surface-variant">
<span id="modalClientInfo" class="">Rian F. • Mahasiswa Univ. Negeri Jakarta</span>
<span class="text-primary font-bold">100% Verified Review</span>
</div>
</div>
<!-- Call to Action Inside Modal -->
<div class="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs bg-surface-container p-space-md rounded-xl">
<div class="flex flex-col">
<span class="font-headline-sm text-headline-sm text-on-surface">Butuh bantuan di mata kuliah/bidang ini?</span>
<span class="font-body-sm text-body-sm text-on-surface-variant">Konsultasikan kebutuhanmu, deal harga mahasiswa friendly.</span>
</div>
<a class="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-primary text-on-primary font-label-badge text-label-badge uppercase rounded-xl hover:bg-primary-container transition-colors shadow-sm" href="https://wa.me/message/RUK4IFU7KE4YK1" id="modalWhatsAppBtn" rel="noopener noreferrer" target="_blank">
<span class="material-symbols-outlined text-base">chat</span>
<span class="">Order Tugas Mirip</span>
</a>
</div>
</div>
</div>
</div>
<!-- Interactive Logic -->

</div>
  `;
}

export function init() {

    const projectDetailsData = {
      item1: {
        category: 'Mahasiswa',
        categoryClass: 'bg-primary text-on-primary',
        grade: 'Nilai A (95/100)',
        turnitin: '6% Turnitin',
        duration: '4 Hari',
        title: 'Skripsi Sistem Informasi - Full Stack Web AI',
        brief: 'Klien membutuhkan prototipe sistem web cerdas dengan deadline sidang skripsi yang sangat mepet. Dosen penguji meminta integrasi model kecerdasan buatan NLP dan pengujian sistem ISO 25010 secara lengkap.',
        solutions: [
          'Menyusun arsitektur sistem berbasis RESTful API dengan FastAPI dan dashboard frontend modern.',
          'Melakukan fine-tuning model klasifikasi teks bahasa Indonesia dengan benchmark F1-Score 92%.',
          'Menulis Bab 4 (Hasil & Pembahasan) beserta Bab 5 lengkap dengan lampiran kode beranotasi rapi.'
        ],
        feedback: '"Alhamdulillah dapat A dari dewan penguji! Pengerjaan bener-bener cepet dan pas ditanya pas sidang saya bisa jawab karena dibuatin modul penjelasan lengkap. Makasih banyak JoKelar!"',
        client: 'Rian F. • Mahasiswa Univ. Negeri Jakarta'
      },
      item2: {
        category: 'Mahasiswa',
        categoryClass: 'bg-primary text-on-primary',
        grade: 'Grade A (92/100)',
        turnitin: '8% Turnitin',
        duration: '2 Hari',
        title: 'Makalah Analisis Hukum Bisnis Internasional',
        brief: 'Penyusunan telaah komparatif regulasi perlindungan data pribadi konsumen dalam transaksi lintas batas Indonesia versus General Data Protection Regulation (GDPR) Uni Eropa.',
        solutions: [
          'Mengumpulkan 32 jurnal primer terindeks Scopus & Sinta untuk referensi komprehensif.',
          'Melakukan analisis yuridis normatif dengan pendekatan perundang-undangan (statute approach).',
          'Pemeriksaan Turnitin berlapis di kampus sehingga hasil orisinal murni di bawah 10%.'
        ],
        feedback: '"Dosen saya sangat kritis soal sitasi dan parafrase, tapi tugas dari JoKelar langsung di-acc tanpa catatan revisi. Keren banget!"',
        client: 'Aulia S. • Mahasiswa Hukum Univ. Diponegoro'
      },
      item3: {
        category: 'Mahasiswa',
        categoryClass: 'bg-primary text-on-primary',
        grade: 'Grade A+ (98/100)',
        turnitin: 'Akurasi 94.8%',
        duration: '3 Hari',
        title: 'Tugas Akhir Machine Learning Python',
        brief: 'Implementasi Convolutional Neural Network (CNN) untuk mendeteksi 4 kategori penyakit tanaman perkebunan dari dataset gambar mentah yang belum di-augmentasi.',
        solutions: [
          'Pre-processing dataset & augmentasi gambar (rotation, shear, zoom) guna mencegah overfitting.',
          'Menerapkan arsitektur ResNet-50 dengan fine-tuning 25 epoch.',
          'Menyediakan notebook Google Colab dengan visualisasi Confusion Matrix dan ROC-AUC.'
        ],
        feedback: '"Source code rapi banget, tiap baris ada penjelasannya. Bantu saya banget waktu presentasi di depan aslab."',
        client: 'Bagas W. • Teknik Informatika ITB'
      },
      item4: {
        category: 'Pelajar SMA',
        categoryClass: 'bg-secondary-container text-on-secondary-fixed',
        grade: 'Nilai 96/100',
        turnitin: 'Format Resmi',
        duration: '1 Hari Kilat',
        title: 'Laporan Praktikum Fisika Dasar SMA',
        brief: 'Pembuatan laporan lengkap percobaan hukum kekekalan energi dan getaran harmonik bandul dengan perhitungan ralat dan standar format laboratorium sekolah.',
        solutions: [
          'Perhitungan deviasi standar dan ketidakpastian mutlak serta relatif presisi.',
          'Grafik garis tren linear kuadrat terkecil digambar rapi sesuai standar kurikulum.',
          'Kesimpulan menjawab hipotesis awal secara logis dan runtut.'
        ],
        feedback: '"Tugas praktikum selalu bikin pusing, untung ada JoKelar langsung kelar dalam sehari dan dapet nilai tertinggi di kelas."',
        client: 'Jessica K. • Siswi SMAN 8 Jakarta'
      },
      item5: {
        category: 'Mahasiswa',
        categoryClass: 'bg-primary text-on-primary',
        grade: 'Valid & Reliabel',
        turnitin: '250 Responden',
        duration: '2 Hari',
        title: 'Olah Data SPSS & SEM-PLS Penelitian Pasar',
        brief: 'Uji hipotesis model intervening pengaruh Brand Ambassador dan Digital Marketing terhadap Keputusan Pembelian dengan Kepuasan Pelanggan sebagai variabel mediasi.',
        solutions: [
          'Pemeriksaan Convergent Validity (AVE > 0.5) dan Discriminant Validity (Fornell-Larcker).',
          'Pengujian Structural Model (R-square, f-square, Q-square) via SmartPLS versi 4.',
          'Penulisan pembahasan interpretasi output Bab 4 langsung masuk draft dokumen skripsi.'
        ],
        feedback: '"Data saya tadinya gak valid, dibantu olah dan diarahkan JoKelar sampai t-statistiknya signifikan semua. Sidang tinggal seminggu kebantu banget!"',
        client: 'Dina M. • Manajemen Universitas Brawijaya'
      },
      item6: {
        category: 'Umum / Pro',
        categoryClass: 'bg-inverse-surface text-inverse-on-surface',
        grade: '18 Slides Deck',
        turnitin: 'Investor Ready',
        duration: '2 Hari',
        title: 'Presentasi Pitch Deck Bisnis Startup',
        brief: 'Pembuatan slide presentasi deck pitching investor untuk kompetisi business plan nasional mencakup problem, solution, TAM/SAM/SOM, dan roadmap 3 tahun.',
        solutions: [
          'Desain visual modern minimalis 16:9 dengan palet brand profesional.',
          'Penyederhanaan financial model ke dalam grafik infografis mudah dipahami.',
          'Ekspor dalam format PPTX editable dan PDF high resolution.'
        ],
        feedback: '"Hasil presentasinya mewah banget, tim juri muji struktur alur presentasi kami. Juara 2 tingkat nasional!"',
        client: 'Fahri & Tim • Founder Startup Edukasi'
      },
      item7: {
        category: 'Mahasiswa / Pasca',
        categoryClass: 'bg-primary text-on-primary',
        grade: 'Sinta 2 Accepted',
        turnitin: '4% Turnitin',
        duration: '5 Hari',
        title: 'Jurnal Ilmiah Terindeks Sinta 2',
        brief: 'Penulisan naskah artikel jurnal ilmiah dari hasil skripsi untuk syarat kelulusan magister, disesuaikan dengan template author guidelines jurnal target.',
        solutions: [
          'Restrukturisasi tesis 150 halaman menjadi 12 halaman format IMRAD (Introduction, Method, Result, Discussion).',
          'Pengecekan sitasi Mendeley dengan referensi terbaru 5 tahun terakhir.',
          'Pendampingan revisi peer review hingga LoA (Letter of Acceptance) terbit.'
        ],
        feedback: '"Revisi dari reviewer bisa ditangani dengan cepat sama tim JoKelar. Sangat profesional untuk level jurnal ilmiah."',
        client: 'Hendro P. • Magister Ilmu Komunikasi UI'
      },
      item8: {
        category: 'Mahasiswa',
        categoryClass: 'bg-primary text-on-primary',
        grade: 'Skor 100/100',
        turnitin: 'Zero Memory Leak',
        duration: '1 Hari Kilat',
        title: 'Tugas Pemrograman C++ Struktur Data',
        brief: 'Membuat program sistem antrian berbasis AVL Binary Search Tree dengan operasi insert, delete, balancing, dan traversal tanpa memory leak (Valgrind approved).',
        solutions: [
          'Penulisan modul C++ clean code dengan prinsip OOP dan pointer safety.',
          'Uji coba test-cases ekstrem untuk memastikan balancing rotation (LL, RR, LR, RL) tepat.',
          'Penyusunan video demo rekaman penjelasan baris program untuk klien.'
        ],
        feedback: '"Tugas coding paling ribet semester ini kelar juga. Penjelasannya gampang dimengerti, nilai auto sempurna."',
        client: 'Kevin T. • Ilmu Komputer UGM'
      }
    };

    function filterCatalog(category, el) {
      const tabs = document.querySelectorAll('.filter-tab');
      tabs.forEach(t => {
        t.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
        t.classList.add('text-on-surface-variant');
      });
      el.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');
      el.classList.remove('text-on-surface-variant');

      const items = document.querySelectorAll('.catalog-item');
      let visibleCount = 0;

      items.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (category === 'all' || itemCat === category) {
          item.style.display = 'flex';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });

      const emptyNotice = document.getElementById('emptyNotice');
      if (visibleCount === 0) {
        emptyNotice.classList.remove('hidden');
        emptyNotice.classList.add('flex');
      } else {
        emptyNotice.classList.add('hidden');
        emptyNotice.classList.remove('flex');
      }
    }

    function searchCards() {
      const query = document.getElementById('searchInput').value.toLowerCase();
      const items = document.querySelectorAll('.catalog-item');
      let visibleCount = 0;

      items.forEach(item => {
        const text = item.innerText.toLowerCase();
        if (text.includes(query)) {
          item.style.display = 'flex';
          visibleCount++;
        } else {
          item.style.display = 'none';
        }
      });

      const emptyNotice = document.getElementById('emptyNotice');
      if (visibleCount === 0) {
        emptyNotice.classList.remove('hidden');
        emptyNotice.classList.add('flex');
      } else {
        emptyNotice.classList.add('hidden');
        emptyNotice.classList.remove('flex');
      }
    }

    function openDetailModal(id) {
      const data = projectDetailsData[id];
      if (!data) return;

      document.getElementById('modalCategoryBadge').textContent = data.category;
      document.getElementById('modalCategoryBadge').className = `px-space-sm py-space-xs rounded-lg font-label-badge text-label-badge ${data.categoryClass}`;
      document.getElementById('modalGradeBadge').textContent = data.grade;
      document.getElementById('modalTitle').textContent = data.title;
      document.getElementById('modalDuration').textContent = data.duration;
      document.getElementById('modalTurnitin').textContent = data.turnitin;
      document.getElementById('modalBrief').textContent = data.brief;
      document.getElementById('modalFeedback').textContent = data.feedback;
      document.getElementById('modalClientInfo').textContent = data.client;

      const solutionList = document.getElementById('modalSolution');
      solutionList.innerHTML = '';
      data.solutions.forEach(sol => {
        const li = document.createElement('li');
        li.textContent = sol;
        solutionList.appendChild(li);
      });

      const modal = document.getElementById('projectModal');
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeDetailModal() {
      const modal = document.getElementById('projectModal');
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeDetailModal();
      }
    });

    // Close modal on background click
    document.getElementById('projectModal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeDetailModal();
      }
    });
  

}
