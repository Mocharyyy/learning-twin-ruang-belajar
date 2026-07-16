export default function laporan() {

const ranking=[

{
nama:"Siti Nurhaliza",
kelas:"VII A",
nilai:"98"
},

{
nama:"Rani Putri",
kelas:"VIII A",
nilai:"96"
},

{
nama:"Andi Pratama",
kelas:"VII A",
nilai:"95"
},

{
nama:"Dimas Saputra",
kelas:"IX A",
nilai:"93"
},

{
nama:"Budi Santoso",
kelas:"VII B",
nilai:"91"
}

];

return `

<div class="space-y-8">

<!-- Header -->

<div class="bg-white rounded-3xl shadow-md p-8">

<div class="flex justify-between items-center">

<div>

<h1 class="text-4xl font-bold text-slate-800">

Laporan Pembelajaran

</h1>

<p class="text-slate-500 mt-2">

Monitoring perkembangan hasil belajar siswa.

</p>

</div>

<div class="flex gap-3">

<button class="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold transition">

Export Excel

</button>

<button class="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl font-semibold transition">

Export PDF

</button>

</div>

</div>

</div>

<!-- Statistik -->

<div class="grid grid-cols-4 gap-6">

<div class="bg-white rounded-2xl shadow-md p-6">

<p class="text-slate-500">

Total Quiz

</p>

<h2 class="text-4xl font-bold text-blue-600 mt-2">

18

</h2>

</div>

<div class="bg-white rounded-2xl shadow-md p-6">

<p class="text-slate-500">

Nilai Rata-rata

</p>

<h2 class="text-4xl font-bold text-blue-600 mt-2">

86

</h2>

</div>

<div class="bg-white rounded-2xl shadow-md p-6">

<p class="text-slate-500">

Kehadiran

</p>

<h2 class="text-4xl font-bold text-blue-600 mt-2">

94%

</h2>

</div>

<div class="bg-white rounded-2xl shadow-md p-6">

<p class="text-slate-500">

Tugas Selesai

</p>

<h2 class="text-4xl font-bold text-blue-600 mt-2">

87%

</h2>

</div>

</div>

<!-- Grafik -->

<div class="grid grid-cols-2 gap-6">

<div class="bg-white rounded-3xl shadow-md p-8">

<h2 class="text-2xl font-bold mb-6">

Distribusi Nilai

</h2>

<div class="space-y-5">

<div>

<div class="flex justify-between">

<span>90 - 100</span>

<span>30%</span>

</div>

<div class="w-full bg-gray-200 rounded-full h-3 mt-2">

<div class="bg-green-500 h-3 rounded-full w-[30%]"></div>

</div>

</div>

<div>

<div class="flex justify-between">

<span>80 - 89</span>

<span>45%</span>

</div>

<div class="w-full bg-gray-200 rounded-full h-3 mt-2">

<div class="bg-blue-500 h-3 rounded-full w-[45%]"></div>

</div>

</div>

<div>

<div class="flex justify-between">

<span>70 - 79</span>

<span>20%</span>

</div>

<div class="w-full bg-gray-200 rounded-full h-3 mt-2">

<div class="bg-yellow-500 h-3 rounded-full w-[20%]"></div>

</div>

</div>

<div>

<div class="flex justify-between">

<span>< 70</span>

<span>5%</span>

</div>

<div class="w-full bg-gray-200 rounded-full h-3 mt-2">

<div class="bg-red-500 h-3 rounded-full w-[5%]"></div>

</div>

</div>

</div>

</div>

<div class="bg-white rounded-3xl shadow-md p-8">

<h2 class="text-2xl font-bold mb-6">

Kehadiran Siswa

</h2>

<div class="flex justify-center items-center h-64">

<div class="w-52 h-52 rounded-full border-[20px] border-blue-500 flex items-center justify-center">

<div class="text-center">

<p class="text-5xl font-bold">

94%

</p>

<p class="text-slate-500 mt-2">

Hadir

</p>

</div>

</div>

</div>

</div>

</div>

<!-- Ranking -->

<div class="bg-white rounded-3xl shadow-md overflow-hidden">

<div class="p-6 border-b">

<h2 class="text-2xl font-bold">

Top 5 Nilai Tertinggi

</h2>

</div>

<table class="w-full">

<thead class="bg-slate-100">

<tr>

<th class="p-5 text-left">

Peringkat

</th>

<th class="p-5 text-left">

Nama

</th>

<th class="p-5 text-left">

Kelas

</th>

<th class="p-5 text-left">

Nilai

</th>

</tr>

</thead>

<tbody>

${ranking.map((item,index)=>`

<tr class="border-t hover:bg-slate-50">

<td class="p-5 font-bold">

#${index+1}

</td>

<td class="p-5">

${item.nama}

</td>

<td class="p-5">

${item.kelas}

</td>

<td class="p-5">

<span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">

${item.nilai}

</span>

</td>

</tr>

`).join("")}

</tbody>

</table>

</div>

</div>

`;

}