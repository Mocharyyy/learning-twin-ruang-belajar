export default function sekolah(){

return `

<div>

<h1 class="text-3xl font-bold text-slate-800">
Manajemen Sekolah
</h1>

<p class="text-slate-500 mt-2">
Kelola seluruh sekolah yang terdaftar pada Learning Twin.
</p>

<div class="bg-white rounded-2xl shadow mt-8 p-6">

<h2 class="font-bold text-xl mb-6">
Daftar Sekolah
</h2>

<table class="w-full">

<thead>

<tr class="border-b">

<th class="text-left py-3">Nama Sekolah</th>

<th class="text-left py-3">Kota</th>

<th class="text-left py-3">Guru</th>

<th class="text-left py-3">Siswa</th>

<th class="text-left py-3">Status</th>

</tr>

</thead>

<tbody>

<tr class="border-b">

<td class="py-4">SMPN 1 Jombang</td>

<td>Jombang</td>

<td>30</td>

<td>512</td>

<td>
<span class="bg-green-100 text-green-700 px-3 py-1 rounded-full">
Aktif
</span>
</td>

</tr>

<tr class="border-b">

<td class="py-4">SMAN 2 Surabaya</td>

<td>Surabaya</td>

<td>48</td>

<td>931</td>

<td>
<span class="bg-green-100 text-green-700 px-3 py-1 rounded-full">
Aktif
</span>
</td>

</tr>

</tbody>

</table>

</div>

</div>

`;

}