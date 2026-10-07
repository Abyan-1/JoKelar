/**
 * JoKelar — Katalog Tugas (Catalog) Page
 */

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

export function render() {
  return `
    <div class="flex flex-col w-full page-enter">
      <div class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-xl">
        
        <!-- Top Showcase Banner / Title Header -->
        <div class="relative bg-surface-container-low rounded-xl p-space-lg md:p-space-xl mb-space-xl overflow-hidden shadow-sm reveal">
          <div class="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
            <div class="max-w-2xl">
              <div class="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container-highest rounded-xl text-primary font-label-badge text-label-badge tracking-wider uppercase mb-space-sm">
                <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">verified</span>
                <span>Bukti Riil &amp; Integritas Terjamin</span>
              </div>
              <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-xs">
                Katalog Tugas &amp; Portofolio Selesai
              </h1>
              <p class="font-body-lg text-body-lg text-on-surface-variant">
                Bukti nyata hasil pengerjaan JoKelar. Bebas plagiarisme &amp; garansi revisi tuntas.
              </p>
            </div>
            
            <!-- Live Performance Metrics Ticker -->
            <div class="flex items-center gap-space-md bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
              <div class="flex flex-col">
                <span class="font-label-code text-label-code text-on-surface-variant uppercase">Rata-rata Turnitin</span>
                <span class="font-headline-sm text-headline-sm text-primary font-extrabold">&lt; 10%</span>
              </div>
              <div class="w-px h-8 bg-surface-container-high"></div>
              <div class="flex flex-col">
                <span class="font-label-code text-label-code text-on-surface-variant uppercase">Tingkat Nilai A</span>
                <span class="font-headline-sm text-headline-sm text-secondary-container font-black text-on-surface">98.4%</span>
              </div>
              <div class="w-px h-8 bg-surface-container-high"></div>
              <div class="flex flex-col">
                <span class="font-label-code text-label-code text-on-surface-variant uppercase">Tugas Selesai</span>
                <span class="font-headline-sm text-headline-sm text-on-surface font-extrabold">2.4K+</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Filter Bar & Search Tools -->
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-space-md mb-space-lg reveal">
          <div class="flex flex-wrap items-center gap-space-xs p-1 bg-surface-container rounded-xl w-fit" id="filter-container">
            <button class="filter-tab px-space-md py-space-xs rounded-lg font-label-badge text-label-badge transition-all bg-primary text-on-primary shadow-sm" data-target="all">
              Semua (58)
            </button>
            <button class="filter-tab px-space-md py-space-xs rounded-lg font-label-badge text-label-badge transition-all text-on-surface-variant hover:text-on-surface" data-target="mahasiswa">
              Mahasiswa (34)
            </button>
            <button class="filter-tab px-space-md py-space-xs rounded-lg font-label-badge text-label-badge transition-all text-on-surface-variant hover:text-on-surface" data-target="pelajar">
              Pelajar (14)
            </button>
            <button class="filter-tab px-space-md py-space-xs rounded-lg font-label-badge text-label-badge transition-all text-on-surface-variant hover:text-on-surface" data-target="umum">
              Umum / Profesional (10)
            </button>
          </div>
          
          <div class="flex items-center gap-space-sm">
            <div class="relative w-full sm:w-64">
              <input type="text" id="searchInput" placeholder="Cari topik tugas..." class="w-full bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/60 font-body-sm text-body-sm px-space-md py-space-xs pl-9 rounded-xl shadow-sm outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all"/>
              <span class="material-symbols-outlined absolute left-2.5 top-2 text-on-surface-variant text-lg">search</span>
            </div>
            <div class="hidden sm:flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container rounded-xl font-label-code text-label-code text-on-surface-variant">
              <span class="material-symbols-outlined text-sm">filter_alt</span>
              <span>Sorted: Terbaru</span>
            </div>
          </div>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-12" id="catalogGrid">
          
          <!-- CARD 1 -->
          <article class="catalog-item group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 cursor-pointer reveal reveal-delay-1" data-category="mahasiswa" data-id="item1">
            <div class="relative h-44 w-full overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Skripsi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBupCpP8dVKmGGpSbQX3Sgdjp5GpL5zgZeuOkHmsVZVCuPoR7at2UozNwJ4wR-a_V9xWAEwlg1gf8Fpc7zwxlQ330jMt7Cs1QmNQ8ABl7ESJpFIbFIPkqHcxodDJXMbaJX5SIbLOeCMQbUKdR6B1-ltevpZ8AmhVFPRbKSgspHgmEqoNlVEhCr38MAHN-zBWkRSa8lZMDSphWqoHwMLj8dyL1M2J3pLJfcDriDBrokA"/>
              <div class="absolute top-space-sm left-space-sm flex items-center gap-space-xs">
                <span class="px-space-sm py-space-xs bg-primary text-on-primary font-label-badge text-label-badge rounded-lg shadow-sm">Mahasiswa</span>
                <span class="px-space-sm py-space-xs bg-surface-container-lowest text-primary font-label-code text-label-code font-bold rounded-lg shadow-sm">Grade A</span>
              </div>
              <div class="absolute bottom-space-xs right-space-sm px-space-xs py-0.5 bg-inverse-surface/80 text-inverse-on-surface rounded font-label-code text-label-code backdrop-blur-sm">Turnitin: 6%</div>
            </div>
            <div class="p-space-md flex flex-col flex-1 justify-between gap-space-md">
              <div>
                <div class="flex items-center gap-space-xs text-on-surface-variant font-label-code text-label-code mb-space-xs">
                  <span class="material-symbols-outlined text-sm text-primary">code</span>
                  <span>Informatika • Web Fullstack AI</span>
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2">Skripsi Sistem Informasi - Full Stack Web AI</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-space-xs">Implementasi microservices Laravel + Python FastAPI dengan modul integrasi NLP Gemini untuk klasifikasi sentimen pelanggan.</p>
              </div>
              <div class="pt-space-sm border-t-0 flex items-center justify-between font-label-code text-label-code bg-surface-container-low p-space-xs rounded-lg">
                <div class="flex items-center gap-1 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">schedule</span><span>4 Hari Kerja</span>
                </div>
                <span class="text-primary font-bold inline-flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">Lihat Detail →</span>
              </div>
            </div>
          </article>

          <!-- CARD 2 -->
          <article class="catalog-item group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 cursor-pointer reveal reveal-delay-2" data-category="mahasiswa" data-id="item2">
            <div class="relative h-44 w-full overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Hukum" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwJoJ4h60mjuAYQEoBVTjGfYecxjRKjdaK0vsG09fzyhNXjlK6JwwrLa6x6fQc2HdS76lvbpikC8i9Wu_BY-Xu0i05cvLXmIDhonrFU7Yy5tj9EmS-YMzdGQb4h0ifETysrtL1FBDV21Nh0QWpOUvzcE0THOrkSn6SN1oXEUUPHtroYTy5EItSvDPA2pISjU3XNnRNywC5iLJsEfJQpG_KgXOMwVSvO_ZBBPfo6-h_"/>
              <div class="absolute top-space-sm left-space-sm flex items-center gap-space-xs">
                <span class="px-space-sm py-space-xs bg-primary text-on-primary font-label-badge text-label-badge rounded-lg shadow-sm">Mahasiswa</span>
                <span class="px-space-sm py-space-xs bg-surface-container-lowest text-primary font-label-code text-label-code font-bold rounded-lg shadow-sm">Grade A</span>
              </div>
              <div class="absolute bottom-space-xs right-space-sm px-space-xs py-0.5 bg-inverse-surface/80 text-inverse-on-surface rounded font-label-code text-label-code backdrop-blur-sm">Turnitin: 8%</div>
            </div>
            <div class="p-space-md flex flex-col flex-1 justify-between gap-space-md">
              <div>
                <div class="flex items-center gap-space-xs text-on-surface-variant font-label-code text-label-code mb-space-xs">
                  <span class="material-symbols-outlined text-sm text-primary">gavel</span>
                  <span>Ilmu Hukum • Bisnis Global</span>
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2">Makalah Analisis Hukum Bisnis Internasional</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-space-xs">Kajian perbandingan regulasi cross-border e-commerce Indonesia versus Uni Eropa dengan 32 sitasi jurnal bereputasi.</p>
              </div>
              <div class="pt-space-sm flex items-center justify-between font-label-code text-label-code bg-surface-container-low p-space-xs rounded-lg">
                <div class="flex items-center gap-1 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">schedule</span><span>2 Hari Kerja</span>
                </div>
                <span class="text-primary font-bold inline-flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">Lihat Detail →</span>
              </div>
            </div>
          </article>

          <!-- CARD 3 -->
          <article class="catalog-item group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 cursor-pointer reveal reveal-delay-3" data-category="mahasiswa" data-id="item3">
            <div class="relative h-44 w-full overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Machine Learning" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnlUiLSVCmFIOAj8IyeUovOXkq6bKa5NypNAC4Mg7YJofGv4L5wOon-nTwacgakuoXr8fXNlidMpjn7IJ_sv2EyS7Wy_gQJSeWn8R-OS0oOiVpAeU8w-6v-tUQbAGONz_2wO6VjpD_pz94-QOGN5RgjEVy1Nu3psyV8E3AHKFGZ2cUhniHdyVvCdRn6r8UodDkn-SRD5TJpe7MAwjt-hIf5xGIIuqMgX8a5kGhYY65"/>
              <div class="absolute top-space-sm left-space-sm flex items-center gap-space-xs">
                <span class="px-space-sm py-space-xs bg-primary text-on-primary font-label-badge text-label-badge rounded-lg shadow-sm">Mahasiswa</span>
                <span class="px-space-sm py-space-xs bg-surface-container-lowest text-primary font-label-code text-label-code font-bold rounded-lg shadow-sm">Grade A+</span>
              </div>
              <div class="absolute bottom-space-xs right-space-sm px-space-xs py-0.5 bg-inverse-surface/80 text-inverse-on-surface rounded font-label-code text-label-code backdrop-blur-sm">Akurasi: 94.8%</div>
            </div>
            <div class="p-space-md flex flex-col flex-1 justify-between gap-space-md">
              <div>
                <div class="flex items-center gap-space-xs text-on-surface-variant font-label-code text-label-code mb-space-xs">
                  <span class="material-symbols-outlined text-sm text-primary">psychology</span>
                  <span>Data Science • CNN Vision</span>
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2">Tugas Akhir Machine Learning Python</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-space-xs">Model deteksi penyakit daun kelapa sawit via transfer learning ResNet-50 lengkap dengan source code Google Colab beranotasi.</p>
              </div>
              <div class="pt-space-sm flex items-center justify-between font-label-code text-label-code bg-surface-container-low p-space-xs rounded-lg">
                <div class="flex items-center gap-1 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">schedule</span><span>3 Hari Kerja</span>
                </div>
                <span class="text-primary font-bold inline-flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">Lihat Detail →</span>
              </div>
            </div>
          </article>

          <!-- CARD 4 -->
          <article class="catalog-item group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 cursor-pointer reveal reveal-delay-4" data-category="pelajar" data-id="item4">
            <div class="relative h-44 w-full overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Fisika SMA" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArxYhwIbHzhd6yAKyQj5FERWnUAdBGoqiuT24t0h8l_r4oLpTfuHQMmF_iGfzAumk7VbkkPBca6bNQ0jVoS48KriS_01J6FX1GDXxdwD-JSrVVJ3tzCgqa-SI26IJq7iAqtKAY-RSXMROLCh2OqC6HZLniB6h_gzugX4QoEr4Ixa9UeXcpaxF73mDdnqWlNYtv8VizYXunsK7o2me07jOBT8nzNe5kmwqibb9mUjfp"/>
              <div class="absolute top-space-sm left-space-sm flex items-center gap-space-xs">
                <span class="px-space-sm py-space-xs bg-secondary-container text-on-secondary-fixed font-label-badge text-label-badge rounded-lg shadow-sm">Pelajar SMA</span>
                <span class="px-space-sm py-space-xs bg-surface-container-lowest text-on-surface font-label-code text-label-code font-bold rounded-lg shadow-sm">Nilai: 96</span>
              </div>
              <div class="absolute bottom-space-xs right-space-sm px-space-xs py-0.5 bg-inverse-surface/80 text-inverse-on-surface rounded font-label-code text-label-code backdrop-blur-sm">Format Resmi Diknas</div>
            </div>
            <div class="p-space-md flex flex-col flex-1 justify-between gap-space-md">
              <div>
                <div class="flex items-center gap-space-xs text-on-surface-variant font-label-code text-label-code mb-space-xs">
                  <span class="material-symbols-outlined text-sm text-secondary">science</span>
                  <span>Fisika SMA Kelas 12 • Dinamika</span>
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2">Laporan Praktikum Fisika Dasar SMA</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-space-xs">Analisis matematis gerak osilasi pegas &amp; bandul sederhana dilengkapi tabel olah ketidakpastian serta grafik milimeter blok.</p>
              </div>
              <div class="pt-space-sm flex items-center justify-between font-label-code text-label-code bg-surface-container-low p-space-xs rounded-lg">
                <div class="flex items-center gap-1 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">schedule</span><span>1 Hari Kilat</span>
                </div>
                <span class="text-primary font-bold inline-flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">Lihat Detail →</span>
              </div>
            </div>
          </article>
          
          <!-- CARD 5 -->
          <article class="catalog-item group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 cursor-pointer reveal reveal-delay-1" data-category="mahasiswa" data-id="item5">
            <div class="relative h-44 w-full overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Olah Data" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1f2lfi9UgzzzCLOSLSK0v1IJv3ih2mJ0pJR27VpQ8Gm1CK7Dr4Y7anftXitzNcLqwu1iSal9pM7Rr-PUBbVajMnu4pkpncmhEUBs9n3LnSnpbihE05p_BSNkSbEWYERdGmT5G4G4c5mEFSU6akvaSO0EZD2ZXhv5tkaiglhOI46agp0ikOr2xV03KVuiLHatGUTy3BaTAcWX1M-bX8783ucgCs4k_3CFoJRL7KiIp"/>
              <div class="absolute top-space-sm left-space-sm flex items-center gap-space-xs">
                <span class="px-space-sm py-space-xs bg-primary text-on-primary font-label-badge text-label-badge rounded-lg shadow-sm">Mahasiswa</span>
                <span class="px-space-sm py-space-xs bg-surface-container-lowest text-primary font-label-code text-label-code font-bold rounded-lg shadow-sm">Valid &amp; Reliabel</span>
              </div>
              <div class="absolute bottom-space-xs right-space-sm px-space-xs py-0.5 bg-inverse-surface/80 text-inverse-on-surface rounded font-label-code text-label-code backdrop-blur-sm">N = 250 Responden</div>
            </div>
            <div class="p-space-md flex flex-col flex-1 justify-between gap-space-md">
              <div>
                <div class="flex items-center gap-space-xs text-on-surface-variant font-label-code text-label-code mb-space-xs">
                  <span class="material-symbols-outlined text-sm text-primary">analytics</span>
                  <span>Statistika Bisnis • Skripsi Manajemen</span>
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2">Olah Data SPSS &amp; SEM-PLS Penelitian Pasar</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-space-xs">Uji mediasi Bootstrapping 5000 subsamples dengan interpretasi Bab 4 komprehensif, siap sidang skripsi tanpa revisi statistik.</p>
              </div>
              <div class="pt-space-sm flex items-center justify-between font-label-code text-label-code bg-surface-container-low p-space-xs rounded-lg">
                <div class="flex items-center gap-1 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">schedule</span><span>2 Hari Kerja</span>
                </div>
                <span class="text-primary font-bold inline-flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">Lihat Detail →</span>
              </div>
            </div>
          </article>
          
          <!-- CARD 6 -->
          <article class="catalog-item group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 cursor-pointer reveal reveal-delay-2" data-category="umum" data-id="item6">
            <div class="relative h-44 w-full overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Pitch Deck" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2ytFb74tpescZCTyXpKNuAMW8_OgH9g9-jcXbMi3ur78u4l9eusKpRqiqBKGZMFUlRlzRJTfbDL45196BwbVMaD5_ESQe06WwoAsi2367VOgeImnQJ1BKMfSD71xfpsL9RY6UqsM65GsI-WGIQlflK_L8ArpCavVnVC9o8Ni_LT1NqhfrdTWQjSG41ZaMNUqOcu0AOqQjNd5zz0YYU0t95DMcpG8GzFxYuSFv-6dq"/>
              <div class="absolute top-space-sm left-space-sm flex items-center gap-space-xs">
                <span class="px-space-sm py-space-xs bg-inverse-surface text-inverse-on-surface font-label-badge text-label-badge rounded-lg shadow-sm">Umum / Pro</span>
                <span class="px-space-sm py-space-xs bg-surface-container-lowest text-on-surface font-label-code text-label-code font-bold rounded-lg shadow-sm">18 Slides</span>
              </div>
              <div class="absolute bottom-space-xs right-space-sm px-space-xs py-0.5 bg-inverse-surface/80 text-inverse-on-surface rounded font-label-code text-label-code backdrop-blur-sm">Investor Ready</div>
            </div>
            <div class="p-space-md flex flex-col flex-1 justify-between gap-space-md">
              <div>
                <div class="flex items-center gap-space-xs text-on-surface-variant font-label-code text-label-code mb-space-xs">
                  <span class="material-symbols-outlined text-sm text-tertiary">co_present</span>
                  <span>Business Strategy • UI Presentation</span>
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2">Presentasi Pitch Deck Bisnis Startup</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-space-xs">Desain visual pitch deck pendanaan Seed Round untuk startup EduTech lokal mencakup TAM SAM SOM dan financial projection.</p>
              </div>
              <div class="pt-space-sm flex items-center justify-between font-label-code text-label-code bg-surface-container-low p-space-xs rounded-lg">
                <div class="flex items-center gap-1 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">schedule</span><span>2 Hari Kerja</span>
                </div>
                <span class="text-primary font-bold inline-flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">Lihat Detail →</span>
              </div>
            </div>
          </article>
          
          <!-- CARD 7 -->
          <article class="catalog-item group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 cursor-pointer reveal reveal-delay-3" data-category="mahasiswa" data-id="item7">
            <div class="relative h-44 w-full overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Jurnal Ilmiah" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8PrZLPNIKRdGQX5ogSZimm9dwsCPuAOrlVRjiZkIqz4NAVqtPP0syo-xEi4CS1hpVvimxqfPcWwxrfO3stJA8Wv09SamwsLUld1vTpo5olJBoqM_akZ_B8NjV9VYcFQGetrhdZtMesUX5c86Yn8kPnjVOnPnT1fP1YS08xWHkf3wGLTo54aGMkIa6IXAGdnyLlsur119Vixn48mzb-f71Gp3Q9LkOYv21UG2Svig5"/>
              <div class="absolute top-space-sm left-space-sm flex items-center gap-space-xs">
                <span class="px-space-sm py-space-xs bg-primary text-on-primary font-label-badge text-label-badge rounded-lg shadow-sm">Mahasiswa / Pasca</span>
                <span class="px-space-sm py-space-xs bg-surface-container-lowest text-primary font-label-code text-label-code font-bold rounded-lg shadow-sm">Accepted Sinta 2</span>
              </div>
              <div class="absolute bottom-space-xs right-space-sm px-space-xs py-0.5 bg-inverse-surface/80 text-inverse-on-surface rounded font-label-code text-label-code backdrop-blur-sm">Turnitin: 4%</div>
            </div>
            <div class="p-space-md flex flex-col flex-1 justify-between gap-space-md">
              <div>
                <div class="flex items-center gap-space-xs text-on-surface-variant font-label-code text-label-code mb-space-xs">
                  <span class="material-symbols-outlined text-sm text-primary">menu_book</span>
                  <span>Publikasi • Sosiologi Komunikasi</span>
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2">Jurnal Ilmiah Terindeks Sinta 2</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-space-xs">Redefinisi literasi digital Gen-Z di pedesaan, adaptasi standar penulisan APA 7th edition dan lolos blind review reviewer 1.</p>
              </div>
              <div class="pt-space-sm flex items-center justify-between font-label-code text-label-code bg-surface-container-low p-space-xs rounded-lg">
                <div class="flex items-center gap-1 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">schedule</span><span>5 Hari Kerja</span>
                </div>
                <span class="text-primary font-bold inline-flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">Lihat Detail →</span>
              </div>
            </div>
          </article>
          
          <!-- CARD 8 -->
          <article class="catalog-item group flex flex-col bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 cursor-pointer reveal reveal-delay-4" data-category="mahasiswa" data-id="item8">
            <div class="relative h-44 w-full overflow-hidden bg-surface-container">
              <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="C++ Coding" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw7GCqP76MFHPqqtYXP7_vrNf1kq3CMymESUrBbcH3Cglfi4NEch9oU3o5VEIZsb-TjTvSsiy8uMvoQnuvbmM11MYO8ZvAqvsit1sW6uBFga34G7TH_lk0sreUebP27cfJnQhfv4lwQCXY3NLysHdT3sr1SnjicBBXvzRzdxnLsNNncnfir6gsDmXJcq_uEIxrgWTC9jtkqDrjE8yvNLvq89l4PVEe2kBdmgwJbwMC"/>
              <div class="absolute top-space-sm left-space-sm flex items-center gap-space-xs">
                <span class="px-space-sm py-space-xs bg-primary text-on-primary font-label-badge text-label-badge rounded-lg shadow-sm">Mahasiswa</span>
                <span class="px-space-sm py-space-xs bg-surface-container-lowest text-primary font-label-code text-label-code font-bold rounded-lg shadow-sm">Skor: 100/100</span>
              </div>
              <div class="absolute bottom-space-xs right-space-sm px-space-xs py-0.5 bg-inverse-surface/80 text-inverse-on-surface rounded font-label-code text-label-code backdrop-blur-sm">Zero Memory Leak</div>
            </div>
            <div class="p-space-md flex flex-col flex-1 justify-between gap-space-md">
              <div>
                <div class="flex items-center gap-space-xs text-on-surface-variant font-label-code text-label-code mb-space-xs">
                  <span class="material-symbols-outlined text-sm text-primary">data_object</span>
                  <span>Teknik Informatika • Algoritma</span>
                </div>
                <h3 class="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-2">Tugas Pemrograman C++ Struktur Data</h3>
                <p class="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-space-xs">Implementasi Balanced AVL Tree dan Graph Dijkstra dengan dokumentasi alur memori pointer &amp; manual testing komprehensif.</p>
              </div>
              <div class="pt-space-sm flex items-center justify-between font-label-code text-label-code bg-surface-container-low p-space-xs rounded-lg">
                <div class="flex items-center gap-1 text-on-surface-variant">
                  <span class="material-symbols-outlined text-sm">schedule</span><span>1 Hari Kilat</span>
                </div>
                <span class="text-primary font-bold inline-flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">Lihat Detail →</span>
              </div>
            </div>
          </article>

        </div>

        <!-- Empty State Notification -->
        <div class="hidden flex-col items-center justify-center p-space-xl bg-surface-container rounded-xl text-center my-space-lg" id="emptyNotice">
          <span class="material-symbols-outlined text-4xl text-on-surface-variant mb-space-xs">search_off</span>
          <h4 class="font-headline-sm text-headline-sm text-on-surface">Portofolio tidak ditemukan</h4>
          <p class="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-md">
            Coba gunakan kata kunci lain atau pilih kategori 'Semua' untuk melihat seluruh portofolio pengerjaan kami.
          </p>
        </div>

        <!-- Bottom Action Conversion Banner -->
        <section class="mt-space-xl bg-primary text-on-primary rounded-xl p-space-lg md:p-space-xl relative overflow-hidden shadow-xl reveal">
          <div class="relative z-10 max-w-3xl flex flex-col gap-space-md">
            <div class="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-secondary-container text-on-secondary-fixed rounded-xl w-fit font-label-badge text-label-badge uppercase tracking-wider">
              <span class="material-symbols-outlined text-base">local_offer</span>
              <span>Promo Mahasiswa &amp; Pelajar Baru</span>
            </div>
            <h2 class="font-headline-lg text-headline-lg text-on-primary tracking-tight leading-tight">
              Punya Tugas Serupa? Diskon hingga 25%!
            </h2>
            <p class="font-body-md text-body-md text-on-primary-container max-w-lg">
              Konsultasikan detail tugasmu gratis via WhatsApp.
            </p>
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-xs">
              <a class="inline-flex items-center justify-center gap-space-xs px-space-lg py-space-md bg-secondary-container text-on-secondary-fixed font-headline-sm text-headline-sm font-bold rounded-xl shadow-md hover:bg-secondary-fixed transition-all active:scale-[0.98]" href="https://wa.me/message/RUK4IFU7KE4YK1" rel="noopener noreferrer" target="_blank">
                <span class="material-symbols-outlined">send</span>
                <span>Kirim Tugas ke WhatsApp</span>
              </a>
              <div class="flex items-center gap-space-sm text-on-primary-container font-body-sm text-body-sm">
                <span class="material-symbols-outlined text-secondary-container">verified_user</span>
                <span>Garansi revisi gratis</span>
              </div>
            </div>
          </div>
          <!-- Subtle Decorative Badge Geometry -->
          <div class="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-primary-container/40 pointer-events-none blur-2xl"></div>
        </section>

      </div>

      <!-- Interactive Project Detail Modal -->
      <div class="fixed inset-0 z-[100] hidden bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-space-md md:p-space-lg transition-opacity duration-300" id="projectModal">
        <div class="relative w-full max-w-3xl max-h-[90vh] bg-surface-container-lowest rounded-2xl shadow-2xl overflow-y-auto flex flex-col" id="modalContent">
          <!-- Modal Header -->
          <div class="sticky top-0 z-20 flex items-center justify-between p-space-md bg-surface-container-lowest/95 backdrop-blur-md shadow-sm border-b border-outline-variant/30">
            <div class="flex items-center gap-space-sm">
              <span class="px-space-sm py-space-xs rounded-lg font-label-badge text-label-badge bg-primary text-on-primary" id="modalCategoryBadge">Mahasiswa</span>
              <span class="font-label-code text-label-code text-primary bg-surface-container-high px-space-sm py-space-xs rounded-lg font-bold" id="modalGradeBadge">Grade A</span>
            </div>
            <button class="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-highest transition-colors" id="closeModalBtn">
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <!-- Modal Body -->
          <div class="p-space-md md:p-space-lg flex flex-col gap-space-lg">
            <div>
              <h2 class="font-headline-lg text-headline-lg text-on-surface mb-space-xs" id="modalTitle">Title</h2>
              <div class="flex flex-wrap items-center gap-space-md text-on-surface-variant font-label-code text-label-code">
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">schedule</span> Pengerjaan: <b class="text-on-surface" id="modalDuration">4 Hari</b></span>
                <span>•</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">check_circle</span> Similarity: <b class="text-on-surface" id="modalTurnitin">6% Turnitin</b></span>
                <span>•</span>
                <span class="flex items-center gap-1"><span class="material-symbols-outlined text-sm">school</span> Status: <b class="text-primary">Lulus Sidang Sempurna</b></span>
              </div>
            </div>

            <!-- Brief -->
            <div class="bg-surface-container-low p-space-md rounded-xl">
              <h4 class="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs mb-space-xs">
                <span class="material-symbols-outlined text-primary">assignment</span>
                <span>Brief &amp; Tantangan Klien</span>
              </h4>
              <p class="font-body-md text-body-md text-on-surface-variant" id="modalBrief">Brief content</p>
            </div>

            <!-- Solutions -->
            <div class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm border border-outline-variant/30">
              <h4 class="font-headline-sm text-headline-sm text-on-surface flex items-center gap-space-xs mb-space-xs">
                <span class="material-symbols-outlined text-secondary-container">bolt</span>
                <span>Solusi &amp; Pengerjaan JoKelar</span>
              </h4>
              <ul class="font-body-md text-body-md text-on-surface-variant list-disc pl-5 space-y-1" id="modalSolution">
                <!-- Injected via JS -->
              </ul>
            </div>

            <!-- Feedback -->
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
              <p class="font-body-md text-body-md text-on-surface italic" id="modalFeedback">"Feedback content"</p>
              <div class="mt-space-xs flex items-center justify-between font-label-code text-label-code text-on-surface-variant">
                <span id="modalClientInfo">Client Info</span>
                <span class="text-primary font-bold">100% Verified Review</span>
              </div>
            </div>

            <!-- Modal CTA -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs bg-surface-container p-space-md rounded-xl">
              <div class="flex flex-col">
                <span class="font-headline-sm text-headline-sm text-on-surface">Butuh bantuan di mata kuliah/bidang ini?</span>
                <span class="font-body-sm text-body-sm text-on-surface-variant">Konsultasikan kebutuhanmu, deal harga mahasiswa friendly.</span>
              </div>
              <a class="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm bg-primary text-on-primary font-label-badge text-label-badge uppercase rounded-xl hover:bg-primary-container transition-colors shadow-sm" href="https://wa.me/message/RUK4IFU7KE4YK1" rel="noopener noreferrer" target="_blank">
                <span class="material-symbols-outlined text-base">chat</span>
                <span>Order Tugas Mirip</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  `;
}

