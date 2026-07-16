import sidebar from "./sidebar";
import topbar from "./topbar";
import statistics from "./statistics";
import kelasHariIni from "./kelasHariIni";
import perhatian from "./perhatian";

export default function dashboardGuru() {
  return `
<section class="min-h-screen bg-[#F5F7FB]">

    <div class="flex">

        ${sidebar()}

        <main class="flex-1">

            ${topbar()}

            <div id="dashboardContent" class="px-8 py-6">

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