export default function perhatian() {

const aktivitas = [

{
icon:"🔴",
judul:"4 siswa belum mengumpulkan tugas",
waktu:"10 menit yang lalu",
warna:"border-red-500"
},

{
icon:"🟡",
judul:"Kelompok C membutuhkan review",
waktu:"25 menit yang lalu",
warna:"border-yellow-500"
},

{
icon:"🟢",
judul:"Rani memperoleh skor tertinggi",
waktu:"1 jam yang lalu",
warna:"border-green-500"
}

];

return `

<div class="space-y-6">

    <!-- Perlu Perhatian -->

    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

        <h2 class="text-2xl font-bold text-slate-800">

            Perlu Perhatian

        </h2>

        <p class="text-slate-500 mt-1">

            Aktivitas terbaru hari ini

        </p>

        <div class="space-y-4 mt-6">

            ${aktivitas.map(item=>`

            <div class="border-l-4 ${item.warna} bg-slate-50 rounded-r-xl p-4">

                <div class="flex items-start gap-3">

                    <div class="text-xl">

                        ${item.icon}

                    </div>

                    <div>

                        <h3 class="font-semibold text-slate-700">

                            ${item.judul}

                        </h3>

                        <p class="text-sm text-slate-500 mt-1">

                            ${item.waktu}

                        </p>

                    </div>

                </div>

            </div>

            `).join("")}

        </div>

    </div>



    <!-- Progress Mengajar -->

    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

        <div class="flex justify-between items-center">

            <h2 class="text-xl font-bold">

                Progress Mengajar

            </h2>

            <span class="text-blue-600 font-bold">

                82%

            </span>

        </div>

        <div class="w-full bg-slate-200 rounded-full h-3 mt-6">

            <div class="bg-blue-600 h-3 rounded-full w-[82%]">

            </div>

        </div>

        <p class="text-sm text-slate-500 mt-3">

            Target pembelajaran minggu ini hampir selesai.

        </p>

    </div>



    <!-- Statistik Hari Ini -->

    <div class="bg-gradient-to-br from-blue-600 to-sky-400 rounded-2xl p-6 text-white shadow-lg">

        <h2 class="text-xl font-bold">

            Ringkasan Hari Ini

        </h2>

        <div class="mt-6 space-y-5">

            <div class="flex justify-between">

                <span>Kelas Mengajar</span>

                <strong>4</strong>

            </div>

            <div class="flex justify-between">

                <span>Quiz Dinilai</span>

                <strong>28</strong>

            </div>

            <div class="flex justify-between">

                <span>Tugas Baru</span>

                <strong>13</strong>

            </div>

            <div class="flex justify-between">

                <span>Kehadiran</span>

                <strong>94%</strong>

            </div>

        </div>

    </div>

</div>

`;

}