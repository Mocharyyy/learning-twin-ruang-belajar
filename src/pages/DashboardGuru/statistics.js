export default function statistics() {

const data = [

{
icon:"👨‍🎓",
angka:"127",
judul:"Total Siswa",
warna:"bg-blue-100",
iconColor:"text-blue-600"
},

{
icon:"📖",
angka:"78.4",
judul:"Rata-rata Nilai",
warna:"bg-green-100",
iconColor:"text-green-600"
},

{
icon:"📝",
angka:"4",
judul:"Quiz Aktif",
warna:"bg-yellow-100",
iconColor:"text-yellow-600"
},

{
icon:"✅",
angka:"94%",
judul:"Kehadiran",
warna:"bg-purple-100",
iconColor:"text-purple-600"
}

];

return `

<div class="grid grid-cols-2 xl:grid-cols-4 gap-6">

${data.map(item=>`

<div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

<div class="flex justify-between items-start">

<div>

<p class="text-slate-500 text-sm">
${item.judul}
</p>

<h2 class="text-4xl font-bold text-slate-800 mt-3">
${item.angka}
</h2>

</div>

<div class="${item.warna} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${item.iconColor}">

${item.icon}

</div>

</div>

<div class="mt-5">

<div class="w-full bg-slate-200 rounded-full h-2">

<div class="bg-blue-600 h-2 rounded-full w-[80%]"></div>

</div>

<p class="text-xs text-slate-400 mt-2">

Update hari ini

</p>

</div>

</div>

`).join("")}

</div>

`;

}