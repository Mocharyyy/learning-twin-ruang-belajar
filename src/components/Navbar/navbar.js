export default function navbar() {
  return `
<header class="navbar fixed top-0 left-0 w-full z-50">

<div class="container-custom h-16 flex items-center justify-between">

<!-- Logo -->

<div class="flex items-center gap-3">

<div class="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold">
RB
</div>

<span class="font-semibold text-xl">
Smart Learning by Ruang Belajar
</span>

</div>

<!-- Menu -->

<nav class="hidden md:flex items-center gap-8 text-sm">

<!-- UMUM -->

<div class="relative group">

<button class="font-medium">
Umum ▼
</button>

<div class="absolute hidden group-hover:block bg-white rounded-xl shadow-xl w-64 mt-3 p-5">

<h3 class="font-bold text-blue-600 mb-2">
Learning Twin
</h3>

<p class="text-slate-500 text-sm">
Platform pembelajaran digital yang membantu siswa, guru,
dan admin dalam proses belajar mengajar secara interaktif.
</p>

</div>

</div>

<!-- SISWA -->

<div class="relative group">

<button class="font-medium">
Siswa ▼
</button>

<div class="absolute hidden group-hover:block bg-white rounded-xl shadow-xl w-72 mt-3 p-5">

<h3 class="font-bold text-blue-600 mb-3">
Untuk Siswa
</h3>

<ul class="space-y-2 text-slate-600 text-sm">

<li>🤖 Belajar bersama AI</li>

<li>🎥 Video Pembelajaran</li>

<li>📝 Quiz Adaptif</li>

<li>📊 Laporan Hasil Belajar</li>

</ul>

</div>

</div>

<!-- GURU -->

<div class="relative group">

<button class="font-medium">
Guru ▼
</button>

<div class="absolute hidden group-hover:block bg-white rounded-xl shadow-xl w-72 mt-3 p-5">

<h3 class="font-bold text-blue-600 mb-3">
Untuk Guru
</h3>

<ul class="space-y-2 text-slate-600 text-sm">

<li>📚 Mengelola Materi</li>

<li>📝 Membuat Quiz</li>

<li>👨‍🎓 Memantau Perkembangan Siswa</li>

<li>📈 Dashboard Analitik</li>

</ul>

</div>

</div>

<!-- ADMIN -->

<div class="relative group">

<button class="font-medium">
Admin ▼
</button>

<div class="absolute right-0 hidden group-hover:block bg-white rounded-xl shadow-xl w-72 mt-3 p-5">

<h3 class="font-bold text-blue-600 mb-3">
Untuk Admin
</h3>

<ul class="space-y-2 text-slate-600 text-sm">

<li>🏫 Manajemen Sekolah</li>

<li>👥 Manajemen Pengguna</li>

<li>📊 Monitoring Platform</li>

<li>⚙️ Pengaturan Sistem</li>

</ul>

</div>

</div>

</nav>

</div>

</header>
`;
}