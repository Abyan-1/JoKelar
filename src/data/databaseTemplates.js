/**
 * ==============================================================================
 * JoKelar — Database Templates & Schema Definitions
 * ==============================================================================
 * File ini berfungsi sebagai cetak biru (blueprint / template) data untuk integrasi
 * ke Database (seperti Supabase, Firebase, MySQL, PostgreSQL, atau REST API).
 * 
 * Data dummy aktif saat ini DIKOSONGKAN (array kosong / null) agar tampilan web
 * tidak menampilkan data palsu sebelum database resmi disiapkan.
 * 
 * Anda dapat:
 * 1. Menghubungkan endpoint database asli pada fungsi fetch helper di bawah.
 * 2. Mengisi array aktif secara manual untuk data statis awal.
 * 3. Mengacu pada 'mockTemplates' sebagai referensi struktur field & tipe data.
 * ==============================================================================
 */

// ==============================================================================
// 1. DATA AKTIF (Saat ini KOSONG menunggu setup database)
// ==============================================================================

/**
 * Data Tim Pendiri yang aktif ditampilkan pada halaman 'Pendiri'.
 * Set ke [] (kosong) agar tidak menampilkan data dummy.
 * @type {Array<Founder>}
 */
export const activeFounders = [];

/**
 * Data Katalog & Portofolio Tugas yang aktif ditampilkan pada halaman 'Katalog Tugas'.
 * Set ke [] (kosong) agar tidak menampilkan data dummy.
 * @type {Array<CatalogItem>}
 */
export const activeCatalogItems = [];

/**
 * Data Testimoni Mahasiswa yang aktif ditampilkan pada halaman 'Beranda'.
 * Set ke [] (kosong) agar tidak menampilkan testimoni palsu.
 * @type {Array<Testimonial>}
 */
export const activeTestimonials = [];

/**
 * Data Layanan Populer yang aktif ditampilkan pada 'Beranda' (Katalog Populer).
 * Set ke [] (kosong) agar tidak menampilkan data dummy.
 * @type {Array<FeaturedService>}
 */
export const activeFeaturedServices = [];

/**
 * Data Contoh Pesanan Aktif untuk hero tracker pada 'Beranda'.
 * Set ke null agar tidak menampilkan pesanan dummy.
 * @type {HeroOrder | null}
 */
export const activeHeroOrder = null;


// ==============================================================================
// 2. TEMPLATE STRUKTUR DATA (SCHEMA JSDoc)
// ==============================================================================

/**
 * @typedef {Object} Founder
 * @property {string|number} id - ID unik pendiri
 * @property {string} name - Nama lengkap & gelar
 * @property {string} role - Jabatan / peran (contoh: "Co-Founder", "Chief Technology Officer")
 * @property {string} image - URL foto resmi pendiri
 * @property {string} [bio] - Deskripsi singkat latar belakang / keahlian (opsional)
 * @property {string} [linkedin] - Tautan profil LinkedIn (opsional)
 */

/**
 * @typedef {Object} CatalogItem
 * @property {string} id - Identifier unik (contoh: "item-1")
 * @property {string} category - Kategori filter: 'mahasiswa' | 'pelajar' | 'umum'
 * @property {string} categoryLabel - Label tampilan badge (contoh: "Mahasiswa", "Pelajar SMA", "Umum / Pro")
 * @property {string} categoryBadgeClass - Class styling badge (contoh: "bg-primary text-on-primary")
 * @property {string} subject - Bidang studi (contoh: "Informatika", "Ilmu Hukum", "Statistika")
 * @property {string} title - Judul portofolio / pengerjaan tugas
 * @property {string} image - URL gambar cover tugas
 * @property {string} alt - Deskripsi aksesibilitas gambar
 * @property {string} statLabel - Highlight hasil singkat (contoh: "Turnitin 6%", "Skor 100/100")
 * @property {string} grade - Nilai / pencapaian (contoh: "Grade A (95/100)")
 * @property {string} duration - Lama waktu pengerjaan (contoh: "2 Hari", "24 Jam")
 * @property {string} turnitin - Hasil cek plagiasi (contoh: "Turnitin 6%")
 * @property {string} statusText - Status akhir (contoh: "Lulus Sidang Sempurna")
 * @property {string} brief - Deskripsi tantangan & kebutuhan tugas
 * @property {string[]} solutions - Poin-poin solusi yang dikerjakan tim JoKelar
 * @property {string} feedback - Ulasan langsung dari pemesan
 * @property {string} client - Keterangan mahasiswa/institusi yang disamarkan (contoh: "Rian F. • Univ. Negeri Jakarta")
 */

