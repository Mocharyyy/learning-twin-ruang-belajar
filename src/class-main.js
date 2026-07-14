import "./style.css";

import AOS from "aos";
import "aos/dist/aos.css";

import navbar from "./components/Navbar/navbar";
import classSelection from "./pages/classSelection";

AOS.init({
  once: true,
  duration: 800,
});

document.querySelector("#app").innerHTML = `
${navbar()}
${classSelection()}
`;

const cards = document.querySelectorAll(".class-card");
const selectedText = document.getElementById("selectedClass");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => c.classList.remove("active"));

    card.classList.add("active");

    selectedText.textContent = `Kelas dipilih : ${card.innerText}`;
  });
});