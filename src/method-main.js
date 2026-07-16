import "./style.css";

import AOS from "aos";
import "aos/dist/aos.css";

import navbar from "./components/Navbar/navbar";
import methodSelection from "./pages/methodSelection";

AOS.init({
    once: true,
    duration: 800,
});

document.querySelector("#app").innerHTML = `
${navbar()}
${methodSelection()}
`;

// =========================
// PILIH SATU METODE SAJA
// =========================

const methods = document.querySelectorAll(".method-card");
const text = document.getElementById("selectedMethod");
const nextBtn = document.getElementById("nextBtn");

methods.forEach(method => {

    method.addEventListener("click", () => {

        // hapus pilihan sebelumnya
        methods.forEach(m => m.classList.remove("active"));

        // aktifkan yang dipilih
        method.classList.add("active");

        // ubah text
        text.innerHTML = `
            Metode dipilih :
            <b>${method.querySelector("h3").innerText}</b>
        `;

        // aktifkan tombol lanjut
        nextBtn.classList.remove(
            "opacity-50",
            "pointer-events-none"
        );

    });

});