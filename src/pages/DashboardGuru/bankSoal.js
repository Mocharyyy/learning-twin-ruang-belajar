export default function bankSoal() {

const soal = [

{
judul:"Matematika Bab 1 - Bilangan Bulat",
kelas:"VII A",
jenis:"Pilihan Ganda",
jumlah:20,
status:"Aktif"
},

{
judul:"Matematika Bab 2 - Pecahan",
kelas:"VII A",
jenis:"Essay",
jumlah:10,
status:"Aktif"
},

{
judul:"Matematika Bab 3 - Aljabar",
kelas:"VIII A",
jenis:"Pilihan Ganda",
jumlah:25,
status:"Draft"
},

{
judul:"Matematika Bab 4 - Persamaan Linear",
kelas:"IX A",
jenis:"Campuran",
jumlah:30,
status:"Aktif"
}

];

return `

<div class="space-y-8">

    <!-- Header -->

    <div class="bg-white rounded-3xl shadow-md p-8">

        <div class="flex justify-between items-center">

            <div>

                <h1 class="text-4xl font-bold text-slate-800">

                    Bank Soal

                </h1>

                <p class="text-slate-500 mt-2">

                    Kelola soal latihan, quiz dan ujian siswa.

                </p>

            </div>

            <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">

                + Buat Soal

            </button>

        </div>

    </div>

    <!-- Statistik -->

    <div class="grid grid-cols-4 gap-6">

        <div class="bg-white rounded-2xl shadow-md p-6">

            <p class="text-slate-500">

                Total Bank Soal

            </p>

            <h2 class="text-4xl font-bold text-blue-600 mt-2">

                85

            </h2>

        </div>

        <div class="bg-white rounded-2xl shadow-md p-6">

            <p class="text-slate-500">

                Pilihan Ganda

            </p>

            <h2 class="text-4xl font-bold text-blue-600 mt-2">

                52

            </h2>

        </div>

        <div class="bg-white rounded-2xl shadow-md p-6">

            <p class="text-slate-500">

                Essay

            </p>

            <h2 class="text-4xl font-bold text-blue-600 mt-2">

                21

            </h2>

        </div>

        <div class="bg-white rounded-2xl shadow-md p-6">

            <p class="text-slate-500">

                Draft

            </p>

            <h2 class="text-4xl font-bold text-orange-500 mt-2">

                12

            </h2>

        </div>

    </div>

    <!-- Search -->

    <div class="bg-white rounded-2xl shadow-md p-6">

        <input
        type="text"
        placeholder="Cari soal..."
        class="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500">

    </div>

    <!-- Table -->

    <div class="bg-white rounded-3xl shadow-md overflow-hidden">

        <table class="w-full">

            <thead class="bg-slate-100">

                <tr>

                    <th class="p-5 text-left">Judul Soal</th>

                    <th class="p-5 text-left">Kelas</th>

                    <th class="p-5 text-left">Jenis</th>

                    <th class="p-5 text-left">Jumlah</th>

                    <th class="p-5 text-left">Status</th>

                    <th class="p-5 text-center">Aksi</th>

                </tr>

            </thead>

            <tbody>

                ${soal.map(item=>`

                <tr class="border-t hover:bg-slate-50">

                    <td class="p-5 font-semibold">

                        ${item.judul}

                    </td>

                    <td class="p-5">

                        ${item.kelas}

                    </td>

                    <td class="p-5">

                        ${item.jenis}

                    </td>

                    <td class="p-5">

                        ${item.jumlah} Soal

                    </td>

                    <td class="p-5">

                        <span class="${
                            item.status==="Aktif"
                            ?"bg-green-100 text-green-700"
                            :"bg-orange-100 text-orange-700"
                        } px-3 py-1 rounded-full text-sm">

                        ${item.status}

                        </span>

                    </td>

                    <td class="p-5">

                        <div class="flex justify-center gap-2">

                            <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">

                                Edit

                            </button>

                            <button class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">

                                Hapus

                            </button>

                        </div>

                    </td>

                </tr>

                `).join("")}

            </tbody>

        </table>

    </div>

</div>

`;

}