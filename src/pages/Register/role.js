export default function role() {
  return `
<section class="min-h-screen bg-[#EAF6FF] flex items-center justify-center py-20">

    <div class="w-full max-w-xl">

        <div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-10">

            <h2 class="text-3xl font-bold text-slate-800 text-center">
                Pilih Peran Anda
            </h2>

            <p class="text-slate-500 text-center mt-3 mb-8">
                Tentukan Anda akan menggunakan
                Learning Twin sebagai apa.
            </p>

            <!-- SISWA -->
            <button class="role-card w-full border rounded-xl p-5 flex items-center gap-4 hover:border-blue-500 transition">

                <div class="checkbox w-10 h-10 border-2 border-gray-400 rounded-md flex-shrink-0"></div>

                <div class="text-left">
                    <h3 class="font-semibold text-lg">
                        Siswa
                    </h3>

                    <p class="text-sm text-slate-500">
                        Akses materi, video dan quiz.
                    </p>
                </div>

            </button>

            <!-- GURU -->
            <button class="role-card w-full border rounded-xl p-5 flex items-center gap-4 mt-5 hover:border-blue-500 transition">

                <div class="checkbox w-10 h-10 border-2 border-gray-400 rounded-md flex-shrink-0"></div>

                <div class="text-left">
                    <h3 class="font-semibold text-lg">
                        Guru
                    </h3>

                    <p class="text-sm text-slate-500">
                        Kelola kelas dan pantau perkembangan siswa.
                    </p>
                </div>

            </button>

            <!-- BUTTON -->
            <div class="text-center mt-10">

                <a
                    id="nextBtn"
                    class="btn-primary opacity-50 pointer-events-none">

                    Daftar & Mulai Belajar →
                </a>

            </div>

            <div class="text-center mt-5">

                <a
                    href="/register.html"
                    class="text-slate-600 hover:text-blue-600">

                    ← Kembali

                </a>

            </div>

            <p class="text-center text-sm text-slate-500 mt-8">

                Sudah punya akun?

                <a
                    href="/login.html"
                    class="text-blue-600 font-semibold">

                    Masuk Disini

                </a>

            </p>

        </div>

    </div>

</section>
`;
}