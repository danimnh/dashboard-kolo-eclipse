<template>
    <div>
        <img class="bg" src="../../../public/billboard-textbox.png" alt="" />
        <img class="bg" src="../../../public/billboard-layer-1.png" alt="" />
        <!-- render img of each IDs  -->
        <!-- <div class="marginleft"> -->
        <div class="row">
            <div class="col">
                <div class="marginleft">
                    <imgcomponent
                        v-for="profile in profiles"
                        :key="profile.id"
                        :profile="profile"
                    />
                </div>
            </div>
            <!-- <img
                        v-for="profile in profiles"
                        :src="profile.image"
                        :key="profile.name"
                        class="persons"
                        data-toggle="modal"
                        data-target="#basicModal"
                    /> -->
        </div>
        <!-- </div> -->
        <img
            class="bglayer"
            src="../../../public/billboard-layer-2.png"
            alt=""
        />
        <!-- <p>windowHeight:{{ windowWidth }}</p> -->
    </div>
</template>
<style scoped>
.modal {
    background-color: black;
    opacity: 0.75;
    /* !important; */
}
.modal-backdrop {
    background-color: transparent;
}
div.marginleft {
    margin-left: 110;
    margin-top: -152;
}
img.bg {
    max-width: 100%;
    /* max-height: 100%; */
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
}

