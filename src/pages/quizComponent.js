export default function quizComponent(subjectName, chapterTitle, chapterId) {
  // Data bank soal dummy per bab
  const quizData = {
    1: [
      { q: "Jika $2x + 5 = 13$, berapakah nilai $x$?", a: ["3", "4", "5", "6"], correct: 1 },
      { q: "Faktorkan bentuk aljabar berikut: $x^2 - 9$", a: ["(x-3)(x-3)", "(x+3)(x+3)", "(x-3)(x+3)", "(x-9)(x+1)"], correct: 2 }
    ],
    2: [
      { q: "Berapakah nilai dari $\\sin(30^\\circ)$?", a: ["0", "0.5", "0.707", "1"], correct: 1 }
    ],
    3: [
      { q: "Rumus luas permukaan sebuah kubus dengan rusuk $s$ adalah...", a: ["s^3", "4s^2", "6s^2", "12s"], correct: 2 }
    ],
    4: [
      { q: "Nilai tengah dari suatu data berkelompok yang diurutkan disebut...", a: ["Mean", "Median", "Modus", "Kuartil"], correct: 1 }
    ]
  };

  const questions = quizData[chapterId] || quizData[1];

  return `
    <section class="min-h-screen bg-[#EAF6FF] py-12">
      <div class="container-custom max-w-3xl mx-auto px-6">
        <div id="quizContainer" class="bg-white rounded-[30px] shadow-xl p-8 transition-all">
          
          <!-- Header Kuis -->
          <div class="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
            <div>
              <div class="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                <span>${subjectName}</span> • <span class="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">Quiz</span>
              </div>
              <h1 class="text-2xl font-bold text-slate-800">Bab ${chapterId}: ${chapterTitle}</h1>
            </div>
            <div class="text-right">
              <span id="questionCounter" class="text-sm font-bold text-slate-500">Soal 1 dari ${questions.length}</span>
            </div>
          </div>

          <!-- Area Pertanyaan -->
          <div id="quizBody">
            ${questions.map((item, index) => `
              <div class="quiz-question-card ${index === 0 ? '' : 'hidden'}" data-index="${index}">
                <p class="text-lg font-semibold text-slate-700 mb-6 leading-relaxed">${item.q}</p>
                <div class="grid gap-3">
                  ${item.a.map((option, optIdx) => `
                    <button 
                      class="quiz-option-btn w-full text-left p-4 rounded-xl border border-slate-200 hover:border-indigo-500 hover:bg-indigo-50/50 font-medium text-slate-600 transition-all flex items-center justify-between group"
                      data-correct="${optIdx === item.correct}"
                    >
                      <span>${option}</span>
                      <span class="w-5 h-5 rounded-full border border-slate-300 group-hover:border-indigo-500 transition-all shrink-0"></span>
                    </button>
                  `).join('')}
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Footer Navigasi Internal Kuis -->
          <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            <button id="btnExitQuiz" class="text-sm font-bold text-slate-400 hover:text-rose-500 transition-colors">
              Keluar Kuis
            </button>
            <button id="btnNextQuestion" class="hidden bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-all shadow-md">
              Lanjut →
            </button>
          </div>

        </div>
      </div>
    </section>
  `;
}

export function initQuizPlayer(chapterId, onBack, onQuizSuccess) {
  document.getElementById("btnExitQuiz")?.addEventListener("click", onBack);

  const questions = document.querySelectorAll(".quiz-question-card");
  const nextBtn = document.getElementById("btnNextQuestion");
  let currentIdx = 0;
  let score = 0;

  function setupOptions() {
    const activeCard = questions[currentIdx];
    const options = activeCard.querySelectorAll(".quiz-option-btn");

    options.forEach(option => {
      option.addEventListener("click", function() {
        // Kunci semua opsi agar tidak bisa ganti jawaban
        options.forEach(opt => opt.disabled = true);
        
        const isCorrect = this.getAttribute("data-correct") === "true";
        const indicator = this.querySelector("div, span:last-child");

        if (isCorrect) {
          score++;
          this.classList.remove("border-slate-200");
          this.classList.add("border-emerald-500", "bg-emerald-50", "text-emerald-700");
          indicator.className = "w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs after:content-['✓'] font-bold";
        } else {
          this.classList.remove("border-slate-200");
          this.classList.add("border-rose-500", "bg-rose-50", "text-rose-700");
          indicator.className = "w-5 h-5 rounded-full bg-rose-500 flex items-center justify-center text-white text-xs after:content-['✗'] font-bold";
          
          // Cari & tandai opsi yang benar
          options.forEach(opt => {
            if(opt.getAttribute("data-correct") === "true") {
              opt.classList.add("border-emerald-500", "text-emerald-700");
            }
          });
        }

        nextBtn.classList.remove("hidden");
        if (currentIdx === questions.length - 1) {
          nextBtn.innerText = "Lihat Hasil 🎉";
        }
      });
    });
  }

  nextBtn?.addEventListener("click", () => {
    nextBtn.classList.add("hidden");
    
    if (currentIdx < questions.length - 1) {
      questions[currentIdx].classList.add("hidden");
      currentIdx++;
      questions[currentIdx].classList.remove("hidden");
      document.getElementById("questionCounter").innerText = `Soal ${currentIdx + 1} dari ${questions.length}`;
      setupOptions();
    } else {
      // Tampilkan Halaman Hasil Kuis
      const totalQuestions = questions.length;
      const finalScore = Math.round((score / totalQuestions) * 100);
      const isPassed = finalScore >= 70;

      document.getElementById("quizContainer").innerHTML = `
        <div class="text-center py-8">
          <div class="text-6xl mb-4">${isPassed ? '🏆' : '📚'}</div>
          <h2 class="text-3xl font-bold text-slate-800">Hasil Evaluasi Kuis</h2>
          <p class="text-slate-500 mt-2">Kamu menjawab benar ${score} dari ${totalQuestions} soal.</p>
          
          <div class="inline-block my-6 bg-slate-50 border px-8 py-4 rounded-2xl">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400 block">Skor Akhir</span>
            <span class="text-5xl font-black ${isPassed ? 'text-emerald-500' : 'text-amber-500'}">${finalScore}</span>
          </div>

          <p class="text-sm max-w-md mx-auto ${isPassed ? 'text-emerald-600 font-medium' : 'text-slate-400'}">
            ${isPassed ? 'Selamat! Kamu telah lulus kuis bab ini dan berhak membuka tantangan di bab berikutnya.' : 'Skor kamu belum mencapai batas minimal kelulusan (70). Coba pelajari lagi materinya ya!'}
          </p>

          <div class="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-4">
            <button id="btnFinishQuizBack" class="px-6 py-3 border rounded-xl font-bold text-slate-500 hover:bg-slate-50 text-sm transition-all">
              Kembali ke Daftar Bab
            </button>
            ${isPassed ? `
              <button id="btnClaimNextChapter" class="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-emerald-500/10">
                Buka Kunci Bab Selanjutnya 🔓
              </button>
            ` : ''}
          </div>
        </div>
      `;

      document.getElementById("btnFinishQuizBack")?.addEventListener("click", onBack);
      document.getElementById("btnClaimNextChapter")?.addEventListener("click", () => onQuizSuccess(chapterId));
    }
  });

  // Jalankan inisialisasi awal kuis
  setupOptions();
}