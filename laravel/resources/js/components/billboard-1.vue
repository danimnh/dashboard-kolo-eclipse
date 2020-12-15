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
            src="../../../public/billboard-layer-3.png"
            alt=""
        />
    </div>
</template>
<style scoped>
div.marginleft {
    margin-left: 160px;
    margin-top: -195px;
}
/* img.bg {
    max-width: 100%;
    max-height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
} */
img.persons {
    /* max-width: 150px; */
    /* width: 100%;
    height: auto; */
    /* margin-top: 0;
    margin-right: 33px; */
    /* position: relative; */
    /* width: 100%; */
    /* max-width: 180px; */
    /* height: auto; */
    /* z-index: 2; */
}
img.persons:hover {
    transform: scale(1.2);
}
img.bglayer {
    max-width: 100%;
    max-height: 100%;
    bottom: 100;
    left: 0;
    right: 0;
    top: -53;
    z-index: 2;
    position: relative;
}
</style>
<script>
export default {
    mounted() {
        console.log("billboard-1 mounted");
    },
    data() {
        return {
            profiles: [
                 {
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
      }
            ]
        };
    },
    setup() {
        function imgOnClick() {
            console.log("img clicked");
        }

        return {
            imgOnClick
        };
    }
};
</script>
