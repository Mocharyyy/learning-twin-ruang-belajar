import "./style.css";

import dashboardGuru from "./pages/DashboardGuru/dashboardGuru";
import statistics from "./pages/DashboardGuru/statistics";
import kelasHariIni from "./pages/DashboardGuru/kelasHariIni";
import perhatian from "./pages/DashboardGuru/perhatian";
import kelasSaya from "./pages/DashboardGuru/kelasSaya";
import dataSiswa from "./pages/DashboardGuru/dataSiswa";
import bankSoal from "./pages/DashboardGuru/bankSoal";
import laporan from "./pages/DashboardGuru/laporan";

document.querySelector("#app").innerHTML = dashboardGuru();

const content = document.getElementById("dashboardContent");

document
  .getElementById("menu-ringkasan")
  .addEventListener("click", () => {
    content.innerHTML = `
      ${statistics()}

      <div class="grid grid-cols-3 gap-6 mt-6">

        <div class="col-span-2">
          ${kelasHariIni()}
        </div>

        <div>
          ${perhatian()}
        </div>

      </div>
    `;
  });

document
  .getElementById("menu-kelas")
  .addEventListener("click", () => {
    content.innerHTML = kelasSaya();
  });

  document
  .getElementById("menu-siswa")
  .addEventListener("click", () => {
    content.innerHTML = dataSiswa();
  });

  document
.getElementById("menu-bank")
.addEventListener("click",()=>{

content.innerHTML = bankSoal();

});

document
.getElementById("menu-laporan")
.addEventListener("click",()=>{

content.innerHTML = laporan();

});