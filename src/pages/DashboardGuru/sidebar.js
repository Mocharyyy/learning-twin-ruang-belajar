export default function sidebar() {
  return `

<aside class="w-[250px] min-h-screen bg-[#CFCFCF] border-r border-gray-400">

    <div class="px-6 py-6">

        <h2 class="text-xl font-semibold">
            Dashboard
        </h2>

        <p class="text-sm text-gray-600">
            Guru
        </p>

    </div>

    <nav class="px-4 mt-4 space-y-3">

        <button id="menu-ringkasan" class="dashboard-menu w-full">
            📊 Ringkasan
        </button>

        <button id="menu-kelas" class="dashboard-menu w-full">
            📚 Kelas Saya
        </button>

        <button id="menu-siswa" class="dashboard-menu w-full">
            👨‍🎓 Data Siswa
        </button>

        <button id="menu-bank" class="dashboard-menu w-full">
            📝 Bank Soal
        </button>

        <button id="menu-laporan" class="dashboard-menu w-full">
            📈 Laporan
        </button>

    </nav>

</aside>

`;
}