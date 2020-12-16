<template>
    <div class="row">
        <div class="col">
            <div class="marginleft">
                <div>
                    <imgcomponent
                        v-for="profile in profiles"
                        :key="profile.id"
                        :profile="profile"
                    />
                </div>
            </div>
        </div>

        <img
            class="bglayer"
            src="../../../public/billboard-layer-2.png"
            alt=""
        />
    </div>
</template>
<style scoped>
div.marginleft {
    margin-left: 96px;
    margin-top: -228px;
}
img.bg {
    max-width: 100%;
    max-height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
}
img.bglayer {
    max-width: 100%;
    max-height: 100%;
    bottom: 115;
    left: 15;
    right: 0;
    /* top ini sering diubah menyesuaikan */
    /* top: -76; */
    z-index: 1;
    position: relative;
}
</style>
<script>
import imgcomponent from "./imgcomponent";
export default {
    components: {
        imgcomponent
    },
    mounted() {
        console.log("billboard-2 mounted.");
    },
    data() {
        return {
            profiles: [
                {
                    //39-48
                    id: 20,
                    name: "BILLBOARD4",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul:
                        "Pengembangan Sistem Informasi Geografis Manajemen Data Fasilitas Jalan Tol berbasis Web",
                    jadwal: "Senin, 7 Desember 2020",
                    pukul: "15:30 - 16:00"
                },
                {
                    id: 21,
                    name: "Anisa Nurjanah",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul:
                        "Pengembangan Sistem Informasi Geografis pada Manajemen Data Jalan dan Data Administrasi Jalan Tol berbasis web",
                    jadwal: "Senin, 7 Desember 2020",
                    pukul: "16:00 - 16:30"
                },
                {
                    id: 22,
                    name: "Muhammad Dani Alfaris",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul:
                        "Pengembangan Aplikasi Buku Kerja Mandor Kelapa Sawit",
                    jadwal: "Senin, 7 Desember 2020",
                    pukul: "16:30 - 17:00"
                },
                {
                    id: 23,
                    name: "Indah Puspita",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul:
                        "Implementasi Deep Learning untuk Mempelajari Teknik Mediasi Orang Tua terhadap Penggunaan Teknologi oleh Anak di Bogor",
                    jadwal: "Senin, 7 Desember 2020",
                    pukul: "17:00 - 17:30"
                },
                {
                    id: 24,
                    name: "Mursyid Alhadi",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul:
                        "Prediksi Kandidat Senyawa Herbal Sebagai Anti-Virus COVID-19 Menggunakan Teknik Jejaring Bipartite",
                    jadwal: "Senin, 7 Desember 2020",
                    pukul: "15:30 - 16:00"
                },
                {
                    id: 25,
                    name: "Hedianto Agus Widodo",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul:
                        "Screening Senyawa Herbal untuk COVID-19 Menggunakan Metode Multi-label Learning dengan Algoritme Deep Neural Network",
                    jadwal: "Senin, 7 Desember 2020",
                    pukul: "16:00 - 16:30"
                },
                {
                    id: 26,
                    name: "Ryvan Arnandha Putra",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul:
                        "Analisis Jaringan Penyakit untuk Identifikasi Penyakit Komorbid Dominan Terkait Covid-19",
                    jadwal: "Senin, 7 Desember 2020",
                    pukul: "16:30 - 17:00"
                },
                {
                    id: 27,
                    name: "Fadia Ramadhana",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul:
                        "Identifikasi Penyakit Pneumonia COVID-19 Berbasis Citra Computed Tomography (CT) Menggunakan Deep Transfer Learning ",
                    jadwal: "Senin, 7 Desember 2020",
                    pukul: "17:00 - 17:30"
                },
                {
                    id: 28,
                    name: "Haidar Muhammad Yasin",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul:
                        "Pengembangan Aplikasi Mobile Marketplace Kepulauan Seribu Menggunakan Metode Waterfall",
                    jadwal: "Selasa, 8 Desember 2020",
                    pukul: "12:30 - 13:00"
                },
                {
                    id: 29,
                    name: "I Nyoman Rai Widartha Kesuma",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul:
                        "Evaluasi Usability Aplikasi Mobile KMS Sawit Rakyat Berbasis Participatory",
                    jadwal: "Selasa, 8 Desember 2020",
                    pukul: "13:00 - 13:30"
                }
            ]
        };
    }
};
</script>
