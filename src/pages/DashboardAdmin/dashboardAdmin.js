import sidebar from "./sidebar.js";
import topbar from "./topbar.js";
import statistics from "./statistics.js";
import sekolahTerdaftar from "./sekolahTerdaftar.js";
import registrasiBaru from "./registrasiBaru.js";
import statistikPlatform from "./statistikPlatform.js";
import statusSistem from "./statusSistem.js";
import aksiCepat from "./aksiCepat.js";

export default function dashboardAdmin(){

return `

<section class="min-h-screen bg-[#EFF6FF]">

<div class="flex">

${sidebar()}

<main class="flex-1 p-8">

${topbar()}

${statistics()}

<div class="grid grid-cols-3 gap-6 mt-8">

<div class="col-span-2">

${sekolahTerdaftar()}

<div class="mt-6">

${registrasiBaru()}

</div>

</div>

<div>

${statistikPlatform()}

<div class="mt-6">

${statusSistem()}

</div>

<div class="mt-6">

${aksiCepat()}

</div>

</div>

</div>

</main>

</div>

</section>

`;

}