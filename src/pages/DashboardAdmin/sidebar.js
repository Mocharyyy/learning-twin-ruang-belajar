export default function sidebar() {
  return `
  <aside class="w-[230px] min-h-screen bg-[#EEF2F7] border-r border-slate-300 flex flex-col">

    <div class="px-6 py-7 border-b border-slate-300">

      <div class="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold">
        LT
      </div>

      <h2 class="text-xl font-bold mt-5 text-slate-800">
        Learning Twin
      </h2>

      <p class="text-slate-500 text-sm">
        Administrator
      </p>

    </div>

    <div class="px-5 py-6 flex-1">

      <p class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
        Dashboard
      </p>

      <div class="space-y-3">

        <button id="menu-dashboard" class="admin-menu active">
          Ringkasan
        </button>

        <button id="menu-sekolah" class="admin-menu">
          Sekolah
        </button>

        <button id="menu-pengguna" class="admin-menu">
          Pengguna
        </button>

        <button id="menu-konten" class="admin-menu">
          Konten
        </button>

        <button id="menu-analitik" class="admin-menu">
          Analitik
        </button>

        <button id="menu-pengaturan" class="admin-menu">
          Pengaturan
        </button>

      </div>

    </div>

  </aside>
  `;
}