export default function sekolahTerdaftar(){

const sekolah=[

{
nama:"SMPN 1 Nusua",
negara:"Rusia",
guru:36,
siswa:713,
status:"Aktif"
},

{
nama:"SMAN 3 Portugal",
negara:"Portugal",
guru:41,
siswa:400,
status:"Aktif"
},

{
nama:"SMK 1 Meksiko",
negara:"Meksiko",
guru:31,
siswa:290,
status:"Uji Coba"
}

];

return `

<div class="bg-white rounded-3xl shadow-md p-8">

<h2 class="text-2xl font-bold">

Sekolah Terdaftar

</h2>

<div class="space-y-5 mt-6">

${sekolah.map(item=>`

<div class="flex justify-between items-center border rounded-2xl p-5">

<div>

<h3 class="font-bold">

${item.nama}

</h3>

<p class="text-slate-500">

${item.negara} • ${item.guru} Guru • ${item.siswa} Siswa

</p>

</div>

<span class="${
item.status=="Aktif"
?"bg-green-100 text-green-700"
:"bg-yellow-100 text-yellow-700"
} px-5 py-2 rounded-full text-sm font-semibold">

${item.status}

</span>

</div>

`).join("")}

</div>

</div>

`;

}