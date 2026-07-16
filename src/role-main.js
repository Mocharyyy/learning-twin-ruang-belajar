import "./style.css";
import role from "./pages/Register/role.js";

document.querySelector("#app").innerHTML = role();

const roles = document.querySelectorAll(".role-card");
const nextBtn = document.getElementById("nextBtn");

let selectedRole = "";

roles.forEach((role) => {

    role.addEventListener("click", () => {

        roles.forEach(r => {
            r.classList.remove("border-blue-600", "bg-blue-50");

            const box = r.querySelector(".checkbox");

            box.classList.remove("bg-blue-600");
            box.innerHTML = "";
        });

        role.classList.add("border-blue-600", "bg-blue-50");

        const box = role.querySelector(".checkbox");

        box.classList.add("bg-blue-600");
        box.innerHTML = "✓";
        box.classList.add("text-white","flex","items-center","justify-center");

        selectedRole = role.querySelector("h3").innerText;

        nextBtn.classList.remove(
            "opacity-50",
            "pointer-events-none"
        );

    });

});

nextBtn.addEventListener("click", () => {

    if(selectedRole === "Siswa"){
        window.location.href="/class.html";
    }

    if(selectedRole === "Guru"){
        window.location.href="/dashboard-guru.html";
    }

});