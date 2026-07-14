export default function role() {

return `

<section class="min-h-screen bg-[#EAF6FF] flex items-center">

<div class="container-custom">

<div class="text-center mb-16">

<h1 class="text-5xl font-bold text-slate-900">
Pilih Peran Anda
</h1>

<p class="text-slate-500 mt-4 text-lg">
Silakan pilih peran sebelum mulai menggunakan Learning Twin.
</p>

</div>

<div class="grid md:grid-cols-3 gap-10">

<!-- SISWA -->

<div class="bg-white rounded-3xl p-10 shadow-xl hover:-translate-y-2 transition">

    <div class="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-5xl mx-auto">
        🎓
    </div>

    <h2 class="text-4xl font-bold text-center mt-8">
        Siswa
    </h2>

    <p class="text-center text-slate-500 mt-6 leading-8">
        Belajar menggunakan AI, video pembelajaran,
        latihan soal dan quiz adaptif.
    </p>

   <a href="/class.html" class="role-btn">
    Masuk sebagai Siswa →
</a>

</div>

<!-- GURU -->

<div class="bg-white rounded-3xl p-10 shadow-xl hover:-translate-y-2 transition">

    <div class="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center text-5xl mx-auto">
        👨‍🏫
    </div>

    <h2 class="text-4xl font-bold text-center mt-8">
        Guru
    </h2>

    <p class="text-center text-slate-500 mt-6 leading-8">
        Mengelola materi, membuat quiz serta
        memantau perkembangan siswa.
    </p>

   <a href="/dashboard-guru.html" class="role-btn">
    Masuk sebagai Guru
</a>
</div>

<!-- ADMIN -->

<div class="bg-white rounded-3xl p-10 shadow-xl hover:-translate-y-2 transition">

    <div class="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center text-5xl mx-auto">
        ⚙️
    </div>

    <h2 class="text-4xl font-bold text-center mt-8">
        Admin
    </h2>

    <p class="text-center text-slate-500 mt-6 leading-8">
        Mengelola seluruh data sistem
        Learning Twin.
    </p>

<a href="/dashboard-admin.html" class="role-btn">
    Masuk sebagai Admin
</a>

</div>
</div>

</div>

</section>

`;

}