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
    margin-top: -300px;
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
    bottom: 193;
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
                    id: 68,
                    name: "Dharmawan S",
                    image: "images/eclipseprofile_68.png",
                    judul: "Analisis metabolite menggunakan deep learning",
                    jadwal: "Senin, 14 Desember 2020",
                    pukul: "17:00 - 17:30"
                },
                {
                    id: 69,
                    name: "Muhammad Naufal Shidqi",
                    image: "images/eclipseprofile_69.png",
                    judul:
                        "Analisis Implementasi Fitur Misi Harian Pada Video Game Terhadap Player Engagement Pada Mahasiswa",
                    jadwal: "Senin, 14 Desember 2020",
                    pukul: "15:30 - 16:00"
                },
                {
                    id: 70,
                    name: "Muhammad Alfin Khalidi",
                    image: "images/eclipseprofile_70.png",
                    judul:
                        "Evaluasi Pengalaman Pengguna dari In-Game Reward Berdasarkan Aktivitas Fisik pada Video Game untuk Mendorong Perilaku Hidup Sehat",
                    jadwal: "Senin, 14 Desember 2020",
                    pukul: "16:00 - 16:30"
                },
                {
                    id: 71,
                    name: "Muhammad Rizqi Sinatrya",
                    image: "images/eclipseprofile_71.png",
                    judul:
                        "Menguji Tingkat Engagement Prototipe Permainan Simulasi Perikanan melalui Playtesting dengan Model EGameFlow",
                    jadwal: "Senin, 14 Desember 2020",
                    pukul: "16:30 - 17:00"
                },
                {
                    id: 72,
                    name: "Suko Martin",
                    image: "images/eclipseprofile_72.png",
                    judul:
                        "Perancangan Interaksi Manusia dengan Tanaman sebagai Edukasi Perawatan Tanaman",
                    jadwal: "Senin, 14 Desember 2020",
                    pukul: "17:00 - 17:30"
                },
                {
                    id: 73,
                    name: "Bella Anggita Safitri",
                    image: "images/eclipseprofile_73.png",
                    judul:
                        "Prediksi Interaksi Senyawa-Protein untuk Drug Repurposing Anti COVID-19 Menggunakan Convolutional Neural Network",
                    jadwal: "Senin, 14 Desember 2020",
                    pukul: "15:30 - 16:00"
                },
                {
                    id: 74,
                    name: "Lidya Dwi Utami",
                    image: "images/eclipseprofile_74.png",
                    judul:
                        "Prediksi Interaksi Senyawa dan Protein untuk Drug Repositioning Anti Covid-19 Menggunakan Metode Deep Neural Network",
                    jadwal: "Senin, 14 Desember 2020",
                    pukul: "16:00 - 16:30"
                },
                {
                    id: 75,
                    name: "Ervan Sadhaly",
                    image: "images/eclipseprofile_75.png",
                    judul:
                        "Perancangan Aplikasi Importance-Performance Analysis (IPA) dan Analisis Strengths, Weaknesses, Opportunities, Threats (SWOT) menggunakan R",
                    jadwal: "Senin, 14 Desember 2020",
                    pukul: "16:30 - 17:00"
                },
                {
                    id: 76,
                    name: "Taufik Hidayat",
                    image: "images/eclipseprofile_blank.png",
                    judul:
                        "Pengembangan Front-End Aplikasi MAP-GIS Berbasis Web Menggunakan Framework Django",
                    jadwal: "Senin, 14 Desember 2020",
                    pukul: "17:00 - 17:30"
                }
            ]
        };
    }
};
</script>
