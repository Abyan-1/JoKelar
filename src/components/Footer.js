/**
 * JoKelar — Shared Footer Component
 * Renders the site-wide footer with navigation, categories, and contact.
 */

/**
 * Render the footer HTML.
 * @returns {string}
 */
export function renderFooter() {
  return `
    <footer class="w-full bg-surface-container-low mt-space-xl">
      <div class="w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin py-space-xl">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-space-lg mb-space-xl">
          <!-- Brand Column -->
          <div class="md:col-span-5 flex flex-col gap-space-md">
            <div class="flex items-center gap-space-sm">
              <div class="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary font-headline-sm text-headline-sm font-bold">JK</div>
              <span class="font-headline-sm text-headline-sm text-on-surface tracking-tight">JoKelar</span>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant max-w-sm">Platform asisten tugas akademik resmi &amp; terpercaya untuk pelajar SMP, SMA, dan mahasiswa seluruh Indonesia. Cepat, bergaransi, dan anti-plagiarisme.</p>
            <div class="inline-flex items-center gap-space-xs px-space-sm py-space-xs bg-surface-container rounded-xl w-fit">
              <span class="w-2 h-2 rounded-full bg-secondary-container"></span>
              <span class="font-label-badge text-label-badge text-on-surface">100% Student Verified Service</span>
            </div>
          </div>

          <!-- Navigation Column -->
          <div class="md:col-span-2 flex flex-col gap-space-sm">
            <h3 class="font-label-badge text-label-badge text-on-surface uppercase tracking-wider">Navigasi</h3>
            <ul class="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li><a class="hover:text-primary transition-colors" data-path="beranda" href="#beranda">Beranda</a></li>
              <li><a class="hover:text-primary transition-colors" data-path="katalog-tugas" href="#katalog-tugas">Katalog Tugas</a></li>
              <li><a class="hover:text-primary transition-colors" data-path="pendiri" href="#pendiri">Pendiri &amp; Tim</a></li>
              <li><a class="hover:text-primary transition-colors" data-path="kontak" href="#kontak">Hubungi Kami</a></li>
            </ul>
          </div>

          <!-- Categories Column -->
          <div class="md:col-span-2 flex flex-col gap-space-sm">
            <h3 class="font-label-badge text-label-badge text-on-surface uppercase tracking-wider">Kategori</h3>
            <ul class="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li><span class="hover:text-on-surface cursor-pointer" data-path="katalog-tugas">Makalah &amp; Esai</span></li>
              <li><span class="hover:text-on-surface cursor-pointer" data-path="katalog-tugas">Coding &amp; IT</span></li>
              <li><span class="hover:text-on-surface cursor-pointer" data-path="katalog-tugas">Olah Data &amp; Skripsi</span></li>
              <li><span class="hover:text-on-surface cursor-pointer" data-path="katalog-tugas">Tugas Sekolah SMA</span></li>
            </ul>
          </div>

          <!-- Consultation Column -->
          <div class="md:col-span-3 flex flex-col gap-space-sm">
            <h3 class="font-label-badge text-label-badge text-on-surface uppercase tracking-wider">Layanan Konsultasi</h3>
            <p class="font-body-sm text-body-sm text-on-surface-variant">Respon cepat 24/7 via WhatsApp bot &amp; admin support resmi.</p>
            <div class="flex items-center gap-space-xs font-label-code text-label-code text-primary bg-surface-container-high px-space-sm py-space-xs rounded-lg w-fit">
              <span class="material-symbols-outlined text-sm">support_agent</span>
              <span>jokelartugas@gmail.com</span>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant border-t border-outline-variant/30">
          <p>© 2025 JoKelar Academic Assistant. Hak Cipta Dilindungi.</p>
          <div class="flex items-center gap-space-md">
            <span class="hover:text-on-surface cursor-pointer">Kebijakan Privasi</span>
            <span class="hover:text-on-surface cursor-pointer">Syarat Layanan</span>
            <span class="hover:text-on-surface cursor-pointer">Standar Integritas</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
