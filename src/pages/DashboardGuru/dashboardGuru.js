import sidebar from "./sidebar.js";
import topbar from "./topbar.js";
import statistics from "./statistics.js";
import kelasHariIni from "./kelasHariIni.js";
import perhatian from "./perhatian.js";

export default function dashboardGuru() {
  return `

<section class="min-h-screen bg-[#F5F7FB]">

<div class="flex">

    ${sidebar()}

    <main class="flex-1">

        ${topbar()}

        <div class="px-8 py-6">

            ${statistics()}

            <div class="grid grid-cols-3 gap-6 mt-6">

                <div class="col-span-2">

                    ${kelasHariIni()}

                </div>

                <div>

                    ${perhatian()}

                </div>

            </div>

        </div>

    </main>

</div>

</section>

`;
}