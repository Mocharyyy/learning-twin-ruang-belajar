export default function statistikPlatform(){

const progress=[

["Penggunaan Metode Teks","68"],

["Penggunaan Quiz","53"],

["Penggunaan Video","47"]

];

return `

<div class="bg-white rounded-3xl shadow-md p-8">

<h2 class="text-xl font-bold">

Statistik Platform

</h2>

<div class="space-y-5 mt-6">

${progress.map(item=>`

<div>

<div class="flex justify-between text-sm mb-2">

<span>${item[0]}</span>

<span>${item[1]}%</span>

</div>

<div class="w-full h-3 bg-slate-200 rounded-full">

<div
class="bg-blue-600 h-3 rounded-full"
style="width:${item[1]}%">

</div>

</div>

</div>

`).join("")}

</div>

</div>

`;

}