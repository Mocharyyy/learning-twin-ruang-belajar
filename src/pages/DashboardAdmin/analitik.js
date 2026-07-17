export default function analitik() {
  return `
    <!-- Header Analitik -->
    <div class="flex justify-between items-center mb-6">
      <div>
        <h2 class="text-2xl font-bold text-slate-800 tracking-tight">Analitik Platform</h2>
        <p class="text-sm text-slate-500 mt-1">Pantau statistik performa, interaksi pengguna, dan pertumbuhan data.</p>
      </div>
      <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold inline-flex items-center gap-1.5 shadow-sm transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
        Unduh Laporan
      </button>
    </div>

    <!-- Ringkasan Metrik Analitik -->
    <div class="grid grid-cols-3 gap-6 mb-6">
      <div class="bg-white border border-slate-300 p-5 rounded-2xl shadow-sm">
        <span class="text-sm text-slate-500 font-medium">Total Waktu Belajar</span>
        <h3 class="text-2xl font-bold text-slate-800 mt-1">1,240 Jam</h3>
        <span class="text-xs text-emerald-600 font-semibold mt-1 inline-block">↑ 12% dari bulan lalu</span>
      </div>
      <div class="bg-white border border-slate-300 p-5 rounded-2xl shadow-sm">
        <span class="text-sm text-slate-500 font-medium">Penyelesaian Modul</span>
        <h3 class="text-2xl font-bold text-slate-800 mt-1">85.4%</h3>
        <span class="text-xs text-emerald-600 font-semibold mt-1 inline-block">↑ 4.2% dari minggu lalu</span>
      </div>
      <div class="bg-white border border-slate-300 p-5 rounded-2xl shadow-sm">
        <span class="text-sm text-slate-500 font-medium">Rata-rata Skor Kuis</span>
        <h3 class="text-2xl font-bold text-slate-800 mt-1">78 / 100</h3>
        <span class="text-xs text-amber-600 font-semibold mt-1 inline-block">→ Stabil</span>
      </div>
    </div>

    <!-- Kotak Pembungkus Konten Utama (Tabel Aktivitas Populer) -->
    <div class="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-sm">
      
      <!-- Area Filter / Pencarian -->
      <div class="p-5 flex justify-between items-center gap-4">
        <div class="relative w-80">
          <input 
            type="text" 
            placeholder="Cari konten materi..." 
            class="w-full pl-4 pr-4 py-2 border border-slate-400 rounded-xl text-sm focus:outline-none focus:border-blue-500 placeholder-slate-400 text-slate-700"
          />
        </div>
        <div>
          <select class="border border-slate-400 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500 text-slate-700 bg-white min-w-[150px]">
            <option>7 Hari Terakhir</option>
            <option>30 Hari Terakhir</option>
            <option>Bulan Ini</option>
          </select>
        </div>
      </div>

      <!-- Tabel Data Analitik Materi Terpopuler -->
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-50 border-t border-b border-slate-300 text-slate-800 font-bold text-sm">
              <th class="p-4 pl-6 font-semibold">Materi Terpopuler</th>
              <th class="p-4 font-semibold">Kategori</th>
              <th class="p-4 font-semibold">Total Dilihat</th>
              <th class="p-4 font-semibold">Rata-rata Durasi</th>
              <th class="p-4 font-semibold">Keterlibatan</th>
              <th class="p-4 pr-6 text-center font-semibold">Detail</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 text-sm text-slate-700 font-medium">
            <!-- Baris 1 -->
            <tr class="hover:bg-slate-50/50">
              <td class="p-4 pl-6 font-bold text-slate-900">Aljabar Linear & Variabel X</td>
              <td class="p-4 text-slate-500">Matematika</td>
              <td class="p-4 text-slate-600">3,420 kali</td>
              <td class="p-4 text-slate-600">18 Menit</td>
              <td class="p-4">
                <span class="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md text-xs font-bold">Tinggi</span>
              </td>
              <td class="p-4 pr-6 text-center">
                <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-xs font-semibold shadow-sm transition-colors">
                  Lihat
                </button>
              </td>
            </tr>
            <!-- Baris 2 -->
            <tr class="hover:bg-slate-50/50">
              <td class="p-4 pl-6 font-bold text-slate-900">Sistem Tata Surya & Galaksi Bima Sakti</td>
              <td class="p-4 text-slate-500">Sains (IPA)</td>
              <td class="p-4 text-slate-600">2,890 kali</td>
              <td class="p-4 text-slate-600">24 Menit</td>
              <td class="p-4">
                <span class="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md text-xs font-bold">Tinggi</span>
              </td>
              <td class="p-4 pr-6 text-center">
                <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-xs font-semibold shadow-sm transition-colors">
                  Lihat
                </button>
              </td>
            </tr>
            <!-- Baris 3 -->
            <tr class="hover:bg-slate-50/50">
              <td class="p-4 pl-6 font-bold text-slate-900">Struktur Teks Prosedur Kompleks</td>
              <td class="p-4 text-slate-500">Bahasa Indonesia</td>
              <td class="p-4 text-slate-600">1,200 kali</td>
              <td class="p-4 text-slate-600">12 Menit</td>
              <td class="p-4">
                <span class="bg-amber-50 text-amber-600 px-2.5 py-1 rounded-md text-xs font-bold">Sedang</span>
              </td>
              <td class="p-4 pr-6 text-center">
                <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-xs font-semibold shadow-sm transition-colors">
                  Lihat
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  `;
}