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
            src="../../../public/billboard-layer-3.png"
            alt=""
        />
    </div>
</template>
<style scoped>
div.marginleft {
    margin-left: 175px;
    margin-top: -220px;
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
    bottom: 93;
    left: 16;
    right: 0;
    /* top ini sering diubah menyesuaikan */
    /* top: -38; */
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
        console.log("billboard-3 mounted.");
    },
    data() {
        return {
            profiles: [
                {
                    id: 30,
                    name: "Muhammad Rifqi Prabantoro",
                    image: "images/eclipseprofile_30.png",
                    judul:
                        "Pengembangan Prototipe Blockchain Platform Untuk Sistem Rantai Pasok Bawang Merah",
                    jadwal: "Selasa, 8 Desember 2020",
                    pukul: "13:30 - 14:00"
                },
                {
                    id: 31,
                    name: "Annisa Widia Astuti",
                    image: "images/eclipseprofile_31.png",
                    judul: 
                        "Pengembangan Active Contour Model Untuk Melakukan Ekstraksi Fitur Klinis Penderita Covid-19 Berbasis Citra CT Scan",
                    jadwal: "Selasa, 8 Desember 2020",
                    pukul: "15.30 - 16.00"
                },
                {
                    id: 32,
                    name: "Komang Elang Surya",
                    image: "images/eclipseprofile_32.png",
                    judul:
                        "Pemodelan Pergerakan Manusia Dalam Penyebaran Penyakit Covid-19 Menggunakan Algoritme PageRank (Studi Kasus : Provinsi Jawa Timur)",
                    jadwal: "Selasa, 8 Desember 2020",
                    pukul: "16.00 - 16.30"
                },
                {
                    id: 33,
                    name: "Nadhir Dhanu Dwinanda",
                    image: "images/eclipseprofile_33.png",
                    judul:
                        "Analisis dan Perancangan Basis Data Graf dan Antarmuka untuk Sistem Rekomendasi Kuliner Lokal Berbasis Mobile pada Google Maps",
                    jadwal: "Selasa, 8 Desember 2020",
                    pukul: "16.30 - 17.00"
                },
                {
                    id: 34,
                    name: "T. Sandra Alyssa",
                    image: "images/eclipseprofile_34.png",
                    judul:
                        "Implementasi Algoritma Grid Area Skyline untuk Pemilihan Lokasi berdasarkan Preferensi Fasilitas Sekitar Pada Google Maps",
                    jadwal: "Selasa, 8 Desember 2020",
                    pukul: "17.00-17.30"

                },
                {
                    id: 35,
                    name: "Muhamad Guntur",
                    image: "images/eclipseprofile_35.png",
                    judul: 
                        "Analisis Perbandingan Kinerja Protokol MQTT dan HTTP pada Perangkat IoT Pemantau Kualitas Udara",
                    jadwal: "Selasa, 8 Desember 2020",
                    pukul: "15.30 - 16.00"
                },
                {
                    id: 36,
                    name: "Meia Noer Muslimah",
                    image: "images/eclipseprofile_16.png",
                    judul: 
                        "Identifikasi Cabang Tanaman Melon pada Citra Red Green Blue Depth Menggunakan Teknik Instance Segmentation",
                    jadwal: "Selasa, 8 Desember 2020",
                    pukul: "16.00-16.30"
                },
                {
                    id: 37,
                    name: "Usman Abdul Halim",
                    image: "images/eclipseprofile_16.png",
                    judul: 
                        "Aplikasi Manajemen VPS berbasis Web Menggunakan Teknologi KVM",
                    jadwal: "Selasa, 8 Desember 2020",
                    pukul: "16.30-17.00"
                },
                {
                    id: 38,
                    name: "Wahyudi Putra",
                    image: "images/eclipseprofile_38.png",
                    judul: 
                        "Usability Testing pada Sistem Marikultur Cerdas Kepulaian Seribu",
                    jadwal: "Selasa, 8 Desember 2020",
                    pukul: "15.30 - 16.00"
                }
            ]
        };
    }
};
</script>
