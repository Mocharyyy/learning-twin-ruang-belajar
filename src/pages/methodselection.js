export default function methodSelection() {
  return `
<section class="min-h-screen bg-[#EAF6FF] py-24">

<div class="container-custom max-w-5xl">

<div class="bg-white rounded-[30px] shadow-xl p-10">

<h1 class="text-4xl font-bold text-slate-800">
Pilih Metode Belajar
</h1>

<p class="text-slate-500 mt-2">
Pilih satu metode belajar yang paling sesuai.
</p>

<div class="grid md:grid-cols-3 gap-8 mt-10">

<!-- Materi -->

<button class="method-card">

<div class="method-icon">📖</div>

<h3>Materi Teks</h3>

<p>
Baca materi pembelajaran lengkap dengan rangkuman dan highlight AI.
</p>

<div class="method-tags">

<span>Materi Ringkas</span>

<span>Highlight AI</span>

</div>

</button>

<!-- Video -->

<button class="method-card">

<div class="method-icon">🎥</div>

<h3>Video Pembelajaran</h3>

<p>
Belajar melalui video interaktif lengkap dengan pause dan ulang.
</p>

<div class="method-tags">

<span>Video HD</span>

<span>Pause & Ulang</span>

</div>

</button>

<!-- Quiz -->

<button class="method-card">

<div class="method-icon">📝</div>

<h3>Quiz Interaktif</h3>

<p>
Latihan soal dengan penilaian otomatis dan AI adaptif.
</p>

<div class="method-tags">

<span>Soal Adaptif AI</span>

<span>Riwayat Nilai</span>

</div>

</button>

</div>

<div class="flex justify-between items-center mt-10">

    <p id="selectedMethod" class="text-slate-500">
        Pilih satu metode belajar
    </p>

    <a
        id="nextBtn"
        href="/dashboard.html"
        class="btn-primary opacity-50 pointer-events-none">

        Mulai Belajar →

    </a>

</div>

</div>

</div>

</section>
`;
}