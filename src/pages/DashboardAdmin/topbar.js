export default function topbar() {
  return `
<header class="bg-white border-b border-slate-200">

<div class="px-10 py-7 flex justify-between items-center">

<div>

<h1 class="text-3xl font-bold text-slate-900">
Panel Administrasi
</h1>

<p class="text-slate-500 mt-1">
Monitoring platform secara menyeluruh • 10 Juli 2029
</p>

</div>

<div class="flex items-center gap-4">

<div class="text-right">

<p class="font-semibold">
Administrator
</p>

<p class="text-sm text-slate-500">
Learning Twin
</p>

</div>

<div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
LT
</div>

</div>

</div>

</header>
`;
}