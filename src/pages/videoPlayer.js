export default function videoPlayer(subjectName, chapterTitle, chapterId) {
  // Menggunakan link video dari CDN resmi yang dijamin lolos CORS di localhost
  const videoUrls = {
    1: "https://vjs.zencdn.net/v/oceans.mp4",
    2: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    3: "https://vjs.zencdn.net/v/oceans.mp4",
    4: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  };

  const currentVideo = videoUrls[chapterId] || videoUrls[1];

  return `
    <section class="min-h-screen bg-[#EAF6FF] py-12">
      <div class="container-custom max-w-4xl mx-auto px-6">
        <div class="bg-white rounded-[30px] shadow-xl p-8">
          
          <!-- Header Informasi -->
          <div class="flex items-center gap-2 text-sm text-slate-400 mb-2 font-medium">
            <span>${subjectName}</span>
            <span>•</span>
            <span class="text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-md font-bold">Video Pembelajaran</span>
          </div>
          
          <h1 class="text-3xl font-bold text-slate-800">Bab ${chapterId}: ${chapterTitle}</h1>
          <p class="text-slate-500 text-sm mt-1">Tonton video penjelasan di bawah ini sampai selesai untuk membuka materi berikutnya.</p>

          <!-- Pemutar Video HTML5 dengan fallback crossOrigin -->
          <div class="mt-8 aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-black flex items-center justify-center">
            <video 
              class="w-full h-full object-contain" 
              controls 
              preload="auto"
              crossorigin="anonymous"
              src="${currentVideo}">
              Browsermu tidak mendukung pemutar video HTML5.
            </video>
          </div>

          <!-- Kontrol Aksi -->
          <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            <button id="btnBackToChapters" class="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">
              ← Kembali ke Daftar Bab
            </button>
            
            <button 
              id="btnFinishVideo" 
              class="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md shadow-green-500/20 text-sm flex items-center gap-2"
              data-chapter-id="${chapterId}"
            >
              Selesai Tonton & Buka Bab Selanjutnya 🎉
            </button>
          </div>

        </div>
      </div>
    </section>
  `;
}

export function initVideoPlayer(onBack, onFinish) {
  document.getElementById("btnBackToChapters")?.addEventListener("click", onBack);
  
  const finishBtn = document.getElementById("btnFinishVideo");
  if (finishBtn) {
    finishBtn.addEventListener("click", () => {
      const chapterId = parseInt(finishBtn.getAttribute("data-chapter-id"));
      onFinish(chapterId);
    });
  }
}