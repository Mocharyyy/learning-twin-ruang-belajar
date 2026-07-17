export default function statistikPlatform() {
  return `
<section class="bg-white rounded-xl border border-slate-200 shadow-sm">

    <div class="px-5 py-4 border-b">

        <h2 class="font-bold text-lg">
            Statistik Platform
        </h2>

    </div>

    <div class="p-5 space-y-5">

        <div>

            <div class="flex justify-between text-sm mb-2">

                <span>Penggunaan Metode Teks</span>

                <span>60%</span>

            </div>

            <div class="w-full bg-slate-200 rounded-full h-2">

                <div class="bg-blue-600 h-2 rounded-full w-[60%]"></div>

            </div>

        </div>

        <div>

            <div class="flex justify-between text-sm mb-2">

                <span>Penggunaan Quiz</span>

                <span>80%</span>

            </div>

            <div class="w-full bg-slate-200 rounded-full h-2">

                <div class="bg-green-500 h-2 rounded-full w-[80%]"></div>

            </div>

        </div>

        <div>

            <div class="flex justify-between text-sm mb-2">

                <span>Penggunaan Video</span>

                <span>45%</span>

            </div>

            <div class="w-full bg-slate-200 rounded-full h-2">

                <div class="bg-yellow-400 h-2 rounded-full w-[45%]"></div>

            </div>

        </div>

    </div>

</section>
`;
}