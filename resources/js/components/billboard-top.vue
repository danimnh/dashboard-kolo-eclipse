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
                    image: "images/eclipseprofile_01.png",
                    judul:
                        "Prediksi Kandidat Senyawa Herbal Sebagai Obat Anti-Virus SARS-CoV-2 Menggunakan Pemodelan Convolutional Neural Network",
                    jadwal: "Senin, 30 November 2020",
                    pukul: "15:30 - 16:00"
                },
                {
                    id: 2,
                    name: "Refianto Damai Darmawan",
                    image: "images/eclipseprofile_02.png",
                    judul:
                        "Screening Senyawa Herbal dengan Komputasi GPU pada Basis Data ZINC melalui Pendekatan Machine Learning",
                    jadwal: "Senin, 30 November 2020",
                    pukul: "16:00 - 16:30"
                },
                {
                    id: 3,
                    name: "Dwi Fristanti Sagala ",
                    image: "images/eclipseprofile_03.png",
                    judul:
                        "Pencarian Protein Signifikan Terkait Inflamasi pada COVID-19 Dengan Menggunakan Skyline Query",
                    jadwal: "Senin, 30 November 2020",
                    pukul: "16:30 - 17:00"
                },
                {
                    id: 4,
                    name: "Muh Alif Hanif Fadilah",
                    image: "images/eclipseprofile_04.png",
                    judul:
                        "Graf Traversing menggunakan teknik Branch and Bound untuk menemukan Senyawa Herbal untuk COVID-19",
                    jadwal: "Senin, 30 November 2020",
                    pukul: "17:00 - 17:30"
                },
                {
                    id: 5,
                    name: "Elia Samuel",
                    image: "images/eclipseprofile_05.png",
                    judul:
                        "Pengembangan Modul Simulasi Real Time Lintasan Kabut Asap Karhutla dengan HYSPLIT",
                    jadwal: "Selasa, 1 Desember 2020",
                    pukul: "15:30 - 16:00"
                },
                {
                    id: 6,
                    name: "Fahreza Ikhsan Hafiz",
                    image: "images/eclipseprofile_06.png",
                    judul:
                        "Klasifikasi Citra Histopatologi Kanker Serviks Menggunakan Metode Transfer Learning",
                    jadwal: "Selasa, 1 Desember 2020",
                    pukul: "16:00 - 16:30"
                },
                {
                    id: 7,
                    name: "Mickael",
                    image: "images/eclipseprofile_07.png",
                    judul:
                        "Pengembangan Modul Verifikasi Lintasan Kabut Asap Karhutla menggunakan Citra Himawari 8",
                    jadwal: "Selasa, 1 Desember 2020",
                    pukul: "16:30 - 17:00"
                },
                {
                    id: 8,
                    name: "Intan Aida Rahmani",
                    image: "images/eclipseprofile_08.png",
                    judul:
                        "Penerapan Algoritme Maximum Likelihood dan K-Nearest Neighbour untuk Identifikasi Lahan Bawang Putih Menggunakan Citra Sentinel 1-A",
                    jadwal: "Selasa, 1 Desember 2020",
                    pukul: "17:00 - 17:30"
                },
                {
                    id: 9,
                    name: "Alfian Hamam Akbar",
                    image: "images/eclipseprofile_09.png",
                    judul:
                        "Klasifikasi Kanker Serviks Pada Citra Pap Smear Menggunakan Model Convolutional Neural Network dan Support Vector Machine",
                    jadwal: "Rabu, 2 Desember 2020",
                    pukul: "15:30 - 16:00"
                },
                {
                    id: 10,
                    name: "M. Fakhri 'Alauddin Hidayat",
                    image: "images/eclipseprofile_10.png",
                    judul:
                        "Sistem Informasi Manajemen Data Patroli Pencegahan Karhutla di Wilayah Sumatera",
                    jadwal: "Rabu, 2 Desember 2020",
                    pukul: "16:00 - 16:30"
                }
            ]
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
