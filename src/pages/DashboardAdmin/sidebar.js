export default function sidebar(){

return `

<aside class="w-[260px] bg-white border-r border-blue-100 min-h-screen shadow-sm">

<div class="p-8">

<div class="flex items-center gap-3">

<div class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
LT
</div>

<div>
<h2 class="font-bold text-lg">Learning Twin</h2>
<p class="text-slate-500">Admin</p>
</div>

</div>

<nav class="mt-10 space-y-3">

<button id="menu-ringkasan" class="dashboard-menu active w-full text-left">
📊 Ringkasan
</button>

<button id="menu-sekolah" class="dashboard-menu w-full text-left">
🏫 Sekolah
</button>

<button id="menu-pengguna" class="dashboard-menu w-full text-left">
👥 Pengguna
</button>

<button id="menu-konten" class="dashboard-menu w-full text-left">
📚 Konten
</button>

<button id="menu-analitik" class="dashboard-menu w-full text-left">
📈 Analitik
</button>

<button id="menu-pengaturan" class="dashboard-menu w-full text-left">
⚙️ Pengaturan
</button>

</nav>

</div>

</aside>

`;

}