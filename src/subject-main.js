import "./style.css";

import AOS from "aos";
import "aos/dist/aos.css";

import navbar from "./components/Navbar/navbar";
import subjectSelection from "./pages/subjectSelection";

AOS.init({
  once: true,
  duration: 800,
});

document.querySelector("#app").innerHTML = `
${navbar()}
${subjectSelection()}
`;

const subjects = document.querySelectorAll(".subject-card");
const text = document.getElementById("selectedSubject");
const nextBtn = document.getElementById("nextBtn");

subjects.forEach(subject => {

    subject.addEventListener("click", () => {

        // hapus semua pilihan
        subjects.forEach(s => s.classList.remove("active"));

        // aktifkan pilihan baru
        subject.classList.add("active");

        // ubah tulisan
        text.innerHTML = `
            Mata pelajaran dipilih :
            <b>${subject.querySelector("h3").innerText}</b>
        `;

        // aktifkan tombol
        nextBtn.classList.remove(
            "opacity-50",
            "pointer-events-none"
        );

    });

});