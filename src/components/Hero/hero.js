import heroImage from "../../assets/images/hero.png";

export default function hero() {
  return `
  <section class="hero pt-32 pb-20">

    <div class="container-custom grid lg:grid-cols-2 items-center gap-16">

      <!-- Kiri -->
      <div>

        <span class="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
          🚀 Platform Belajar Berbasis AI
        </span>

        <h1 class="text-5xl lg:text-7xl font-bold leading-tight mt-6">
          Belajar Lebih
          <span class="text-blue-600">
            Cerdas,
          </span>
          Raih Prestasi
          Lebih Tinggi
        </h1>

        <p class="mt-6 text-slate-600 text-lg leading-8">
          Learning Twin membantu siswa belajar lebih efektif melalui AI,
          video pembelajaran, materi interaktif, serta quiz adaptif.
        </p>

        <div class="flex gap-4 mt-10">

          <a href="/register.html" class="btn-primary">
            Mulai Belajar
          </a>

          <button class="btn-outline">
            Lihat Demo
          </button>

        </div>

      </div>

      <!-- Kanan -->
      <div class="flex justify-center">

        <img
          src="${heroImage}"
          alt="Learning Twin"
          class="w-full max-w-[520px] object-contain drop-shadow-2xl"
        >

      </div>

    </div>

  </section>
  `;
}