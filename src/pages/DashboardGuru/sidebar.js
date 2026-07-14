export default function sidebar() {
  return `

<aside class="w-[250px] min-h-screen bg-[#CFCFCF] border-r border-gray-400">

    <!-- Header -->
    <div class="px-6 py-6">

        <h2 class="text-xl font-semibold text-gray-800">
            Dashboard
        </h2>

        <p class="text-sm text-gray-600 mt-1">
            Guru
        </p>

    </div>

    <!-- Menu -->
    <nav class="px-4 mt-4 space-y-3">

        <a href="#" class="flex items-center gap-3 bg-white border-2 border-black rounded-lg px-4 py-2 text-sm font-medium shadow-sm">

            <span>📊</span>

            <span>Ringkasan</span>

        </a>

        <a href="#" class="flex items-center gap-3 bg-white hover:bg-gray-100 rounded-lg px-4 py-2 text-sm transition">

            <span>📚</span>

            <span>Kelas Saya</span>

        </a>

        <a href="#" class="flex items-center gap-3 bg-white hover:bg-gray-100 rounded-lg px-4 py-2 text-sm transition">

            <span>👨‍🎓</span>

            <span>Data Siswa</span>

        </a>

        <a href="#" class="flex items-center gap-3 bg-white hover:bg-gray-100 rounded-lg px-4 py-2 text-sm transition">

            <span>📝</span>

            <span>Bank Soal</span>

        </a>

        <a href="#" class="flex items-center gap-3 bg-white hover:bg-gray-100 rounded-lg px-4 py-2 text-sm transition">

            <span>📈</span>

            <span>Laporan</span>

        </a>

    </nav>

</aside>

`;
}