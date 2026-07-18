export default function chapterSelection(subjectName, methodName) {
  let storageKey = "user_chapter_progress";
  if (methodName === "Video Pembelajaran") storageKey = "user_video_progress";
  if (methodName === "Quiz Interaktif") storageKey = "user_quiz_progress";

  const userProgress = parseInt(localStorage.getItem(storageKey)) || 0;

  const daftarBab = [
    { id: 1, judul: "Aljabar & Persamaan Linear", deskripsi: "Mempelajari konsep variabel, suku sejenis, faktorisasi aljabar, dan penyelesaian persamaan linear satu variabel.", subBab: 5 },
    { id: 2, judul: "Trigonometri Dasar", deskripsi: "Pengenalan perbandingan sinus, cosinus, tangen, serta aturan segitiga siku-siku dalam kehidupan sehari-hari.", subBab: 4 },
    { id: 3, judul: "Geometri & Bangun Ruang", deskripsi: "Menghitung volume, luas permukaan kubus, balok, tabung, kerucut, hingga aplikasi teori Pythagoras.", subBab: 6 },
    { id: 4, judul: "Statistika & Peluang", deskripsi: "Menganalisis data kelompok melalui mean, median, modus, serta menghitung komplemen peluang suatu kejadian.", subBab: 4 }
  ];

  return `
    <section class="min-h-screen bg-[#EAF6FF] py-20">
      <div class="container-custom max-w-5xl mx-auto px-6">
        <div class="bg-white rounded-[30px] shadow-xl p-10">
          
          <!-- Breadcrumb & Navigasi Atas -->
          <div class="flex items-center gap-2 text-sm text-slate-400 mb-4 font-medium">
            <span>${subjectName}</span>
            <span>•</span>
            <span class="text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md font-bold">${methodName}</span>
          </div>

          <h1 class="text-4xl font-bold text-slate-800 tracking-tight">
            Pilih Bab Pembelajaran
          </h1>
          <p class="text-slate-500 mt-2">
            Silakan pilih bab materi yang ingin kamu buka dan pelajari saat ini.
          </p>

          <!-- Grid Daftar Bab -->
          <div class="grid gap-4 mt-10">
            ${daftarBab.map(bab => {
              // LOGIK LOCKING: Bab 1 selalu terbuka. Bab selanjutnya terbuka jika bab sebelumnya sudah selesai.
              const isLocked = bab.id > 1 && bab.id > (userProgress + 1);

              return `
                <button 
                  class="chapter-card w-full text-left border p-6 rounded-2xl bg-white transition-all flex items-center justify-between group 
                  ${isLocked ? 'border-slate-200 opacity-60 bg-slate-50/50 cursor-not-allowed' : 'border-slate-200 hover:border-blue-500 hover:shadow-md hover:shadow-blue-500/5'}" 
                  data-chapter-id="${bab.id}"
                  data-chapter-title="${bab.judul}"
                  data-locked="${isLocked}"
                  ${isLocked ? 'disabled' : ''}
                >
                  <div class="flex items-start gap-5">
                    <!-- Nomor Bab / Indikator Gembok -->
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center font-bold transition-all shrink-0 
                      ${isLocked ? 'bg-slate-200 text-slate-400' : 'bg-slate-100 text-slate-600 group-hover:bg-blue-600 group-hover:text-white'}">
                      ${isLocked ? '🔒' : String(bab.id).padStart(2, '0')}
                    </div>
                    
                    <!-- Detail Bab -->
                    <div>
                      <h3 class="text-xl font-bold transition-colors ${isLocked ? 'text-slate-400' : 'text-slate-800 group-hover:text-blue-600'}">
                        ${bab.judul}
                      </h3>
                      <p class="text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
                        ${bab.deskripsi}
                      </p>
                      <span class="inline-block mt-3 bg-slate-100 text-slate-600 font-semibold text-xs px-2.5 py-1 rounded-md">
                        ${bab.subBab} Sub-Materi
                      </span>
                    </div>
                  </div>
                  
                  <!-- Panah Indikator -->
                  <div class="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all pr-2 text-xl font-bold">
                    ${isLocked ? '' : '→'}
                  </div>
                </button>
              `;
            }).join('')}
          </div>

          <!-- Tombol Kembali -->
          <div class="mt-8 pt-6 border-t border-slate-100">
            <button id="btnBackToMethod" class="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">
              ← Kembali Pilih Metode
            </button>
          </div>

        </div>
      </div>
    </section>
  `;
}

export function initChapterSelection(onChapterClick, onBackClick) {
  const cards = document.querySelectorAll(".chapter-card");
  
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const isLocked = card.getAttribute("data-locked") === "true";
      
      if (isLocked) {
        alert("Ups! Bab ini masih terkunci. Kamu harus menyelesaikan bab sebelumnya terlebih dahulu.");
        return;
      }

      const chapterId = card.getAttribute("data-chapter-id");
      const chapterTitle = card.getAttribute("data-chapter-title");

      // Prompt Konfirmasi / Pengingat Belajar
      const yakin = confirm(`Apakah kamu ingin mulai belajar "${chapterTitle}" sekarang?`);
      
      if (yakin && typeof onChapterClick === "function") {
        onChapterClick(chapterId, chapterTitle);
      }
    });
  });

  const backBtn = document.getElementById("btnBackToMethod");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      if (typeof onBackClick === "function") {
        onBackClick();
      }
    });
  }
}