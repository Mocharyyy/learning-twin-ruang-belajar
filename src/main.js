import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import navbar from "./components/Navbar/navbar";
import hero from "./components/Hero/hero";
import statistics from "./components/Statistics/statistics";
import cta from "./components/CTA/cta.js";
import footer from "./components/Footer/footer.js";
import workflow from "./components/Workflow/workflow.js";

AOS.init({
  once: true,
  duration: 800,
});

document.querySelector("#app").innerHTML = `
${navbar()}
${hero()}
${statistics()}
${workflow()}
${cta()}
${footer()}
`;
