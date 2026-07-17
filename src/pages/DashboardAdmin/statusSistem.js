export default function statusSistem() {
  return `

<section class="bg-white rounded-xl border border-slate-200 shadow-sm">

    <div class="px-6 py-4 border-b">

        <h2 class="text-lg font-bold text-slate-800">

            Status Sistem

        </h2>

    </div>

    <div class="p-5 space-y-4">

        <div class="flex justify-between items-center">

            <span>API Server</span>

            <span class="text-green-600 font-semibold">

                ● Normal

            </span>

        </div>

        <div class="flex justify-between items-center">

            <span>AI Engine</span>

            <span class="text-green-600 font-semibold">

                ● Normal

            </span>

        </div>

        <div class="flex justify-between items-center">

            <span>Database</span>

            <span class="text-green-600 font-semibold">

                ● Normal

            </span>

        </div>

        <div class="flex justify-between items-center">

            <span>CDN Video</span>

            <span class="text-yellow-500 font-semibold">

                ● Lambat

            </span>

        </div>

    </div>

</section>

`;
}