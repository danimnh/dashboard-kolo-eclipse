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
                    id: 39,
                    name: "Dhana Dhira",
                    image: "images/eclipseprofile_blank.png",
                    judul:
                        "Pengembangan modul front-end untuk sistem intelligent monitoring IoT",
                    jadwal: "Selasa, 8 Desember 2020",
                    pukul: "16:00 - 16.30"
                },
                {
                    id: 40,
                    name: "Bob Yuwono",
                    image: "images/eclipseprofile_40.png",
                    judul:
                        "Penerapan Optical Character Recognition pada Pencatatan Nota Belanja",
                    jadwal: "Selasa, 8 Desember 2020",
                    pukul: "16:30 - 17.00"
                },
                {
                    id: 41,
                    name: "Fathiya",
                    image: "images/eclipseprofile_41.png",
                    judul: 
                        "Pengembangan Frontend pada Aplikasi Pelelangan Ikan Terintegrasi berbasis Progressive Web App",
                    jadwal: "Kamis, 10 Desember 2020",
                    pukul: "15:30 - 16:00"
                },
                {
                    id: 42,
                    name: "Friska Meilani",
                    image: "images/eclipseprofile_42.png",
                    judul: 
                        "Pengembangan Front End Knowledge Management System (KMS) Budidaya Tanaman Buah",
                    jadwal: "Kamis, 10 Desember 2020",
                    pukul: "16:00 - 16:30"
                },
                {
                    id: 43,
                    name: "Yudit Yudiarto",
                    image: "images/eclipseprofile_43.png",
                    judul: 
                        "Pengembangan Back End berbasis REST API pada Aplikasi Pelelangan Ikan Terintegrasi",
                    jadwal: "Kamis, 10 Desember 2020",
                    pukul: "16:30 - 17:00"
                },
                {
                    id: 44,
                    name: "Titan Dayu Pratisena",
                    image: "images/eclipseprofile_44.png",
                   image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                   judul: 
                        "Perancangan User Experience Aplikasi Mobile Tokocabai dengan Metode Lean UX",
                   jadwal: "Kamis, 10 Desember 2020",
                   pukul: "17:00 - 17:30"
                },
                {
                    id: 45,
                    name: "Yasmin Lukman",
                    image: "images/eclipseprofile_45.png",
                    judul: 
                        "Pemodelan Pergerakan Manusia Dalam Penyebaran Penyakit Covid-19 Menggunakan Algoritme EpiRank di Wilayah Jabodetabek",
                    jadwal: "Kamis, 10 Desember 2020",
                    pukul: "15:30 - 16:00"
                },
                {
                    id: 46,
                    name: "Siti Nur Hasanah",
                    image: "images/eclipseprofile_46.png",
                    judul: 
                        "Pemodelan Prediksi Jumlah Kasus COVID-19 Berbasis Sosial, Ekonomi dan Demografi Menggunakan Gated Recurrent Unit RNN (Studi Kasus di Jawa Timur)",
                    jadwal: "Kamis, 10 Desember 2020",
                    pukul: "16:00 - 16:30"
                },
                {
                    id: 47,
                    name: "Avrienta Nouva Eka Putri",
                    image: "images/eclipseprofile_47.png",
                    judul: 
                        "Pemodelan Prediksi Jumlah Kasus COVID-19 Berbasis Demografi, Sosial, dan Ekonomi Menggunakan Long Short Term Memory (Studi Kasus di Jawa Timur)",
                    jadwal: "Kamis, 10 Desember 2020",
                    pukul: "16:30 - 17:00"
                },
                {
                    id: 48,
                    name: "Santi Amalia Ar-nur",
                    image: "images/eclipseprofile_48.png",
                    judul: 
                        "Pemodelan Prediksi Kasus COVID-19 Berbasis Demografi, Sosial, dan Ekonomi Menggunakan ARIMA (Studi Kasus Jawa Timur)",
                    jadwal: "Kamis, 10 Desember 2020",
                    pukul: "17:00 - 17:30"
                }
            ]
        };
    }
};
</script>
