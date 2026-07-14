export default function registrasiBaru(){

const data=[

["Ronaldo","Siswa","SMAN 1 Portugal","11 Juni","Aktif"],

["Messi","Siswa","SMAN 3 Portugal","11 Juni","Verifikasi"],

["Wibowo","Guru","SMK 1 Sultan Agung","1 Juli","Aktif"]

];

return `

<div class="bg-white rounded-3xl shadow-md p-8">

<h2 class="text-2xl font-bold mb-6">

Registrasi Baru

</h2>

<table class="w-full text-sm">

<thead>

<tr class="border-b">

<th class="text-left pb-3">Nama</th>

<th>Peran</th>

<th>Sekolah</th>

<th>Terdaftar</th>

<th>Status</th>

</tr>

</thead>

<tbody>

${data.map(item=>`

<tr class="border-b">

<td class="py-4">${item[0]}</td>

<td class="text-center">${item[1]}</td>

<td class="text-center">${item[2]}</td>

<td class="text-center">${item[3]}</td>

<td class="text-center">${item[4]}</td>

</tr>

`).join("")}

</tbody>

</table>

</div>

`;

}