export function init() {
  const tabs = document.querySelectorAll('.filter-tab');
  const items = document.querySelectorAll('.catalog-item');
  const emptyNotice = document.getElementById('emptyNotice');
  const searchInput = document.getElementById('searchInput');

  function updateList(category, query) {
    let visibleCount = 0;
    
    items.forEach(item => {
      const itemCat = item.getAttribute('data-category');
      const text = item.innerText.toLowerCase();
      
      const categoryMatch = (category === 'all' || itemCat === category);
      const searchMatch = (query === '' || text.includes(query));

      if (categoryMatch && searchMatch) {
        item.style.display = 'flex';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });

    if (visibleCount === 0) {
      emptyNotice.classList.remove('hidden');
      emptyNotice.classList.add('flex');
    } else {
      emptyNotice.classList.add('hidden');
      emptyNotice.classList.remove('flex');
    }
  }

  // Filter Tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      // Update visual states
      tabs.forEach(t => {
        t.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
        t.classList.add('text-on-surface-variant');
      });
      e.target.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');
      e.target.classList.remove('text-on-surface-variant');

      // Filter
      const category = e.target.getAttribute('data-target');
      const query = searchInput ? searchInput.value.toLowerCase() : '';
      updateList(category, query);
    });
  });

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
      const query = e.target.value.toLowerCase();
      
      // Find active category
      let activeCategory = 'all';
      tabs.forEach(t => {
        if (t.classList.contains('bg-primary')) {
          activeCategory = t.getAttribute('data-target');
        }
      });

      updateList(activeCategory, query);
    });
  }

  // Modal Logic
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('closeModalBtn');
  const modalContent = document.getElementById('modalContent');

  function openModal(id) {
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

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  // Bind clicks to cards
  items.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-id');
      openModal(id);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Keyboard escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
}
