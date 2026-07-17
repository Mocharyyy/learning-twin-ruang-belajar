import "./style.css";

// Import Library AOS (Animation on Scroll)
import AOS from "aos";
import "aos/dist/aos.css";

// Import Halaman Utama Dashboard Admin beserta fungsi Init-nya
import dashboardAdmin, { initDashboard } from "./components/pages/dashboardAdmin.js";

// Inisialisasi Animasi
AOS.init({
  once: true,
  duration: 700
});

// 1. Render layouting & HTML Dashboard Admin ke dalam div id="app"
document.querySelector("#app").innerHTML = dashboardAdmin();

// 2. Aktifkan semua fungsi klik tombol sidebar (Sekolah, Pengguna, Konten, Analitik, Pengaturan)
initDashboard();