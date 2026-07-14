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

const cards = document.querySelectorAll(".subject-card");
const text = document.getElementById("selectedSubject");

cards.forEach(card => {

card.addEventListener("click",()=>{

card.classList.toggle("active");

const active=document.querySelectorAll(".subject-card.active");

if(active.length===0){

text.innerHTML="Pilih minimal 1 mata pelajaran";

}else{

text.innerHTML=`${active.length} Mata Pelajaran Dipilih`;

}

});

});