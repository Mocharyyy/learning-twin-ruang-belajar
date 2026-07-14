export default function statusSistem(){

return `

<div class="bg-white rounded-3xl shadow-md p-8">

<h2 class="text-xl font-bold">

Status Sistem

</h2>

<div class="space-y-4 mt-6">

<div class="flex justify-between">

<span>API Server</span>

<span class="text-green-600">

Normal

</span>

</div>

<div class="flex justify-between">

<span>AI Engine</span>

<span class="text-green-600">

Normal

</span>

</div>

<div class="flex justify-between">

<span>Database</span>

<span class="text-green-600">

Normal

</span>

</div>

<div class="flex justify-between">

<span>CDN Video</span>

<span class="text-yellow-600">

Lambat

</span>

</div>

</div>

</div>

`;

}