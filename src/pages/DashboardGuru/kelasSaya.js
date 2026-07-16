export default function kelasSaya() {
  return `
<div class="space-y-8">

<!-- Header -->

<div class="bg-white rounded-3xl shadow-md p-8">

<div class="flex justify-between items-center">

<div>

<h1 class="text-5xl font-bold text-slate-800">
Kelas Saya
</h1>

<p class="text-slate-500 mt-2">
Kelola seluruh kelas yang Anda ajar.
</p>

</div>

<button
class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold">

+ Tambah Kelas

</button>

</div>

</div>

<!-- Statistik -->

<div class="grid grid-cols-3 gap-6">

<div class="bg-white rounded-2xl shadow-md p-6">

<p class="text-slate-500">
Total Kelas
</p>

<h2 class="text-4xl font-bold mt-2 text-blue-600">
8
</h2>

</div>

<div class="bg-white rounded-2xl shadow-md p-6">

<p class="text-slate-500">
Total Siswa
</p>

<h2 class="text-4xl font-bold mt-2 text-blue-600">
243
</h2>

</div>

<div class="bg-white rounded-2xl shadow-md p-6">

<p class="text-slate-500">
Jadwal Hari Ini
</p>

<h2 class="text-4xl font-bold mt-2 text-blue-600">
4
</h2>

</div>

</div>

<!-- Search -->

<div class="bg-white rounded-2xl shadow-md p-6">

<input
type="text"
placeholder="Cari kelas..."
class="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">

</div>

<!-- Table -->

<div class="bg-white rounded-3xl shadow-md overflow-hidden">

<table class="w-full">

<thead class="bg-slate-100">

<tr>

<th class="p-5 text-left">Kelas</th>

<th class="p-5 text-left">Mata Pelajaran</th>

<th class="p-5 text-left">Hari</th>

<th class="p-5 text-left">Jam</th>

<th class="p-5 text-left">Jumlah Siswa</th>

<th class="p-5 text-center">Aksi</th>

</tr>

</thead>

<tbody>

<tr class="border-t">

<td class="p-5 font-semibold">VII A</td>

<td class="p-5">Matematika</td>

<td class="p-5">Senin</td>

<td class="p-5">08.00 - 09.30</td>

<td class="p-5">32</td>

<td class="p-5 text-center">

<button class="bg-blue-600 text-white px-4 py-2 rounded-lg">

Detail

</button>

</td>

</tr>

<tr class="border-t">

<td class="p-5 font-semibold">VII B</td>

<td class="p-5">Matematika</td>

<td class="p-5">Selasa</td>

<td class="p-5">10.00 - 11.30</td>

<td class="p-5">30</td>

<td class="p-5 text-center">

<button class="bg-blue-600 text-white px-4 py-2 rounded-lg">

Detail

</button>

</td>

</tr>

<tr class="border-t">

<td class="p-5 font-semibold">VIII A</td>

<td class="p-5">Matematika</td>

<td class="p-5">Rabu</td>

<td class="p-5">09.30 - 11.00</td>

<td class="p-5">28</td>

<td class="p-5 text-center">

<button class="bg-blue-600 text-white px-4 py-2 rounded-lg">

Detail

</button>

</td>

</tr>

</tbody>

</table>

</div>

</div>
`;
}