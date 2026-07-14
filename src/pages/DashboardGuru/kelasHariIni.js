export default function kelasHariIni() {

const kelas = [

{
kelas:"VIII-A",
mapel:"Matematika",
jam:"08.00 - 09.30",
siswa:"32",
status:"Berlangsung"
},

{
kelas:"VIII-B",
mapel:"Matematika",
jam:"10.00 - 11.30",
siswa:"30",
status:"Menunggu"
},

{
kelas:"IX-A",
mapel:"Matematika",
jam:"13.00 - 14.30",
siswa:"31",
status:"Selesai"
},

{
kelas:"IX-B",
mapel:"Matematika",
jam:"15.00 - 16.30",
siswa:"29",
status:"Menunggu"
}

];

return `

<div class="bg-white rounded-2xl shadow-sm border border-slate-200">

    <div class="flex justify-between items-center p-6 border-b">

        <div>

            <h2 class="text-2xl font-bold text-slate-800">

                Kelas Hari Ini

            </h2>

            <p class="text-slate-500 mt-1">

                Jadwal mengajar hari ini

            </p>

        </div>

        <button class="btn-primary">

            + Tambah Kelas

        </button>

    </div>

    <div class="overflow-x-auto">

        <table class="w-full">

            <thead class="bg-slate-50">

                <tr>

                    <th class="text-left px-6 py-4 font-semibold">
                        Kelas
                    </th>

                    <th class="text-left px-6 py-4 font-semibold">
                        Mata Pelajaran
                    </th>

                    <th class="text-left px-6 py-4 font-semibold">
                        Jam
                    </th>

                    <th class="text-center px-6 py-4 font-semibold">
                        Siswa
                    </th>

                    <th class="text-center px-6 py-4 font-semibold">
                        Status
                    </th>

                    <th class="text-center px-6 py-4 font-semibold">
                        Aksi
                    </th>

                </tr>

            </thead>

            <tbody>

${kelas.map(item=>`

<tr class="border-t hover:bg-blue-50 transition">

<td class="px-6 py-5 font-semibold">

${item.kelas}

</td>

<td class="px-6 py-5">

${item.mapel}

</td>

<td class="px-6 py-5 text-slate-500">

${item.jam}

</td>

<td class="px-6 py-5 text-center font-semibold">

${item.siswa}

</td>

<td class="px-6 py-5 text-center">

<span class="${
item.status=="Berlangsung"
? "bg-green-100 text-green-700"
: item.status=="Menunggu"
? "bg-yellow-100 text-yellow-700"
: "bg-slate-200 text-slate-700"
} px-4 py-2 rounded-full text-sm font-semibold">

${item.status}

</span>

</td>

<td class="px-6 py-5 text-center">

<button class="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">

Detail

</button>

</td>

</tr>

`).join("")}

            </tbody>

        </table>

    </div>

</div>

`;

}