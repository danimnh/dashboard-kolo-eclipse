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
    margin-top: -270px;
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
    bottom: 165;
    left: 18;
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
                    id: 58,
                    name: "Muhammad Zulkifli",
                    image: "images/eclipseprofile_58.png",
                    judul: 
                        "Pengembangan Modul Backend Berbasis REST API pada Aplikasi IPB Connect",
                    jadwal: "Jumat, 11 Desember 2020",
                    pukul: "16:00 - 16:30"
                },
                {
                    id: 59,
                    name: "Muhamad Hilmy Haidar",
                    image: "images/eclipseprofile_59.png",
                    judul: 
                        "Pengembangan Modul Backend Pengelolaan Konten Berbasis REST API untuk Aplikasi Digital Tani",
                    jadwal: "Jumat, 11 Desember 2020",
                    pukul: "16:30 - 17:00"
                },
                {
                    id: 60,
                    name: "Hafizh Haritsa",
                    image: "images/eclipseprofile_60.png",
                    judul: 
                        "Pengembangan Fitur Diskusi Forum pada Aplikasi IPB Digital Tani Menggunakan Metode Prototyping",
                    jadwal: "Jumat, 11 Desember 2020",
                    pukul: "17:00 - 17:30"
                },
                {
                    id: 61,
                    name: "Fauzi Muhammad Sulaeman",
                    image: "images/eclipseprofile_61.png",
                    judul: 
                        "Perancangan Pengalaman Peminjam Buku pada Aplikasi Koper Pustaka Modul Peminjaman Berantai Menggunakan Metode Design Thinking",
                    jadwal: "Jumat, 11 Desember 2020",
                    pukul: "15:30 - 16:00"
                },
                {
                    id: 62,
                    name: "Arih Ghina Wiranti",
                    image: "images/eclipseprofile_62.png",
                    judul: 
                        "Perancangan Pengalaman Pemberi Pinjaman Terikat pada Aplikasi Koper Pustaka Modul Peminjaman Berantai Menggunakan Metode Design Thinking",
                    jadwal: "Jumat, 11 Desember 2020",
                    pukul: "16:00 - 16:30"
                },
                {
                    id: 63,
                    name: "Fajar Yuda Apriliano",
                    image: "images/eclipseprofile_63.png",
                    judul: 
                        "Pengembangan DSpace sebagai Repositori Knowledge Hub untuk Badan Penelitian dan Pengembangan Kesehatan",
                    jadwal: "Jumat, 11 Desember 2020",
                    pukul: "16:30 - 17:00"
                },
                {
                    id: 64,
                    name: "Nabil Ahmad",
                    image: "images/eclipseprofile_64.png",
                    judul: 
                        "Analisis Sentimen Pengguna Twitter Terhadap Pandemi COVID-19 di Indonesia Menggunakan Algoritme Klasifikasi Multinomial Naive Bayes",
                    jadwal: "Jumat, 11 Desember 2020",
                    pukul: "17:00 - 17:30"
                },
                {
                    id: 65,
                    name: "Chamdan L Abdulbaaqiy",
                    image: "images/eclipseprofile_65.png",
                    judul: 
                        "Machine Learning Model untuk Prediksi Efisiensi Obat Terhadap Kanker",
                    jadwal: "Senin, 14 Desember 2020",
                    pukul: "15:30 - 16:00"
                },
                {
                    id: 66,
                    name: "Daffa Wicaksono",
                    image: "images/eclipseprofile_66.png",
                    judul: 
                        "Prediksi COVID-19 Outbreak dan pengaruh PSBB menggunakan Machine Learning",
                    jadwal: "Senin, 14 Desember 2020",
                    pukul: "16:00 - 16:30"
                },
                {
                    id: 67,
                    name: "Rian Ardiana Prapanca",
                    image: "images/eclipseprofile_67.png",
                    judul: 
                        "Pengembangan Front End Berbasis REST API Panel Admin Digital Tani dengan Metode Prototyping",
                    jadwal: "Senin, 14 Desember 2020",
                    pukul: "16:30 - 17:00"
                }
            ]
        };
    }
};
</script>