img.bglayer {
    max-width: 100%;
    max-height: 100%;
    bottom: 100;
    left: 0;
    right: 0;
    top: -30;
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
        console.log("Component mounted.");
        this.$nextTick(() => {
            window.addEventListener("resize", this.onResize);
        });
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.onResize);
    },
    data() {
        return {
            windowWidth: window.innerWidth,
            profiles: [
                {
                   //kloter 1
        id: 1,
        name: "Irfan Alghani Khalid",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Prediksi Kandidat Senyawa Herbal Sebagai Obat Anti-Virus SARS-CoV-2 Menggunakan Pemodelan Convolutional Neural Network",
        jadwal: "Senin, 30 November 2020",
        pukul: "15:30 - 16:00"
    }, {
        id: 2,
        name: "Refianto Damai Darmawan",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Screening Senyawa Herbal dengan Komputasi GPU pada Basis Data ZINC melalui Pendekatan Machine Learning",
        jadwal: "Senin, 30 November 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 3,
        name: "Dwi Fristanti Sagala ",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pencarian Protein Signifikan Terkait Inflamasi pada COVID-19 Dengan Menggunakan Skyline Query",
        jadwal: "Senin, 30 November 2020",
        pukul: "16:30 - 17:00"
      }, {
        id: 4,
        name: "Muh Alif Hanif Fadilah",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Graf Traversing menggunakan teknik Branch and Bound untuk menemukan Senyawa Herbal untuk COVID-19",
        jadwal: "Senin, 30 November 2020",
        pukul: "17:00 - 17:30"
      }, {
        id: 5,
        name: "Elia Samuel",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Modul Simulasi Real Time Lintasan Kabut Asap Karhutla dengan HYSPLIT",
        jadwal: "Selasa, 1 Desember 2020",
        pukul: "15:30 - 16:00"
      }, {
        id: 6,
        name: "Fahreza Ikhsan Hafiz",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Klasifikasi Citra Histopatologi Kanker Serviks Menggunakan Metode Transfer Learning",
        jadwal: "Selasa, 1 Desember 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 7,
        name: "Mickael",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Modul Verifikasi Lintasan Kabut Asap Karhutla menggunakan Citra Himawari 8",
        jadwal: "Selasa, 1 Desember 2020",
        pukul: "16:30 - 17:00"
      }, {
        id: 8,
        name: "Intan Aida Rahmani",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Penerapan Algoritme Maximum Likelihood dan K-Nearest Neighbour untuk Identifikasi Lahan Bawang Putih Menggunakan Citra Sentinel 1-A",
        jadwal: "Selasa, 1 Desember 2020",
        pukul: "17:00 - 17:30"
      }, {
        id: 9,
        name: "Alfian Hamam Akbar",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Klasifikasi Kanker Serviks Pada Citra Pap Smear Menggunakan Model Convolutional Neural Network dan Support Vector Machine",
        jadwal: "Rabu, 2 Desember 2020",
        pukul: "15:30 - 16:00"
      }, {
        id: 10,
        name: "M. Fakhri 'Alauddin Hidayat",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Sistem Informasi Manajemen Data Patroli Pencegahan Karhutla di Wilayah Sumatera",
        jadwal: "Rabu, 2 Desember 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 11,
        name: "Julius Christoper Siswanto",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Klasifikasi Kanker Serviks Pada Citra Pap Smear Menggunakan Model Convolutional Neural Network",
        jadwal: "Rabu, 2 Desember 2020",
        pukul: "16:30 - 17:00"
      }, {
        id: 12,
        name: "Ahmad Al-Banjaran Coeur d’Alene",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Identifikasi Lahan Bawang Putih di Sembalun Menggunakan Citra Sentinel 1-A dan Ensemble Learning",
        jadwal: "Rabu, 2 Desember 2020",
        pukul: "17:00 - 17:30"
      }, {
        id: 13,
        name: "Rizky Syawal Putra Thahirperson10",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Reengineering Aplikasi Patroli Karhutla dengan Business Logic Component Pattern dan Layered Architecture",
        jadwal: "Kamis, 3 Desember 2020",
        pukul: "15:30 - 16:00"
      }, {
        id: 14,
        name: "M. Kamil",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Modul Akuisisi Data Pada Aplikasi Patroli Terpadu Kebakaran Hutan dan Lahan Menggunakan Metode Prototyping",
        jadwal: "Kamis, 3 Desember 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 15,
        name: "Fakhoor Izaaz Wildhanrahman",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Perancangan User Experience Aplikasi HIJRAH ID dalam Peningkatan Literasi Zakat untuk Mualaf dengan Metode The Wheel",
        jadwal: "Kamis, 3 Desember 2020",
        pukul: "16:30 - 17:00"
      }, {
        id: 16,
        name: "Muhammad Nur Hidayat",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Front-End Sistem Rantai Pasok Bawang Merah Berbasis Blockchain Menggunakan Metode Prototyping.",
        jadwal: "Kamis, 3 Desember 2020",
        pukul: "17:00 - 17:30"
      }, {
        id: 17,
        name: "Rizha Al-fajri",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pemodelan Pergerakan Manusia Terhadap Penyebaran COVID-19 di Jawa Timur Menggunakan Algoritme Distance-Decay Pagerank",
        jadwal: "Jumat, 4 Desember 2020",
        pukul: "15:30 - 16:00"
      }, {
        id: 18,
        name: "Yasmin Salamah",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Uji Kebergunaan Jarak Jauh Fitur Pencatatan Kesehatan Pribadi pada Aplikasi Mobile Thymun untuk Penderita Penyakit Kronis",
        jadwal: "Jumat, 4 Desember 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 19,
        name: "Lanang Satia Aji",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Back-End Knowledge Management System Budidaya Tanaman Buah",
        jadwal: "Jumat, 4 Desember 2020",
        pukul: "16:30 - 17:00"
      }, {
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
      }, {
        id: 31,
        name: "Annisa Widia Astuti",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Active Contour Model Untuk Melakukan Ekstraksi Fitur Klinis Penderita Covid-19 Berbasis Citra CT Scan",
        jadwal: "Selasa, 8 Desember 2020",
        pukul: "15:30 - 16:00"
      }, {
        id: 32,
        name: "Komang Elang Surya",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pemodelan Pergerakan Manusia Dalam Penyebaran Penyakit Covid-19 Menggunakan Algoritme PageRank (Studi Kasus : Provinsi Jawa Timur)",
        jadwal: "Selasa, 8 Desember 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 33,
        name: "Nadhir Dhanu Dwinanda",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Analisis dan Perancangan Basis Data Graf dan Antarmuka untuk Sistem Rekomendasi Kuliner Lokal Berbasis Mobile pada Google Maps",
        jadwal: "Selasa, 8 Desember 2020",
        pukul: "16:30 - 17:00"
      }, {
        id: 34,
        name: "T. Sandra Alyssa",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Implementasi Algoritma Grid Area Skyline untuk Pemilihan Lokasi berdasarkan Preferensi Fasilitas Sekitar Pada Google Maps",
        jadwal: "Selasa, 8 Desember 2020",
        pukul: "17:00 - 17:30"
      }, {
        id: 35,
        name: "Meia Noer Muslimah",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Identifikasi Cabang Tanaman Melon pada Citra Red Green Blue Depth Menggunakan Teknik Instance Segmentation",
        jadwal: "Selasa, 8 Desember 2020",
        pukul: "15:30 - 16:00"
      }, {
        id: 36,
        name: "Muhamad Guntur",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Analisis Perbandingan Kinerja Protokol MQTT dan HTTP pada Perangkat IoT Pemantau Kualitas Udara",
        jadwal: "Selasa, 8 Desember 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 37,
        name: "Usman Abdul Halim",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Aplikasi Manajemen VPS berbasis Web Menggunakan Teknologi KVM",
        jadwal: "Selasa, 8 Desember 2020",
        pukul: "16:30 - 17:00"
      }, {
        id: 38,
        name: "Wahyudi Putra",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Usability Testing pada Sistem Marikultur Cerdas Kepulaian Seribu",
        jadwal: "Selasa, 8 Desember 2020",
        pukul: "15:30 - 16:00"
      }, {
        id: 39,
        name: "Dhana Dhira",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan modul front-end untuk sistem intelligent monitoring IoT",
        jadwal: "Selasa, 8 Desember 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 40,
        name: "	Bob Yuwono",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Penerapan Optical Character Recognition pada Pencatatan Nota Belanja",
        jadwal: "Selasa, 8 Desember 2020",
        pukul: "16:30 - 17:00"
      }, {
        id: 41,
        name: "Fathiya",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Frontend pada Aplikasi Pelelangan Ikan Terintegrasi berbasis Progressive Web App",
        jadwal: "Kamis, 10 Desember 2020",
        pukul: "15:30 - 16:00"
      }, {
        id: 42,
        name: "Friska Meilani",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Front End Knowledge Management System (KMS) Budidaya Tanaman Buah",
        jadwal: "Kamis, 10 Desember 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 43,
        name: "Yudit Yudiarto",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Back End berbasis REST API pada Aplikasi Pelelangan Ikan Terintegrasi",
        jadwal: "Kamis, 10 Desember 2020",
        pukul: "16:30 - 17:00"
      }, {
        id: 44,
        name: "Titan Dayu Pratisena",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Perancangan User Experience Aplikasi Mobile Tokocabai dengan Metode Lean UX",
        jadwal: "Kamis, 10 Desember 2020",
        pukul: "17:00 - 17:30"
      }, {
        id: 45,
        name: "Yasmin Lukman",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pemodelan Pergerakan Manusia Dalam Penyebaran Penyakit Covid-19 Menggunakan Algoritme EpiRank di Wilayah Jabodetabek",
        jadwal: "Kamis, 10 Desember 2020",
        pukul: "15:30 - 16:00"
      }, {
        id: 46,
        name: "Siti Nur Hasanah",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pemodelan Prediksi Jumlah Kasus COVID-19 Berbasis Sosial, Ekonomi dan Demografi Menggunakan Gated Recurrent Unit RNN (Studi Kasus di Jawa Timur)",
        jadwal: "Kamis, 10 Desember 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 47,
        name: "Avrienta Nouva Eka Putri",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pemodelan Prediksi Jumlah Kasus COVID-19 Berbasis Demografi, Sosial, dan Ekonomi Menggunakan Long Short Term Memory (Studi Kasus di Jawa Timur)",
        jadwal: "Kamis, 10 Desember 2020",
        pukul: "16:30 - 17:00"
      }, {
        id: 48,
        name: "Santi Amalia Ar-nur",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pemodelan Prediksi Kasus COVID-19 Berbasis Demografi, Sosial, dan Ekonomi Menggunakan ARIMA (Studi Kasus Jawa Timur)",
        jadwal: "Kamis, 10 Desember 2020",
        pukul: "17:00 - 17:30"
      }, {
        id: 49,
        name: "Afifah Noviani",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Perancangan User Interface Aplikasi By-Polar untuk Orang dengan Gangguan Bipolar",
        jadwal: "Kamis, 10 Desember 2020",
        pukul: "15:30 - 16:00"
      }, {
        id: 50,
        name: "Wanda Azizah Yasin",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "UX Research",
        jadwal: "Kamis, 10 Desember 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 51,
        name: "Dina Fadila",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pendefinisian Sudut Pandang, Pengidean, dan Pembuatan Low-Fi Prototype pada Aplikasi By-Polar untuk Penderita Gangguan Bipolar",
        jadwal: "Kamis, 10 Desember 2020",
        pukul: "16:30 - 17:00"
      }, {
        id: 52,
        name: "Najemi Putrianti",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Perancangan Pengalaman Pemberi Pinjaman Lepas pada Aplikasi Koper Pustaka Modul Peminjaman Berantai Menggunakan Metode Design Thinking",
        jadwal: "Kamis, 10 Desember 2020",
        pukul: "17:00 - 17:30"
      }, {
        id: 53,
        name: "Rafie Fadlurahman",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Analyzing the Uncanny Valley as a Case of Simpson’s Paradox",
        jadwal: "Jumat, 11 Desember 2020",
        pukul: "15:30 - 16:00"
      }, {
        id: 54,
        name: "Morgan Mendel",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Perancangan Interaksi Menggunakan Metode Double Diamond untuk Edukasi dan Peminatan Specialty Coffee Lokal",
        jadwal: "Jumat, 11 Desember 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 55,
        name: "Zaki Muttaqin",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Perancangan Interaksi Konsumen Coffee Shop di Era Adaptasi Kebiasaan Baru dengan Metode Double Diamond",
        jadwal: "Jumat, 11 Desember 2020",
        pukul: "16:30 - 17:00"
      }, {
        id: 56,
        name: "Muhammad Fauzan Azhim",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Sistem Informasi Workshop Trop BRC IPB Berbasis Web dengan Metode Prototyping",
        jadwal: "Jumat, 11 Desember 2020",
        pukul: "17:00 - 17:30"
      }, {
        id: 57,
        name: "Reyhan Widyatna Harwenda",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Modul Frontend Aplikasi IPB Connect Berbasis Web Menggunakan Metode Prototyping",
        jadwal: "Jumat, 11 Desember 2020",
        pukul: "15:30 - 16:00"
      }, {
        id: 58,
        name: "Muhammad Zulkifli",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Modul Backend Berbasis REST API pada Aplikasi IPB Connect",
        jadwal: "Jumat, 11 Desember 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 59,
        name: "Muhamad Hilmy Haidar",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Modul Backend Pengelolaan Konten Berbasis REST API untuk Aplikasi Digital Tani",
        jadwal: "Jumat, 11 Desember 2020",
        pukul: "16:30 - 17:00"
      }, {
        id: 60,
        name: "Hafizh Haritsa",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Fitur Diskusi Forum pada Aplikasi IPB Digital Tani Menggunakan Metode Prototyping",
        jadwal: "Jumat, 11 Desember 2020",
        pukul: "17:00 - 17:30"
      }, {
        id: 61,
        name: "Fauzi Muhammad Sulaeman",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Perancangan Pengalaman Peminjam Buku pada Aplikasi Koper Pustaka Modul Peminjaman Berantai Menggunakan Metode Design Thinking",
        jadwal: "Jumat, 11 Desember 2020",
        pukul: "15:30 - 16:00"
      }, {
        id: 62,
        name: "Arih Ghina Wiranti",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Perancangan Pengalaman Pemberi Pinjaman Terikat pada Aplikasi Koper Pustaka Modul Peminjaman Berantai Menggunakan Metode Design Thinking",
        jadwal: "Jumat, 11 Desember 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 63,
        name: "Fajar Yuda Apriliano",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan DSpace sebagai Repositori Knowledge Hub untuk Badan Penelitian dan Pengembangan Kesehatan",
        jadwal: "Jumat, 11 Desember 2020",
        pukul: "16:30 - 17:00"
      }, {
        id: 64,
        name: "Nabil Ahmad",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Analisis Sentimen Pengguna Twitter Terhadap Pandemi COVID-19 di Indonesia Menggunakan Algoritme Klasifikasi Multinomial Naive Bayes",
        jadwal: "Jumat, 11 Desember 2020",
        pukul: "17:00 - 17:30"
      }, {
        // Kloter 3
        id: 65,
        name: "Chamdan L Abdulbaaqiy",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Machine Learning Model untuk Prediksi Efisiensi Obat Terhadap Kanker",
        jadwal: "Senin, 14 Desember 2020",
        pukul: "15:30 - 16:00"
      }, {
        id: 66,
        name: "Daffa Wicaksono",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Prediksi COVID-19 Outbreak dan pengaruh PSBB menggunakan Machine Learning",
        jadwal: "Senin, 14 Desember 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 67,
        name: "Rian Ardiana Prapanca",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Front End Berbasis REST API Panel Admin Digital Tani dengan Metode Prototyping",
        jadwal: "Senin, 14 Desember 2020",
        pukul: "16:30 - 17:00"
      }, {
        id: 68,
        name: "Dharmawan S",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Analisis metabolite menggunakan deep learning",
        jadwal: "Senin, 14 Desember 2020",
        pukul: "17:00 - 17:30"
      }, {
        id: 69,
        name: "Muhammad Naufal Shidqi",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Analisis Implementasi Fitur Misi Harian Pada Video Game Terhadap Player Engagement Pada Mahasiswa",
        jadwal: "Senin, 14 Desember 2020",
        pukul: "15:30 - 16:00"
      }, {
        id: 70,
        name: "Muhammad Alfin Khalidi",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Evaluasi Pengalaman Pengguna dari In-Game Reward Berdasarkan Aktivitas Fisik pada Video Game untuk Mendorong Perilaku Hidup Sehat",
        jadwal: "Senin, 14 Desember 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 71,
        name: "Muhammad Rizqi Sinatrya",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Menguji Tingkat Engagement Prototipe Permainan Simulasi Perikanan melalui Playtesting dengan Model EGameFlow",
        jadwal: "Senin, 14 Desember 2020",
        pukul: "16:30 - 17:00"
      }, {
        id: 72,
        name: "Suko Martin",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Perancangan Interaksi Manusia dengan Tanaman sebagai Edukasi Perawatan Tanaman",
        jadwal: "Senin, 14 Desember 2020",
        pukul: "17:00 - 17:30"
      }, {
        id: 73,
        name: "Bella Anggita Safitri",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Prediksi Interaksi Senyawa-Protein untuk Drug Repurposing Anti COVID-19 Menggunakan Convolutional Neural Network",
        jadwal: "Senin, 14 Desember 2020",
        pukul: "15:30 - 16:00"
      }, {
        id: 74,
        name: "Lidya Dwi Utami",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Prediksi Interaksi Senyawa dan Protein untuk Drug Repositioning Anti Covid-19 Menggunakan Metode Deep Neural Network",
        jadwal: "Senin, 14 Desember 2020",
        pukul: "16:00 - 16:30"
      }, {
        id: 75,
        name: "Ervan Sadhaly",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Perancangan Aplikasi Importance-Performance Analysis (IPA) dan Analisis Strengths, Weaknesses, Opportunities, Threats (SWOT) menggunakan R",
        jadwal: "Senin, 14 Desember 2020",
        pukul: "16:30 - 17:00"
      }, {
        id: 76,
        name: "Taufik Hidayat",
        image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
        judul: "Pengembangan Front-End Aplikasi MAP-GIS Berbasis Web Menggunakan Framework Django",
        jadwal: "Senin, 14 Desember 2020",
        pukul: "17:00 - 17:30"
      }]
    };
    },
    watch: {
        windowHeight(newWidth, oldWidth) {
            this.txt = `it changed to ${newWidth} from ${oldWidth}`;
        }
    },

    methods: {
        onResize() {
            this.windowWidth = window.innerWidth;
        }
    }
};
</script>
