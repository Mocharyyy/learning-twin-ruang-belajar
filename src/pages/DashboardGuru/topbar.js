export default function topbar() {

const today = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
});

return `

<header class="bg-white shadow-sm border-b border-slate-200">

    <div class="flex items-center justify-between px-8 py-6">

        <!-- Kiri -->
        <div>

            <h1 class="text-3xl font-bold text-slate-800">
                Selamat Pagi, Bu Intan 👋
            </h1>

            <p class="text-slate-500 mt-2">
                ${today}
            </p>

        </div>

        <!-- Kanan -->
        <div class="flex items-center gap-5">

            <div class="text-right">

                <p class="font-semibold text-slate-700">
                    Guru Matematika
                </p>

                <p class="text-sm text-slate-500">
                    Learning Twin
                </p>

            </div>

            <div class="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold shadow-lg">

                BI

            </div>

        </div>

    </div>

</header>

`;
}