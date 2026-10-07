# JoKeLar

JoKeLar adalah proyek website modern yang dibangun menggunakan:
- **HTML5** & **Vanilla JavaScript**
- **Tailwind CSS v3** untuk styling yang cepat, modern, dan responsif
- **Vite** sebagai *build tool* yang super cepat

## Persyaratan
Pastikan Anda sudah menginstal [Node.js](https://nodejs.org/) (versi terbaru sangat direkomendasikan).

## Instalasi

1. Pastikan Anda berada di dalam direktori proyek ini.
2. Instal semua dependensi yang dibutuhkan:

```bash
npm install
```

## Menjalankan Server Pengembangan Lokal

Untuk menjalankan website pada server lokal dengan fitur *Hot Module Replacement* (HMR), jalankan perintah:

```bash
npm run dev
```

Website akan otomatis terbuka di browser atau Anda bisa mengaksesnya melalui URL yang tertera di terminal (biasanya `http://localhost:5173/`).

## Membangun untuk Produksi (Deployment)

Proyek ini sudah dikonfigurasi dan siap untuk di-deploy kapan saja tanpa harus mengubah struktur atau file. Untuk membangun file produksi, jalankan:

```bash
npm run build
```

Perintah tersebut akan menghasilkan folder `dist/` yang berisi file HTML, CSS, dan JS yang sudah diminifikasi dan siap untuk diunggah (deploy) ke layanan hosting seperti Vercel, Netlify, atau GitHub Pages.

## Pratinjau Build Lokal

Untuk memastikan hasil build produksi sudah benar sebelum di-deploy, Anda bisa menjalankannya secara lokal:

```bash
npm run preview
```

---

Selamat Mengembangkan JoKeLar!
