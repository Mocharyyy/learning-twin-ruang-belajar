export default function statistics(){

const data=[

["14.872","Total Pengguna"],

["54","Sekolah Terdaftar"],

["2.840","Konten Tersedia"],

["98,2rb","Quiz Diselesaikan"]

];

return`

<div class="grid grid-cols-4 gap-6 mt-8">

${data.map(item=>`

<div class="bg-white rounded-3xl shadow-md p-6">

<div class="w-8 h-8 bg-slate-200 rounded mb-4"></div>

<h2 class="text-3xl font-bold text-blue-600">

${item[0]}

</h2>

<p class="text-slate-500 mt-2">

${item[1]}

</p>

</div>

`).join("")}

</div>

`;

}