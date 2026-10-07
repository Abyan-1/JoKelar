/**
 * JoKelar — Pendiri (Founders) Page
 */

export function render() {
  return `
    <div class="flex flex-col w-full page-enter">
      <!-- Interactive Background Canvas with Grid Lines -->
      <div class="relative w-full overflow-hidden py-space-xl md:py-space-xl">
        <!-- Subtle Neo-Retro Engineering Grid Backing -->
        <div class="absolute inset-0 pointer-events-none opacity-[0.45]" style="background-image: linear-gradient(to right, #c4c5d7 1px, transparent 1px), linear-gradient(to bottom, #c4c5d7 1px, transparent 1px); background-size: 32px 32px;"></div>
        
        <!-- Ambient Radial Glows -->
        <div class="absolute -top-32 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-24 right-1/4 w-80 h-80 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>
        
        <div class="relative max-w-[1280px] w-full mx-auto px-margin-mobile md:px-margin flex flex-col items-center">
          
          <!-- Top Eyebrow Badge -->
          <div class="inline-flex items-center gap-space-xs px-space-md py-1.5 bg-surface-container-lowest rounded-full shadow-sm mb-space-md transition-transform hover:-translate-y-0.5 reveal">
            <span class="w-2.5 h-2.5 rounded-full bg-secondary-container"></span>
            <span class="font-label-code text-label-code text-on-surface uppercase tracking-wider font-bold">Four Minds, One Mission</span>
          </div>

          <!-- Main Headline & Subtitle -->
          <div class="text-center max-w-2xl flex flex-col items-center mb-space-xl reveal reveal-delay-1">
            <h1 class="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-xs">
              Tim Pendiri JoKelar
            </h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant text-center max-w-xl">
              Inisiator di balik solusi tugas cepat, aman, dan terpercaya bagi generasi pelajar Indonesia.
            </p>
          </div>

          <!-- Exactly 4 Columns in a single row on desktop, 2x2 responsive grid on tablet/mobile -->
          <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-space-md lg:gap-space-lg mb-space-xl">
            <!-- Founder 1 -->
            <div class="group flex flex-col items-center text-center p-space-md bg-surface-container-lowest/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 reveal reveal-delay-1">
              <div class="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 mb-space-md overflow-hidden rounded-full p-1 bg-gradient-to-tr from-primary via-primary-container to-secondary-container shadow-md group-hover:shadow-primary/30 transition-all duration-300">
                <div class="w-full h-full rounded-full overflow-hidden bg-surface-container">
                  <img class="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500 ease-out" alt="Alifian Pratama" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYpA-xdaXPkuoiU6D9k8lVJt3zoGN5wWkffspR7FAdWrEO6U9naNT6o5r3c6zoYuDWu7Q8e8Hkf7_74E_thUsD-vd4eDQWbTyXvoEClEICr3e_0mhqmO8OPGQkqhCYiIEe3Ephn7rUTyZyTqsdzSkDQO55U6s7S1J6ZDEkfSkmmCMj_fsb2uDesknTiU75iDlwESMWNd-jHXfabiYBzobs9ELj-FJib9gI0-CVU4jp"/>
                </div>
                <!-- Accent Corner Dot Badge -->
                <div class="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
                  <span class="font-label-code text-[10px] font-bold">01</span>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <span class="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">Alifian Pratama</span>
                <span class="font-label-code text-label-code text-on-surface-variant font-medium mt-1">Co-Founder</span>
              </div>
            </div>

            <!-- Founder 2 -->
            <div class="group flex flex-col items-center text-center p-space-md bg-surface-container-lowest/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 reveal reveal-delay-2">
              <div class="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 mb-space-md overflow-hidden rounded-full p-1 bg-gradient-to-tr from-secondary-container via-secondary-fixed to-primary-container shadow-md group-hover:shadow-secondary-container/40 transition-all duration-300">
                <div class="w-full h-full rounded-full overflow-hidden bg-surface-container">
                  <img class="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500 ease-out" alt="Raditya Mahendra" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXWYqP2moZsPVi8qbrIvA3kw82uJQWFefFGLWak7bK6lU70HBElNj_02IQZMl6Mpov6UA-yw9Tj9v0o6PRsY_UT0Iq72y6VbgfJqhTF5NVS_6g27oWzVHb-O6patyuB5_nGphRp0jNN0tF1sXescWpUG1Mx7wteR6TgHplVs3eH_ckpGcMR6PYDzZtZO5GPKeqhhbF1tYt-3teluIwp3YaAeYZgyYqNGXQJvWl9LJM"/>
                </div>
                <div class="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center shadow-sm">
                  <span class="font-label-code text-[10px] font-bold">02</span>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <span class="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">Raditya Mahendra</span>
                <span class="font-label-code text-label-code text-on-surface-variant font-medium mt-1">Co-Founder</span>
              </div>
            </div>

            <!-- Founder 3 -->
            <div class="group flex flex-col items-center text-center p-space-md bg-surface-container-lowest/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 reveal reveal-delay-3">
              <div class="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 mb-space-md overflow-hidden rounded-full p-1 bg-gradient-to-tr from-primary-container via-primary to-secondary-container shadow-md group-hover:shadow-primary/30 transition-all duration-300">
                <div class="w-full h-full rounded-full overflow-hidden bg-surface-container">
                  <img class="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500 ease-out" alt="Dimas Arya Sena" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwkx_Iv_TfJ2y1Spdc8khu7r_SKDzWpZ-21B-Jc9m-h7QQ2ZtgiGfl3e0s6cOAn_gloGANdTsroiom-V47Rx1VqY3yXTSRvPujTnVIN_S_Hbwd-lm2uCt0bT9EfjW3NHC8Jpmx72vrtBrjONYheHU60tPr7dEhw8FVqxFN2sKBYaeSLoZPaEW7g3vYeZnlYhyimSfqSKURislEAJWoEynYJsMVkiapd7u6rhPuh_uZ"/>
                </div>
                <div class="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm">
                  <span class="font-label-code text-[10px] font-bold">03</span>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <span class="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">Dimas Arya Sena</span>
                <span class="font-label-code text-label-code text-on-surface-variant font-medium mt-1">Co-Founder</span>
              </div>
            </div>

            <!-- Founder 4 -->
            <div class="group flex flex-col items-center text-center p-space-md bg-surface-container-lowest/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 reveal reveal-delay-4">
              <div class="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52 mb-space-md overflow-hidden rounded-full p-1 bg-gradient-to-tr from-secondary-container via-primary to-secondary-fixed shadow-md group-hover:shadow-secondary-container/40 transition-all duration-300">
                <div class="w-full h-full rounded-full overflow-hidden bg-surface-container">
                  <img class="w-full h-full object-cover rounded-full transform group-hover:scale-105 transition-transform duration-500 ease-out" alt="Farhan Kurniawan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTZGt8YC7NXvyt_atQI3dzMLclxoP3nelXKnvrrWtMdagvELr8R0dCHaXVs3egd05n9bMFZdfGTNs8qmWnnLp_SRWzMduAzsD6vUnmOX-DqjOD0d9lMccjtupAwH1Z7JyiXnvwFotJUDUdM7vUoXpSMbZn3XkZkLaUeVocS0MgradRQCN17lOgsIFamRClmzvCzeqSPp-9UGEs0ua7zaZ3Jmyg76X_iZ5i01Jf9VMN"/>
                </div>
                <div class="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center shadow-sm">
                  <span class="font-label-code text-[10px] font-bold">04</span>
                </div>
              </div>
              <div class="flex flex-col items-center">
                <span class="font-headline-sm text-headline-sm text-on-surface tracking-tight group-hover:text-primary transition-colors">Farhan Kurniawan</span>
                <span class="font-label-code text-label-code text-on-surface-variant font-medium mt-1">Co-Founder</span>
              </div>
            </div>
          </div>

          <!-- Minimalist Bottom Anchor: Values in Action -->
          <div class="w-full max-w-4xl bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md reveal">
            <div class="flex items-center gap-space-md">
              <div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary flex-shrink-0">
                <span class="material-symbols-outlined text-2xl">verified_user</span>
              </div>
              <div class="flex flex-col">
                <span class="font-headline-sm text-headline-sm text-on-surface">Komitmen Integritas Akademik</span>
                <p class="font-body-sm text-body-sm text-on-surface-variant">Didirikan untuk membantu mahasiswa memahami materi secara mendalam, bukan sekadar selesai instan.</p>
              </div>
            </div>
            <div class="flex items-center gap-space-xs font-label-code text-label-code text-primary bg-surface-container-high px-space-md py-space-sm rounded-xl whitespace-nowrap">
              <span>Est. 2024</span>
              <span class="w-1.5 h-1.5 rounded-full bg-primary mx-1"></span>
              <span>Indonesia</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  `;
}

export function init() {
  // Page initialization logic if needed
}
