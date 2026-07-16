export default function dataSiswa() {

const siswa = [

{
nama:"Andi Pratama",
kelas:"VII A",
nilai:"89",
kehadiran:"95%",
status:"Aktif"
},

{
nama:"Siti Nurhaliza",
kelas:"VII A",
nilai:"92",
kehadiran:"100%",
status:"Aktif"
},

{
nama:"Budi Santoso",
kelas:"VII B",
nilai:"76",
kehadiran:"88%",
status:"Aktif"
},

{
nama:"Rani Putri",
kelas:"VIII A",
nilai:"94",
kehadiran:"99%",
status:"Aktif"
},

{
nama:"Dimas Saputra",
kelas:"IX A",
nilai:"81",
kehadiran:"91%",
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
Data Siswa
</h1>

<p class="text-slate-500 mt-2">
Kelola seluruh data siswa yang terdaftar.
</p>

</div>

<button
class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">

+ Tambah Siswa

</button>

</div>

</div>

<!-- Statistik -->

<div class="grid grid-cols-3 gap-6">

<div class="bg-white rounded-2xl shadow-md p-6">

<p class="text-slate-500">
Total Siswa
</p>

<h2 class="text-4xl font-bold text-blue-600 mt-2">
127
</h2>

</div>

<div class="bg-white rounded-2xl shadow-md p-6">

<p class="text-slate-500">
Kelas Aktif
</p>

<h2 class="text-4xl font-bold text-blue-600 mt-2">
8
</h2>

</div>

<div class="bg-white rounded-2xl shadow-md p-6">

<p class="text-slate-500">
Rata-rata Nilai
</p>

<h2 class="text-4xl font-bold text-blue-600 mt-2">
86
</h2>

</div>

</div>

<!-- Search -->

<div class="bg-white rounded-2xl shadow-md p-6">

<input
type="text"
placeholder="Cari nama siswa..."
class="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500">

</div>

<!-- Table -->

<div class="bg-white rounded-3xl shadow-md overflow-hidden">

<table class="w-full">

<thead class="bg-slate-100">

<tr>

<th class="p-5 text-left">Nama</th>

<th class="p-5 text-left">Kelas</th>

<th class="p-5 text-left">Nilai</th>

<th class="p-5 text-left">Kehadiran</th>

<th class="p-5 text-left">Status</th>

<th class="p-5 text-center">Aksi</th>

</tr>

</thead>

<tbody>

${siswa.map(item=>`

<tr class="border-t hover:bg-slate-50">

<td class="p-5 font-semibold">

${item.nama}

</td>

<td class="p-5">

${item.kelas}

</td>

<td class="p-5">

${item.nilai}

</td>

<td class="p-5">

${item.kehadiran}

</td>

<td class="p-5">

<span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

${item.status}

</span>

</td>

<td class="p-5 text-center">

<button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">

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