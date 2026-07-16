export default function register() {
  return `
<section class="min-h-screen bg-[#EAF6FF] py-16">

    <div class="container-custom max-w-2xl mx-auto">

        <!-- Header -->
<div class="text-center mb-10">

    <h1 class="text-4xl font-bold text-slate-800">
        Registrasi Pengguna Baru
    </h1>

    <p class="text-slate-500 mt-3">
        Lengkapi data diri Anda untuk membuat akun Learning Twin.
    </p>

</div>

        <!-- CARD -->
        <div class="bg-white border-2 border-gray-300 rounded-xl shadow-md p-8">

            <h2 class="text-2xl font-bold text-slate-800">
                Buat Akun Baru
            </h2>

            <p class="text-slate-500 mt-2">
                Masukkan informasi dasar untuk memulai.
            </p>

            <form class="mt-8 space-y-5">

                <div>

                    <label class="block mb-2 font-medium">
                        Nama Lengkap
                    </label>

                    <input
                        type="text"
                        placeholder="Contoh: Budi Santoso"
                        class="form-input w-full"
                    />

                </div>

                <div>

                    <label class="block mb-2 font-medium">
                        Nama Sekolah
                    </label>

                    <input
                        type="text"
                        placeholder="Contoh: SMPN 1 Jombang (Opsional)"
                        class="form-input w-full"
                    />

                </div>

                <div>

                    <label class="block mb-2 font-medium">
                        Email
                    </label>

                    <input
                        type="email"
                        placeholder="budi@email.com"
                        class="form-input w-full"
                    />

                </div>

                <div>

                    <label class="block mb-2 font-medium">
                        Kata Sandi
                    </label>

                    <input
                        type="password"
                        placeholder="Minimal 8 karakter"
                        class="form-input w-full"
                    />

                </div>

                <a
                    href="/role.html"
                    class="btn-primary w-full text-center block mt-6">

                    Lanjutkan

                </a>

            </form>

        </div>

        <p class="text-center mt-8 text-slate-500">

            Sudah punya akun?

            <a
                href="/login.html"
                class="text-blue-600 font-semibold">

                Masuk Disini

            </a>

        </p>

    </div>

</section>
`;
}