export default function subjectSelection() {
  return `
<section class="min-h-screen bg-[#EAF6FF] py-24">

<div class="container-custom max-w-5xl">

<div class="bg-white rounded-[30px] shadow-xl p-10">

<h1 class="text-4xl font-bold text-slate-800">
Pilih Mata Pelajaran
</h1>

<p class="text-slate-500 mt-2">
Pilih satu atau lebih mata pelajaran yang ingin dipelajari.
</p>

<div class="grid md:grid-cols-2 gap-6 mt-10">

<button class="subject-card">

<div class="subject-icon"></div>

<h3>Matematika</h3>

<p>Aljabar, Geometri, Statistika</p>

</button>

<button class="subject-card">

<div class="subject-icon"></div>

<h3>IPA / SAINS</h3>

<p>Fisika, Kimia, Biologi</p>

</button>

<button class="subject-card">

<div class="subject-icon"></div>

<h3>IPS</h3>

<p>Sejarah, Geografi, Ekonomi</p>

</button>

<button class="subject-card">

<div class="subject-icon"></div>

<h3>Bahasa Indonesia</h3>

<p>Sastra, Menulis</p>

</button>

<button class="subject-card">

<div class="subject-icon"></div>

<h3>Bahasa Inggris</h3>

<p>Grammar, Speaking, Vocabulary</p>

</button>

<button class="subject-card">

<div class="subject-icon"></div>

<h3>Pendidikan Agama</h3>

<p>Nilai Moral dan Keagamaan</p>

</button>

</div>

<div class="flex justify-between items-center mt-10">

    <p id="selectedSubject" class="text-slate-500">
        Pilih satu mata pelajaran
    </p>

    <a
        id="nextBtn"
        href="/method.html"
        class="btn-primary opacity-50 pointer-events-none">

        Lanjut ke Metode Belajar →

    </a>

</div>

</div>

</div>

</section>
`;
}