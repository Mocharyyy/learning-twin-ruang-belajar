export default function classSelection() {
  return `
<section class="min-h-screen bg-[#EEF7FF] py-24">

<div class="container-custom max-w-5xl">

    <div class="bg-white rounded-3xl shadow-xl p-10">

        <h1 class="text-4xl font-bold text-slate-800">
            Pilih Kelas
        </h1>

        <p class="text-slate-500 mt-2">
            Materi akan disesuaikan dengan tingkat kelas yang dipilih.
        </p>

        <!-- SD -->
        <div class="mt-10">

            <div class="border rounded-xl overflow-hidden">

                <div class="bg-blue-50 px-5 py-3 border-b">

                    <h2 class="font-bold text-blue-700">
                        SD
                        <span class="font-normal text-slate-500 ml-2">
                            Sekolah Dasar
                        </span>
                    </h2>

                </div>

                <div class="grid grid-cols-3 gap-4 p-5">

                    <button class="class-card">Kelas 1</button>
                    <button class="class-card">Kelas 2</button>
                    <button class="class-card">Kelas 3</button>

                    <button class="class-card">Kelas 4</button>
                    <button class="class-card">Kelas 5</button>
                    <button class="class-card">Kelas 6</button>

                </div>

            </div>

        </div>

        <!-- SMP -->

        <div class="mt-8">

            <div class="border rounded-xl overflow-hidden">

                <div class="bg-yellow-50 px-5 py-3 border-b">

                    <h2 class="font-bold text-yellow-600">
                        SMP
                        <span class="font-normal text-slate-500 ml-2">
                            Sekolah Menengah Pertama
                        </span>
                    </h2>

                </div>

                <div class="grid grid-cols-3 gap-4 p-5">

                    <button class="class-card">Kelas 7</button>
                    <button class="class-card">Kelas 8</button>
                    <button class="class-card">Kelas 9</button>

                </div>

            </div>

        </div>

        <!-- SMA -->

        <div class="mt-8">

            <div class="border rounded-xl overflow-hidden">

                <div class="bg-blue-50 px-5 py-3 border-b">

                    <h2 class="font-bold text-blue-700">
                        SMA / SMK
                        <span class="font-normal text-slate-500 ml-2">
                            Sekolah Menengah Atas
                        </span>
                    </h2>

                </div>

                <div class="grid grid-cols-3 gap-4 p-5">

                    <button class="class-card">Kelas 10</button>
                    <button class="class-card">Kelas 11</button>
                    <button class="class-card">Kelas 12</button>

                </div>

            </div>

        </div>

        <div class="flex justify-between items-center mt-10">

            <p class="text-slate-500" id="selectedClass">
                Belum ada kelas yang dipilih
            </p>

           <a href="/subject.html" class="btn-primary">
Lanjut ke Mata Pelajaran →
</a>

        </div>

    </div>

</div>

</section>
`;
}