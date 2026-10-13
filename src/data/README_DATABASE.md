# Panduan Integrasi Database JoKelar

Dokumen ini menjelaskan struktur data dan cara menghubungkan database asli (misal: Supabase, Firebase, MySQL, PostgreSQL, atau REST API) ke aplikasi web JoKelar.

---

## 1. Lokasi File Konfigurasi Data
Semua schema, data aktif, dan template cadangan terpusat di:
📁 [`src/data/databaseTemplates.js`](file:///d:/Kuliah/Tugas%20Kuliah/Semester%205/Technopreneurship/web_jokelar/src/data/databaseTemplates.js)

---

## 2. Struktur Data Aktif vs Data Template

Saat ini semua data aktif di-set **kosong (`[]` atau `null`)** agar website tidak menampilkan data dummy palsu:

```javascript
// Di file src/data/databaseTemplates.js
export const activeFounders = [];          // Halaman Pendiri
export const activeCatalogItems = [];      // Halaman Katalog Tugas
export const activeTestimonials = [];      // Halaman Beranda (Testimoni)
export const activeFeaturedServices = [];  // Halaman Beranda (Layanan Populer)
export const activeHeroOrder = null;       // Halaman Beranda (Live Order Tracker)
```

Jika array ini kosong, tampilan website secara otomatis menampilkan **Empty State** elegan yang memberi tahu pengunjung bahwa data sedang disiapkan.

---

## 3. Schema & Format Data

### A. Tim Pendiri (`Founder`)
Digunakan oleh: [`src/pages/Pendiri.js`](file:///d:/Kuliah/Tugas%20Kuliah/Semester%205/Technopreneurship/web_jokelar/src/pages/Pendiri.js)
```json
{
  "id": 1,
  "name": "Nama Lengkap Pendiri",
  "role": "Co-Founder / Posisi",
  "image": "https://url-foto-pendiri.jpg",
  "bio": "Deskripsi singkat latar belakang (opsional)"
}
```

### B. Katalog & Portofolio Tugas (`CatalogItem`)
Digunakan oleh: [`src/pages/Katalog.js`](file:///d:/Kuliah/Tugas%20Kuliah/Semester%205/Technopreneurship/web_jokelar/src/pages/Katalog.js)
```json
{
  "id": "item1",
  "category": "mahasiswa", // Pilihan: 'mahasiswa' | 'pelajar' | 'umum'
  "categoryLabel": "Mahasiswa",
  "subject": "Informatika",
  "title": "Skripsi Sistem Informasi - Full Stack Web AI",
  "image": "https://url-gambar-cover.jpg",
  "alt": "Deskripsi gambar",
  "statLabel": "Turnitin 6%",
  "grade": "Nilai A (95/100)",
  "duration": "4 Hari",
  "turnitin": "6% Turnitin",
  "statusText": "Lulus Sidang Sempurna",
  "brief": "Deskripsi kebutuhan dan tantangan tugas dari klien...",
  "solutions": [
    "Poin solusi yang dikerjakan 1",
    "Poin solusi yang dikerjakan 2"
  ],
  "feedback": "Testimoni langsung pemesan tugas...",
  "client": "Rian F. • Mahasiswa Univ. Negeri Jakarta"
}
```

### C. Testimoni Klien (`Testimonial`)
Digunakan oleh: [`src/pages/Beranda.js`](file:///d:/Kuliah/Tugas%20Kuliah/Semester%205/Technopreneurship/web_jokelar/src/pages/Beranda.js)
```json
{
  "id": 1,
  "clientName": "Rian A.",
  "clientInfo": "S1 Ilmu Komputer, Kampus Depok",
  "initials": "RA",
  "quote": "Praktikum Struktur Data sisa 8 jam langsung beres 4 jam...",
  "rating": 5
}
```

### D. Layanan Populer (`FeaturedService`)
Digunakan oleh: [`src/pages/Beranda.js`](file:///d:/Kuliah/Tugas%20Kuliah/Semester%205/Technopreneurship/web_jokelar/src/pages/Beranda.js)
```json
{
  "id": 1,
  "title": "Makalah, Essay & Jurnal Ilmiah",
  "description": "Format baku kampus (APA/IEEE), sitasi Mendeley, dan abstrak bilingual.",
  "startingPrice": "Rp 45.000",
  "priceUnit": "/tugas",
  "badgeText": "Paling Diminati",
  "badgeClass": "bg-secondary-container text-on-secondary-fixed",
  "image": "https://url-gambar-layanan.jpg",
  "alt": "Makalah dan Essay",
  "targetPath": "katalog-tugas"
}
```

### E. Live Order Tracker di Hero (`HeroOrder`)
Digunakan oleh: [`src/pages/Beranda.js`](file:///d:/Kuliah/Tugas%20Kuliah/Semester%205/Technopreneurship/web_jokelar/src/pages/Beranda.js)
```json
{
  "orderId": "#9942",
  "title": "Aplikasi Kasir POS & Laporan",
  "meta": "Teknik Informatika • Deadline 24 Jam",
  "progressPercent": 100,
  "progressStatus": "100% Selesai",
  "plagiarismScore": "4% Turnitin",
  "downloadStatus": "Siap Diunduh"
}
```

---

## 4. Cara Menghubungkan ke Database

### Opsi A: REST API / Backend Sendiri
Di halaman atau fungsi pembantu, Anda cukup melakukan `fetch`:
```javascript
// Contoh di src/pages/Pendiri.js atau src/data/databaseTemplates.js:
export async function loadFounders() {
  const response = await fetch('https://api.jokelar.id/founders');
  const data = await response.json();
  return data;
}
```

### Opsi B: Supabase
```javascript
import { createClient } from '@supabase/supabase-js';
const supabase = createClient('SUPABASE_URL', 'SUPABASE_ANON_KEY');

// Ambil data katalog:
const { data: catalogItems } = await supabase.from('catalog_items').select('*');
```

### Opsi C: Mengisi Data Statis Secara Langsung
Jika belum membuat server backend dan ingin langsung menggunakan data asli secara statis, cukup masukkan objek data asli ke dalam array `activeFounders`, `activeCatalogItems`, dll. di [`src/data/databaseTemplates.js`](file:///d:/Kuliah/Tugas%20Kuliah/Semester%205/Technopreneurship/web_jokelar/src/data/databaseTemplates.js).
