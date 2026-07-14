export default function topbar(){

const today=new Date().toLocaleDateString("id-ID",{
weekday:"long",
day:"numeric",
month:"long",
year:"numeric"
});

return`

<div class="bg-white rounded-3xl shadow-md p-8">

<h1 class="text-3xl font-bold">

Panel Administrasi

</h1>

<p class="text-slate-500 mt-2">

Monitoring platform secara menyeluruh • ${today}

</p>

</div>

`;

}