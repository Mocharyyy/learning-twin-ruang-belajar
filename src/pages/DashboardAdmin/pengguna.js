export default function pengguna() {
  return `

<div>

<div class="flex items-center justify-between mb-8">

<div>

<h1 class="text-3xl font-bold text-slate-800">
Manajemen Pengguna
</h1>

<p class="text-slate-500 mt-2">
Kelola seluruh akun Admin, Guru, dan Siswa.
</p>

</div>

<button class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl">
+ Tambah Pengguna
</button>

</div>


<div class="bg-white rounded-2xl shadow border">

<div class="p-6 border-b flex justify-between">

<input
type="text"
placeholder="Cari pengguna..."
class="border rounded-xl px-4 py-3 w-80"
/>

<select class="border rounded-xl px-4">

<option>Semua Role</option>
<option>Admin</option>
<option>Guru</option>
<option>Siswa</option>

</select>

</div>


<table class="w-full">

<thead class="bg-slate-100">

<tr>

<th class="text-left px-6 py-4">Nama</th>

<th class="text-left px-6 py-4">Role</th>

<th class="text-left px-6 py-4">Sekolah</th>

<th class="text-left px-6 py-4">Email</th>

<th class="text-left px-6 py-4">Status</th>

<th class="text-center px-6 py-4">Aksi</th>

</tr>

</thead>

<tbody>

<tr class="border-b">

<td class="px-6 py-5 font-semibold">
Administrator
</td>

<td class="px-6">
Admin
</td>

<td class="px-6">
Learning Twin
</td>

<td class="px-6">
admin@learningtwin.id
</td>

<td class="px-6">

<span class="bg-green-100 text-green-700 px-3 py-1 rounded-full">

Aktif

</span>

</td>

<td class="text-center">

<button class="bg-blue-600 text-white px-3 py-2 rounded-lg">

Edit

</button>

</td>

</tr>



<tr class="border-b">

<td class="px-6 py-5 font-semibold">

Budi Santoso

</td>

<td class="px-6">

Guru

</td>

<td class="px-6">

SMPN 1 Jombang

</td>

<td class="px-6">

budi@email.com

</td>

<td class="px-6">

<span class="bg-green-100 text-green-700 px-3 py-1 rounded-full">

Aktif

</span>

</td>

<td class="text-center">

<button class="bg-blue-600 text-white px-3 py-2 rounded-lg">

Edit

</button>

</td>

</tr>



<tr>

<td class="px-6 py-5 font-semibold">

Siti Aisyah

</td>

<td class="px-6">

Siswa

</td>

<td class="px-6">

SMAN 3 Surabaya

</td>

<td class="px-6">

siti@email.com

</td>

<td class="px-6">

<span class="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">

Pending

</span>

</td>

<td class="text-center">

<button class="bg-blue-600 text-white px-3 py-2 rounded-lg">

Edit

</button>

</td>

</tr>

</tbody>

</table>

</div>

</div>

`;
}