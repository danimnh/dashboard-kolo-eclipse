<template>
    <div>
        <div class="marginleft">
            <div>
                <img
                    v-for="profile in profiles"
                    :src="profile.image"
                    :key="profile.name"
                    class="persons"
                />
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
    /* margin-left: 10px; */
    margin-top: -150px;
}
img.bg {
    max-width: 100%;
    max-height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
}
img.persons {
    max-width: 150px;
    margin-top: -40;
    margin-left: 38px;
    position: relative;
    object-fit: cover;
    /* left: 180px; */
    /* tiap nambah orang + 127 px( 307 - 180 ) <- belom pasti jg */
    z-index: 3;
}
/* ini efek hover */
img.persons:hover {
    transform: scale(1.2);
}
img.bglayer {
    max-width: 100%;
    max-height: 100%;
    bottom: 56;
    left: 0;
    right: 0;
    /* top ini sering diubah menyesuaikan */
    /* top: -38; */
    z-index: 3;
    position: relative;
}
</style>
<script>
export default {
    mounted() {
        console.log("billboard-2 mounted.");
    },
    data() {
        return {
            profiles: [
                 {
        //Kloter 2
        id: 20,
        name: "Cindana Putri Ramadhani",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Sistem Informasi Geografis Manajemen Data Fasilitas Jalan Tol berbasis Web",
        jadwal: "Senin, 7 Desember 2020",
        pukul: "15:30 - 16:00"
      }, {
        id: 21,
        name: "Anisa Nurjanah",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Sistem Informasi Geografis pada Manajemen Data Jalan dan Data Administrasi Jalan Tol berbasis web",
        jadwal: "Senin, 7 Desember 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 22,
        name: "Muhammad Dani Alfaris",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Aplikasi Buku Kerja Mandor Kelapa Sawit",
        jadwal: "Senin, 7 Desember 2020",
        pukul: "16:30 - 17:00"
      }, {
        id: 23,
        name: "Indah Puspita",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Implementasi Deep Learning untuk Mempelajari Teknik Mediasi Orang Tua terhadap Penggunaan Teknologi oleh Anak di Bogor",
        jadwal: "Senin, 7 Desember 2020",
        pukul: "17:00 - 17:30"
      }, {
        id: 24,
        name: "Mursyid Alhadi",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Prediksi Kandidat Senyawa Herbal Sebagai Anti-Virus COVID-19 Menggunakan Teknik Jejaring Bipartite",
        jadwal: "Senin, 7 Desember 2020",
        pukul: "15:30 - 16:00"
      }, {
        id: 25,
        name: "Hedianto Agus Widodo",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Screening Senyawa Herbal untuk COVID-19 Menggunakan Metode Multi-label Learning dengan Algoritme Deep Neural Network",
        jadwal: "Senin, 7 Desember 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 26,
        name: "Ryvan Arnandha Putra",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Analisis Jaringan Penyakit untuk Identifikasi Penyakit Komorbid Dominan Terkait Covid-19",
        jadwal: "Senin, 7 Desember 2020",
        pukul: "16:30 - 17:00"
      }, {
        id: 27,
        name: "Fadia Ramadhana",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Identifikasi Penyakit Pneumonia COVID-19 Berbasis Citra Computed Tomography (CT) Menggunakan Deep Transfer Learning ",
        jadwal: "Senin, 7 Desember 2020",
        pukul: "17:00 - 17:30"
      }, {
        id: 28,
        name: "Haidar Muhammad Yasin",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Aplikasi Mobile Marketplace Kepulauan Seribu Menggunakan Metode Waterfall",
        jadwal: "Selasa, 8 Desember 2020",
        pukul: "12:30 - 13:00"
      }, {
        id: 29,
        name: "I Nyoman Rai Widartha Kesuma",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Evaluasi Usability Aplikasi Mobile KMS Sawit Rakyat Berbasis Participatory",
        jadwal: "Selasa, 8 Desember 2020",
        pukul: "13:00 - 13:30"
      }, {
        id: 30,
        name: "Muhammad Rifqi Prabantoro",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Prototipe Blockchain Platform Untuk Sistem Rantai Pasok Bawang Merah",
        jadwal: "Selasa, 8 Desember 2020",
        pukul: "13:30 - 14:00"
      }
            ]
        };
    }
};
</script>