/**
 * @typedef {Object} Testimonial
 * @property {string|number} id - ID unik ulasan
 * @property {string} clientName - Nama / inisial klien (contoh: "Rian A.")
 * @property {string} clientInfo - Jurusan & universitas (contoh: "S1 Ilmu Komputer, Kampus Depok")
 * @property {string} initials - Inisial untuk avatar placeholder (contoh: "RA")
 * @property {string} quote - Isi testimoni klien
 * @property {number} rating - Skor bintang (1 s/d 5)
 */

/**
 * @typedef {Object} FeaturedService
 * @property {string|number} id - ID unik layanan
 * @property {string} title - Nama layanan (contoh: "Makalah, Essay & Jurnal Ilmiah")
 * @property {string} description - Keterangan singkat layanan
 * @property {string} startingPrice - Harga mulai dari (contoh: "Rp 45.000")
 * @property {string} priceUnit - Satuan harga (contoh: "/tugas", "/modul", "/dataset")
 * @property {string} badgeText - Badge sorotan (contoh: "Paling Diminati", "Praktikum IT")
 * @property {string} badgeClass - Warna badge (contoh: "bg-secondary-container text-on-secondary-fixed")
 * @property {string} image - URL gambar visual pendukung
 * @property {string} alt - Deskripsi gambar
 * @property {string} targetPath - Route navigasi (biasanya "katalog-tugas")
 */

/**
 * @typedef {Object} HeroOrder
 * @property {string} orderId - Nomor pesanan (contoh: "#9942")
 * @property {string} title - Judul pengerjaan tugas
 * @property {string} meta - Kategori & batas waktu (contoh: "Teknik Informatika • Deadline 24 Jam")
 * @property {number} progressPercent - Persentase progress (0 - 100)
 * @property {string} progressStatus - Status label (contoh: "Sedang Diproses", "100% Selesai")
 * @property {string} plagiarismScore - Hasil Turnitin (contoh: "4% Turnitin")
 * @property {string} downloadStatus - Kesiapan unduhan (contoh: "Siap Diunduh")
 */


// ==============================================================================
// 3. REFERENSI MOCK DATA (Gunakan sebagai contoh format payload dari Database)
// ==============================================================================

