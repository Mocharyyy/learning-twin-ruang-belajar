export default function pengaturan() {
  return `
    <!-- Header Pengaturan -->
    <div class="mb-6">
      <h2 class="text-2xl font-bold text-slate-800 tracking-tight">Pengaturan Sistem</h2>
      <p class="text-sm text-slate-500 mt-1">Kelola konfigurasi platform, informasi instansi, dan keamanan akun.</p>
    </div>

    <!-- Kotak Utama Form Pengaturan -->
    <div class="bg-white border border-slate-300 rounded-2xl p-6 shadow-sm max-w-4xl">
      <form class="space-y-6 text-sm text-slate-700">
        
        <!-- Seksi 1: Profil Instansi -->
        <div>
          <h3 class="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Profil Platform</h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block font-semibold mb-1.5 text-slate-800">Nama Aplikasi / Platform</label>
              <input type="text" value="Learning Twin" class="w-full px-4 py-2 border border-slate-400 rounded-xl focus:outline-none focus:border-blue-500 text-slate-900 font-medium" />
            </div>
            <div>
              <label class="block font-semibold mb-1.5 text-slate-800">Nama Perusahaan / Instansi</label>
              <input type="text" value="PT Learning Twin Indonesia" class="w-full px-4 py-2 border border-slate-400 rounded-xl focus:outline-none focus:border-blue-500 text-slate-900 font-medium" />
            </div>
          </div>
        </div>

        <!-- Seksi 2: Kontak & Sistem -->
        <div class="pt-2">
          <h3 class="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Kontak & Notifikasi</h3>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="block font-semibold mb-1.5 text-slate-800">Email Sistem</label>
              <input type="email" value="system@learningtwin.id" class="w-full px-4 py-2 border border-slate-400 rounded-xl focus:outline-none focus:border-blue-500 text-slate-900 font-medium" />
            </div>
            <div>
              <label class="block font-semibold mb-1.5 text-slate-800">Zona Waktu Default</label>
              <select class="w-full px-4 py-2 border border-slate-400 rounded-xl focus:outline-none focus:border-blue-500 text-slate-900 font-medium bg-white">
                <option>Asia/Jakarta (WIB)</option>
                <option>Asia/Makassar (WITA)</option>
                <option>Asia/Jayapura (WIT)</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Seksi 3: Fitur Keamanan (Toggle Simulasi) -->
        <div class="pt-2">
          <h3 class="text-base font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Keamanan</h3>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-3 border border-slate-200 rounded-xl bg-slate-50">
              <div>
                <span class="block font-bold text-slate-800">Registrasi Mandiri Siswa</span>
                <span class="text-xs text-slate-500">Izinkan siswa baru membuat akun mereka sendiri tanpa approval admin.</span>
              </div>
              <input type="checkbox" checked class="w-4 h-4 text-blue-600 border-slate-400 rounded focus:ring-blue-500" />
            </div>
            <div class="flex items-center justify-between p-3 border border-slate-200 rounded-xl bg-slate-50">
              <div>
                <span class="block font-bold text-slate-800">Mode Pemeliharaan (Maintenance Mode)</span>
                <span class="text-xs text-slate-500">Kunci akses platform untuk publik sementara waktu demi pemeliharaan server.</span>
              </div>
              <input type="checkbox" class="w-4 h-4 text-blue-600 border-slate-400 rounded focus:ring-blue-500" />
            </div>
          </div>
        </div>

        <!-- Tombol Aksi -->
        <div class="flex justify-end gap-3 pt-4 border-t border-slate-200">
          <button type="button" class="px-5 py-2 border border-slate-400 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
            Batal
          </button>
          <button type="submit" class="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-sm transition-colors">
            Simpan Perubahan
          </button>
        </div>

      </form>
    </div>
  `;
}