export default function sekolahTerdaftar() {
  return `
<section class="bg-white rounded-xl border border-slate-200 shadow-sm">

    <div class="px-6 py-4 border-b">
        <h2 class="text-xl font-bold text-slate-800">
            Sekolah Terdaftar
        </h2>
    </div>

    <div class="p-5 space-y-4">

        <div class="flex justify-between items-center bg-slate-50 rounded-lg p-4">

            <div>
                <h3 class="font-semibold">SMPN 1 Rusia</h3>
                <p class="text-sm text-slate-500">
                    Rusia • 34 Guru • 313 Siswa
                </p>
            </div>

            <span class="px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                Aktif
            </span>

        </div>

        <div class="flex justify-between items-center bg-slate-50 rounded-lg p-4">

            <div>
                <h3 class="font-semibold">SMAN 3 Portugal</h3>
                <p class="text-sm text-slate-500">
                    Portugal • 41 Guru • 400 Siswa
                </p>
            </div>

            <span class="px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                Aktif
            </span>

        </div>

        <div class="flex justify-between items-center bg-slate-50 rounded-lg p-4">

            <div>
                <h3 class="font-semibold">SMK 1 Meksiko</h3>
                <p class="text-sm text-slate-500">
                    Meksiko • 31 Guru • 290 Siswa
                </p>
            </div>

            <span class="px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">
                Uji Coba
            </span>

        </div>

    </div>

</section>
`;
}