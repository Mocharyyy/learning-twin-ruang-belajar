export default function register() {
  return `
<section class="min-h-screen bg-[#DDF4FF] flex items-center justify-center py-20">

<div class="container-custom">

<div class="max-w-5xl mx-auto bg-white rounded-[35px] shadow-2xl overflow-hidden grid lg:grid-cols-2">

<!-- ================= LEFT ================= -->

<div class="bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 p-12 text-white flex flex-col justify-center">

<h2 class="text-4xl font-bold leading-tight">
Selamat Datang di
Learning Twin
</h2>

<p class="mt-6 text-blue-100 leading-8">

Platform belajar berbasis AI yang membantu siswa
belajar lebih cerdas melalui materi interaktif,
video pembelajaran, dan quiz adaptif.

</p>

<div class="mt-10">

<div class="flex items-center gap-4 mb-5">

<div class="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 font-bold">
✓
</div>

<span>Pembelajaran Adaptif AI</span>

</div>

<div class="flex items-center gap-4 mb-5">

<div class="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 font-bold">
✓
</div>

<span>Quiz Otomatis</span>

</div>

<div class="flex items-center gap-4">

<div class="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900 font-bold">
✓
</div>

<span>Progress Belajar</span>

</div>

</div>

</div>

<!-- ================= RIGHT ================= -->

<div class="p-12">

<h2 class="text-3xl font-bold text-slate-800">
Registrasi
</h2>

<p class="text-slate-500 mt-2">
Silakan lengkapi data berikut.
</p>

<form class="mt-8 space-y-5">

<div>

<label class="font-medium">
Nama Lengkap
</label>

<input
type="text"
placeholder="Masukkan nama lengkap"
class="form-input mt-2"
/>

</div>

<div>

<label class="font-medium">
Nama Sekolah
</label>

<input
type="text"
placeholder="Opsional"
class="form-input mt-2"
/>

</div>

<div>

<label class="font-medium">
Email
</label>

<input
type="email"
placeholder="Masukkan email"
class="form-input mt-2"
/>

</div>

<div>

<label class="font-medium">
Password
</label>

<input
type="password"
placeholder="********"
class="form-input mt-2"
/>

</div>

<a href="/role.html" class="btn-primary w-full text-center block py-4 mt-6">
    Daftar Sekarang →
</a>
</form>

<p class="text-center mt-8 text-slate-500">

Sudah punya akun?

<a href="#" class="text-blue-600 font-semibold">

Masuk

</a>

</p>

</div>

</div>

</div>

</section>
`;
}