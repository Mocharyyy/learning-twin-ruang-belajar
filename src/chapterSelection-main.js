// Tambahkan 2 import ini di baris paling atas file kamu!
import chapterSelection, { initChapterSelection } from "./pages/chapterSelection.js";

export function renderPilihBab(subjectName, methodName) {
  // 1. Render HTML ke id="app"
  document.querySelector("#app").innerHTML = chapterSelection(subjectName, methodName);

  // 2. Aktifkan event kliknya
  initChapterSelection(
    (chapterId) => {
      console.log(`Buka materi untuk Bab ID: ${chapterId}`);
    },
    () => {
      console.log("Siswa klik kembali ke menu metode belajar");
    }
  );
}

// JIKA kamu ingin halaman bab ini langsung muncul saat file di-load (untuk testing):
// renderPilihBab("Matematika", "Materi Teks");

// ... kode atas method-main.js kamu tetap sama ...

// Di dalam event listener nextBtn.addEventListener("click", (e) => { ... })
initChapterSelection(
    (chapterId, chapterTitle) => {
        console.log(`Siswa setuju masuk ke Bab ID: ${chapterId}`);
        
        // Simulasi jika siswa masuk materi dan menyelesaikannya nanti:
        // Anda tinggal set: localStorage.setItem("user_chapter_progress", chapterId);
        
        alert(`Membuka halaman modul belajar untuk: ${chapterTitle}`);
        // Tempatkan render Halaman Bacaan Teks/Materi di sini!
    },
    () => {
        window.location.reload();
    }
);