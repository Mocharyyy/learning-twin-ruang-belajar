export default function registrasiBaru() {
  return `
<section class="bg-white rounded-xl border border-slate-200 shadow-sm">

    <div class="px-6 py-4 border-b">

        <h2 class="text-xl font-bold text-slate-800">
            Registrasi Baru
        </h2>

    </div>

    <div class="p-5">

        <table class="w-full text-sm">

            <thead class="text-slate-500">

                <tr class="border-b">

                    <th class="text-left py-3">Nama</th>
                    <th class="text-left">Peran</th>
                    <th class="text-left">Sekolah</th>
                    <th class="text-left">Terdaftar</th>
                    <th class="text-left">Status</th>

                </tr>

            </thead>

            <tbody>

                <tr class="border-b">

                    <td class="py-4 font-medium">Ronaldo</td>
                    <td>Siswa</td>
                    <td>SMAN 1 Portugal</td>
                    <td>11 Juni</td>
                    <td class="text-green-600 font-semibold">
                        Aktif
                    </td>

                </tr>

                <tr class="border-b">

                    <td class="py-4 font-medium">Messi</td>
                    <td>Siswa</td>
                    <td>-</td>
                    <td>11 Juni</td>
                    <td class="text-blue-600 font-semibold">
                        Verifikasi
                    </td>

                </tr>

                <tr>

                    <td class="py-4 font-medium">Wibowo</td>
                    <td>Guru</td>
                    <td>SMK 1 Sultan Agung</td>
                    <td>1 Juli</td>
                    <td class="text-green-600 font-semibold">
                        Aktif
                    </td>

                </tr>

            </tbody>

        </table>

    </div>

</section>
`;
}