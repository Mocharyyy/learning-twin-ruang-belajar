import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";

import navbar from "./components/Navbar/navbar";
import methodSelection from "./pages/methodSelection";
import chapterSelection, { initChapterSelection } from "./pages/chapterSelection.js";
import videoPlayer, { initVideoPlayer } from "./pages/videoPlayer.js";
import quizComponent, { initQuizPlayer } from "./pages/quizComponent.js";

AOS.init({ once: true, duration: 800 });

document.querySelector("#app").innerHTML = `
${navbar()}
${methodSelection()}
`;

const methods = document.querySelectorAll(".method-card");
const text = document.getElementById("selectedMethod");
const nextBtn = document.getElementById("nextBtn");
let selectedMethodName = ""; 

methods.forEach(method => {
    method.addEventListener("click", () => {
        methods.forEach(m => m.classList.remove("active"));
        method.classList.add("active");
        selectedMethodName = method.querySelector("h3").innerText;
        text.innerHTML = `Metode dipilih : <b>${selectedMethodName}</b>`;
        nextBtn.classList.remove("opacity-50", "pointer-events-none");
    });
});

if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const currentSubject = localStorage.getItem("selectedSubject") || "Matematika";

        function tampilkanHalamanBab() {
            document.querySelector("#app").innerHTML = `
                ${navbar()}
                ${chapterSelection(currentSubject, selectedMethodName)}
            `;

            initChapterSelection(
                (chapterId, chapterTitle) => {
                    // Percabangan Metode Belajar
                    if (selectedMethodName === "Video Pembelajaran") {
                        tampilkanPemutarVideo(chapterId, chapterTitle);
                    } else if (selectedMethodName === "Quiz Interaktif") {
                        tampilkanQuizInteraktif(chapterId, chapterTitle);
                    } else {
                        alert(`Membuka Teks Materi Modul untuk: ${chapterTitle}`);
                    }
                },
                () => { window.location.reload(); }
            );
        }

        function tampilkanPemutarVideo(chapterId, chapterTitle) {
            document.querySelector("#app").innerHTML = `
                ${navbar()}
                ${videoPlayer(currentSubject, chapterTitle, chapterId)}
            `;
            initVideoPlayer(
                () => { tampilkanHalamanBab(); },
                (completedId) => { 
                    const currentProgress = parseInt(localStorage.getItem("user_video_progress")) || 0;
                    if (completedId > currentProgress) localStorage.setItem("user_video_progress", completedId);
                    alert("Selamat! Video selesai ditonton, Bab selanjutnya kini terbuka! 🔓");
                    tampilkanHalamanBab();
                }
            );
        }

        function tampilkanQuizInteraktif(chapterId, chapterTitle) {
            document.querySelector("#app").innerHTML = `
                ${navbar()}
                ${quizComponent(currentSubject, chapterTitle, chapterId)}
            `;
            initQuizPlayer(
                chapterId,
                () => { tampilkanHalamanBab(); },
                (completedId) => {
                    const currentProgress = parseInt(localStorage.getItem("user_quiz_progress")) || 0;
                    if (parseInt(completedId) > currentProgress) {
                        localStorage.setItem("user_quiz_progress", completedId);
                    }
                    alert("Keren! Kunci quiz bab baru telah terbuka! 🔓");
                    tampilkanHalamanBab();
                }
            );
        }

        tampilkanHalamanBab();
    });
}