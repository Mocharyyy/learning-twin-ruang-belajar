import sidebar from "./sidebar.js";
import topbar from "./topbar.js";

import statistics from "./statistics.js";
import sekolahTerdaftar from "./sekolahTerdaftar.js";
import registrasiBaru from "./registrasiBaru.js";
import statistikPlatform from "./statistikPlatform.js";
import statusSistem from "./statusSistem.js";
import aksiCepat from "./aksiCepat.js";
import pengguna from "./pengguna.js";
import konten from "./konten.js"; 
import analitik from "./analitik.js";
import pengaturan from "./pengaturan.js"; // Import pengaturan berhasil ditambahkan

export default function dashboardAdmin() {
  return `
    <div class="flex">
      ${sidebar()}
      <main class="flex-1 bg-slate-100">
        ${topbar()}
        <div id="content-area" class="p-8">
          ${statistics()}
          <div class="grid grid-cols-3 gap-6 mt-6">
            <div class="col-span-2 space-y-6">
              ${sekolahTerdaftar()}
              ${registrasiBaru()}
            </div>
            <div class="space-y-6">
              ${statistikPlatform()}
              ${statusSistem()}
              ${aksiCepat()}
            </div>
          </div>
        </div>
      </main>
    </div>
  `;
}

export function initDashboard() {
  const dashboard = document.getElementById("menu-dashboard");
  const sekolah = document.getElementById("menu-sekolah");
  const penggunaBtn = document.getElementById("menu-pengguna");
  const kontenBtn = document.getElementById("menu-konten");
  const analitikBtn = document.getElementById("menu-analitik");
  const pengaturanBtn = document.getElementById("menu-pengaturan"); // Inisialisasi tombol pengaturan

  // Event untuk menu Dashboard (Ringkasan)
  dashboard.addEventListener("click", () => {
    document.getElementById("content-area").innerHTML = `
      ${statistics()}
      <div class="grid grid-cols-3 gap-6 mt-6">
        <div class="col-span-2 space-y-6">
          ${sekolahTerdaftar()}
          ${registrasiBaru()}
        </div>
        <div class="space-y-6">
          ${statistikPlatform()}
          ${statusSistem()}
          ${aksiCepat()}
        </div>
      </div>
    `;
    setActive(dashboard);
  });

  // Event untuk menu Sekolah
  sekolah.addEventListener("click", async () => {
    const module = await import("./sekolah.js");
    document.getElementById("content-area").innerHTML = module.default();
    setActive(sekolah);
  });

  // Event untuk menu Pengguna
  penggunaBtn.addEventListener("click", () => {
    document.getElementById("content-area").innerHTML = pengguna();
    setActive(penggunaBtn);
  });

  // Event untuk menu Konten
  kontenBtn.addEventListener("click", () => {
    document.getElementById("content-area").innerHTML = konten();
    setActive(kontenBtn);
  });

  // Event untuk menu Analitik
  analitikBtn.addEventListener("click", () => {
    document.getElementById("content-area").innerHTML = analitik();
    setActive(analitikBtn);
  });

  // Event untuk menu Pengaturan
  pengaturanBtn.addEventListener("click", () => {
    document.getElementById("content-area").innerHTML = pengaturan();
    setActive(pengaturanBtn);
  });
}

function setActive(activeButton) {
  document.querySelectorAll(".admin-menu").forEach((btn) => {
    btn.classList.remove("active");
  });
  activeButton.classList.add("active");
}