export const mockTemplates = {
  /**
   * Contoh struktur data untuk Tim Pendiri (Pendiri.js)
   */
  founders: [
    {
      id: 1,
      name: "Alifian Pratama",
      role: "Co-Founder",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYpA-xdaXPkuoiU6D9k8lVJt3zoGN5wWkffspR7FAdWrEO6U9naNT6o5r3c6zoYuDWu7Q8e8Hkf7_74E_thUsD-vd4eDQWbTyXvoEClEICr3e_0mhqmO8OPGQkqhCYiIEe3Ephn7rUTyZyTqsdzSkDQO55U6s7S1J6ZDEkfSkmmCMj_fsb2uDesknTiU75iDlwESMWNd-jHXfabiYBzobs9ELj-FJib9gI0-CVU4jp",
      bio: "Membangun ekosistem bantuan akademik yang berintegritas dan adaptif."
    },
    {
      id: 2,
      name: "Raditya Mahendra",
      role: "Co-Founder",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXWYqP2moZsPVi8qbrIvA3kw82uJQWFefFGLWak7bK6lU70HBElNj_02IQZMl6Mpov6UA-yw9Tj9v0o6PRsY_UT0Iq72y6VbgfJqhTF5NVS_6g27oWzVHb-O6patyuB5_nGphRp0jNN0tF1sXescWpUG1Mx7wteR6TgHplVs3eH_ckpGcMR6PYDzZtZO5GPKeqhhbF1tYt-3teluIwp3YaAeYZgyYqNGXQJvWl9LJM",
      bio: "Fokus pada operasional pengerjaan berkualitas tinggi dan tepat waktu."
    },
    {
      id: 3,
      name: "Dimas Arya Sena",
      role: "Co-Founder",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwkx_Iv_TfJ2y1Spdc8khu7r_SKDzWpZ-21B-Jc9m-h7QQ2ZtgiGfl3e0s6cOAn_gloGANdTsroiom-V47Rx1VqY3yXTSRvPujTnVIN_S_Hbwd-lm2uCt0bT9EfjW3NHC8Jpmx72vrtBrjONYheHU60tPr7dEhw8FVqxFN2sKBYaeSLoZPaEW7g3vYeZnlYhyimSfqSKURislEAJWoEynYJsMVkiapd7u6rhPuh_uZ",
      bio: "Mengembangkan riset kurikulum dan standarisasi bebas plagiasi."
    },
    {
      id: 4,
      name: "Farhan Kurniawan",
      role: "Co-Founder",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTZGt8YC7NXvyt_atQI3dzMLclxoP3nelXKnvrrWtMdagvELr8R0dCHaXVs3egd05n9bMFZdfGTNs8qmWnnLp_SRWzMduAzsD6vUnmOX-DqjOD0d9lMccjtupAwH1Z7JyiXnvwFotJUDUdM7vUoXpSMbZn3XkZkLaUeVocS0MgradRQCN17lOgsIFamRClmzvCzeqSPp-9UGEs0ua7zaZ3Jmyg76X_iZ5i01Jf9VMN",
      bio: "Menjalin kemitraan mentor dan pengembangan sistem otomasi JoKelar."
    }
  ],

  /**
   * Contoh struktur data untuk Katalog Tugas (Katalog.js)
   */
  catalogItems: [
    {
      id: "item1",
      category: "mahasiswa",
      categoryLabel: "Mahasiswa",
      categoryBadgeClass: "bg-primary text-on-primary",
      subject: "Informatika",
      title: "Skripsi Sistem Informasi - Full Stack Web AI",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBupCpP8dVKmGGpSbQX3Sgdjp5GpL5zgZeuOkHmsVZVCuPoR7at2UozNwJ4wR-a_V9xWAEwlg1gf8Fpc7zwxlQ330jMt7Cs1QmNQ8ABl7ESJpFIbFIPkqHcxodDJXMbaJX5SIbLOeCMQbUKdR6B1-ltevpZ8AmhVFPRbKSgspHgmEqoNlVEhCr38MAHN-zBWkRSa8lZMDSphWqoHwMLj8dyL1M2J3pLJfcDriDBrokA",
      alt: "Skripsi Sistem Informasi",
      statLabel: "Turnitin 6%",
      grade: "Nilai A (95/100)",
      duration: "4 Hari",
      turnitin: "6% Turnitin",
      statusText: "Lulus Sidang Sempurna",
      brief: "Klien membutuhkan prototipe sistem web cerdas dengan deadline sidang skripsi yang sangat mepet. Dosen penguji meminta integrasi model kecerdasan buatan NLP dan pengujian sistem ISO 25010 secara lengkap.",
      solutions: [
        "Menyusun arsitektur sistem berbasis RESTful API dengan FastAPI dan dashboard frontend modern.",
        "Melakukan fine-tuning model klasifikasi teks bahasa Indonesia dengan benchmark F1-Score 92%.",
        "Menulis Bab 4 (Hasil & Pembahasan) beserta Bab 5 lengkap dengan lampiran kode beranotasi rapi."
      ],
      feedback: "Alhamdulillah dapat A dari dewan penguji! Pengerjaan bener-bener cepet dan pas ditanya pas sidang saya bisa jawab karena dibuatin modul penjelasan lengkap. Makasih banyak JoKelar!",
      client: "Rian F. • Mahasiswa Univ. Negeri Jakarta"
    },
    {
      id: "item2",
      category: "mahasiswa",
      categoryLabel: "Mahasiswa",
      categoryBadgeClass: "bg-primary text-on-primary",
      subject: "Ilmu Hukum",
      title: "Makalah Analisis Hukum Bisnis Internasional",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwJoJ4h60mjuAYQEoBVTjGfYecxjRKjdaK0vsG09fzyhNXjlK6JwwrLa6x6fQc2HdS76lvbpikC8i9Wu_BY-Xu0i05cvLXmIDhonrFU7Yy5tj9EmS-YMzdGQb4h0ifETysrtL1FBDV21Nh0QWpOUvzcE0THOrkSn6SN1oXEUUPHtroYTy5EItSvDPA2pISjU3XNnRNywC5iLJsEfJQpG_KgXOMwVSvO_ZBBPfo6-h_",
      alt: "Makalah Hukum Bisnis",
      statLabel: "Turnitin 8%",
      grade: "Grade A (92/100)",
      duration: "2 Hari",
      turnitin: "8% Turnitin",
      statusText: "Diterima Tanpa Catatan",
      brief: "Penyusunan telaah komparatif regulasi perlindungan data pribadi konsumen dalam transaksi lintas batas Indonesia versus General Data Protection Regulation (GDPR) Uni Eropa.",
      solutions: [
        "Mengumpulkan 32 jurnal primer terindeks Scopus & Sinta untuk referensi komprehensif.",
        "Melakukan analisis yuridis normatif dengan pendekatan perundang-undangan (statute approach).",
        "Pemeriksaan Turnitin berlapis di kampus sehingga hasil orisinal murni di bawah 10%."
      ],
      feedback: "Dosen saya sangat kritis soal sitasi dan parafrase, tapi tugas dari JoKelar langsung di-acc tanpa catatan revisi. Keren banget!",
      client: "Aulia S. • Mahasiswa Hukum Univ. Diponegoro"
    }
  ],

  /**
   * Contoh struktur data untuk Testimoni Klien (Beranda.js)
   */
  testimonials: [
    {
      id: 1,
      clientName: "Rian A.",
      clientInfo: "S1 Ilmu Komputer, Kampus Depok",
      initials: "RA",
      quote: "Praktikum Struktur Data sisa 8 jam langsung beres 4 jam plus video penjelasan. Hasilnya dapet nilai A!",
      rating: 5
    },
    {
      id: 2,
      clientName: "Nadia W.",
      clientInfo: "S1 Manajemen, Universitas di Bandung",
      initials: "NW",
      quote: "Olah data SmartPLS macet 2 bulan beres dalam 2 hari, dibimbing mentor sampai tuntas buat sidang.",
      rating: 5
    },
    {
      id: 3,
      clientName: "Faris K.",
      clientInfo: "S1 Hukum, Universitas di Yogyakarta",
      initials: "FK",
      quote: "Makalah 25 halaman jurnal Scopus beres dengan Turnitin 6%. Harga ramah kantong dan admin responsif.",
      rating: 5
    }
  ],

  /**
   * Contoh struktur data untuk Layanan Populer (Beranda.js)
   */
  featuredServices: [
    {
      id: 1,
      title: "Makalah, Essay & Jurnal Ilmiah",
      description: "Format baku kampus (APA/IEEE), sitasi Mendeley, dan abstrak bilingual.",
      startingPrice: "Rp 45.000",
      priceUnit: "/tugas",
      badgeText: "Paling Diminati",
      badgeClass: "bg-secondary-container text-on-secondary-fixed",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFnoeW5xZyBlTYW9GNZA9q_A_8QcUx3CG1dHDhfjmifg9fz9UJvmy_bvlEnNQXIQP_3ehI3HNcgS6bOlLWhLb0u8rh2u4DiSU6PJ7qzpKfM9hzYzQjYjuVXIjtc3jRLIYgCzVP0N_ssEaqiDFgVwuxRjdKwNU5gncnU3ohuO8AjQ38wmqIdehKERiwoms8YKZ4IuTT4QIQuzQMcBB5OT-tCHg6w2kwfNiIbCeyTtCr",
      alt: "Makalah dan Essay",
      targetPath: "katalog-tugas"
    },
    {
      id: 2,
      title: "Tugas Coding, Web & Mobile App",
      description: "Source code rapi, komentar jelas, serta video tutorial eksekusi script.",
      startingPrice: "Rp 75.000",
      priceUnit: "/modul",
      badgeText: "Praktikum IT",
      badgeClass: "bg-primary text-on-primary",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOnNHn5OnaM75CSa4QvXrk0Onxhc_XaCMHef9fzFH4nubdHagkiEHkaZjbDiCX_ReCquu1Uh3gHfT3wqol5G8HFLQRolBCbGGqWsEPJpBIxOx_88VsodvdSWP_bHpnvU7XDPB0lTCnw68ASN5mu-rCdlffpa4sPAT6aL0M0EGF8ESU0ntmF2dyKat7jGEnuawazwjWijFC9xOwQnEQWEF3IKVIIlxExISEEkp70aR4",
      alt: "Coding dan Aplikasi",
      targetPath: "katalog-tugas"
    },
    {
      id: 3,
      title: "Olah Data SPSS, SEM-PLS & Bab 4 Skripsi",
      description: "Uji SPSS, SmartPLS, AMOS, beserta interpretasi narasi Bab 4 skripsi.",
      startingPrice: "Rp 150.000",
      priceUnit: "/dataset",
      badgeText: "Tingkat Lanjut",
      badgeClass: "bg-surface-container-highest text-primary",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwFtw61nnuUbwLYOS1YRSpUuB7xWmL0k22Rft9w-uBFlNiMOGfWj4nzk7QhE_xevru4u7yZNq2oxwBJjpItk13UClRxYJAR5X-PybVHospT7XJnHHLXhyR0vO34JVkHDJq8Po3SVlML5y2TwiMZilcr1zXZpf-aPw3XQq84REO1NYnBPmLgUw8CROMPlB7EAz5Qk1krWL_jwV1kh-98SDAqTXEHjRqlmLJ6JdaraGK",
      alt: "Statistika dan Skripsi",
      targetPath: "katalog-tugas"
    }
  ],

  /**
   * Contoh data live tracker pesanan di Hero (Beranda.js)
   */
  heroOrder: {
    orderId: "#9942",
    title: "Aplikasi Kasir POS & Laporan",
    meta: "Teknik Informatika • Deadline 24 Jam",
    progressPercent: 100,
    progressStatus: "100% Selesai",
    plagiarismScore: "4% Turnitin",
    downloadStatus: "Siap Diunduh"
  }
};


// ==============================================================================
// 4. CONTOH IMPLEMENTASI SERVICE / HELPER DATABASE
// ==============================================================================
/**
 * Contoh fungsi pemanggilan API / Database jika nanti sudah dipasang:
 * 
 * export async function fetchFoundersFromDB() {
 *   try {
 *     // Contoh menggunakan fetch REST API:
 *     // const res = await fetch('https://api.jokelar.id/founders');
 *     // return await res.json();
 *     
 *     // Contoh menggunakan Supabase:
 *     // const { data, error } = await supabase.from('founders').select('*');
 *     // return data || [];
 *     
 *     return activeFounders;
 *   } catch (error) {
 *     console.error('Gagal mengambil data founders:', error);
 *     return [];
 *   }
 * }
 */
