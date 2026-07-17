export default function konten() {
  return `
    <!-- Header Manajemen Konten -->
    <div class="flex justify-between items-center mb-6">
      <div>
        <h2 class="text-2xl font-bold text-slate-800 tracking-tight">Manajemen Konten</h2>
        <p class="text-sm text-slate-500 mt-1">Kelola seluruh materi pembelajaran, modul, dan video interaktif.</p>
      </div>
      <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold inline-flex items-center gap-1.5 shadow-sm transition-colors">
        <span class="text-lg leading-none">+</span> Tambah Konten
      </button>
    </div>

    <!-- Kotak Pembungkus Konten Utama (Tabel & Filter) -->
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
            <option>Semua Kategori</option>
            <option>Matematika</option>
            <option>Sains & IPA</option>
            <option>Bahasa Indonesia</option>
            <option>Bahasa Inggris</option>
          </select>
        </div>
      </div>

      <!-- Tabel Data Konten -->
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-50 border-t border-b border-slate-300 text-slate-800 font-bold text-sm">
              <th class="p-4 pl-6 font-semibold">Judul Materi</th>
              <th class="p-4 font-semibold">Mata Pelajaran</th>
              <th class="p-4 font-semibold">Kelas</th>
              <th class="p-4 font-semibold">Pembuat (Guru)</th>
              <th class="p-4 font-semibold">Status</th>
              <th class="p-4 pr-6 text-center font-semibold">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-200 text-sm text-slate-700 font-medium">
            <!-- Baris 1 -->
            <tr class="hover:bg-slate-50/50">
              <td class="p-4 pl-6 font-bold text-slate-900">Aljabar Linear & Variabel X</td>
              <td class="p-4 text-slate-500">Matematika</td>
              <td class="p-4 text-slate-600">Kelas VII</td>
              <td class="p-4 text-slate-600">Budi Santoso</td>
              <td class="p-4">
                <span class="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md text-xs font-bold">Publik</span>
              </td>
              <td class="p-4 pr-6 text-center">
                <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-xs font-semibold shadow-sm transition-colors">
                  Edit
                </button>
              </td>
            </tr>
            <!-- Baris 2 -->
            <tr class="hover:bg-slate-50/50">
              <td class="p-4 pl-6 font-bold text-slate-900">Sistem Tata Surya & Galaksi Bima Sakti</td>
              <td class="p-4 text-slate-500">Sains (IPA)</td>
              <td class="p-4 text-slate-600">Kelas VIII</td>
              <td class="p-4 text-slate-600">Anisa Rahmaawati</td>
              <td class="p-4">
                <span class="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-md text-xs font-bold">Publik</span>
              </td>
              <td class="p-4 pr-6 text-center">
                <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-xs font-semibold shadow-sm transition-colors">
                  Edit
                </button>
              </td>
            </tr>
            <!-- Baris 3 -->
            <tr class="hover:bg-slate-50/50">
              <td class="p-4 pl-6 font-bold text-slate-900">Struktur Teks Prosedur Kompleks</td>
              <td class="p-4 text-slate-500">Bahasa Indonesia</td>
              <td class="p-4 text-slate-600">Kelas IX</td>
              <td class="p-4 text-slate-600">Ahmad Dhani</td>
              <td class="p-4">
                <span class="bg-amber-50 text-amber-600 px-2.5 py-1 rounded-md text-xs font-bold">Draft</span>
              </td>
              <td class="p-4 pr-6 text-center">
                <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-xs font-semibold shadow-sm transition-colors">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  `;
}