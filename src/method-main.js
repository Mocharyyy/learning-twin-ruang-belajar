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

const cards = document.querySelectorAll(".method-card");
const text = document.getElementById("selectedMethod");

cards.forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("active");

const active=document.querySelectorAll(".method-card.active");

if(active.length==0){

text.innerHTML="Pilih minimal satu metode belajar";

}else{

text.innerHTML=`${active.length} metode dipilih`;

}

});

});