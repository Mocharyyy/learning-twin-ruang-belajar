import "./style.css";
import role from "./pages/Register/role.js";

document.querySelector("#app").innerHTML = role();

const buttons = document.querySelectorAll(".role-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("bg-blue-600", "text-white");
      btn.classList.add("bg-white", "text-blue-600");
    });

    button.classList.remove("bg-white", "text-blue-600");
    button.classList.add("bg-blue-600", "text-white");
  });
});