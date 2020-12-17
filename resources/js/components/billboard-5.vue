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
    margin-top: -248px;
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
    bottom: 133;
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
                    id: 49,
                    name: "Afifah Noviani",
                    image: "images/eclipseprofile_blank.png",
                    judul:
                        "Perancangan User Interface Aplikasi By-Polar untuk Orang dengan Gangguan Bipolar",
                    jadwal: "Kamis, 10 Desember 2020",
                    pukul: "15:30 - 16:00"
                },
                {
                    id: 50,
                    name: "Wanda Azizah Yasin",
                    image: "images/eclipseprofile_50.png",
                    judul:
                        "Perancangan User Interface Aplikasi By-Polar untuk Orang dengan Gangguan Bipolar",
                    jadwal: "Kamis, 10 Desember 2020",
                    pukul: "15:30 - 16:00"
                },
                {
                    id: 51,
                    name: "Dina Fadila",
                    image: "images/eclipseprofile_51.png",
                    judul:
                        "Pendefinisian Sudut Pandang, Pengidean, dan Pembuatan Low-Fi Prototype pada Aplikasi By-Polar untuk Penderita Gangguan Bipolar",
                    jadwal: "Kamis, 10 Desember 2020",
                    pukul: "16:30 - 17:00"
                },
                {
                    id: 52,
                    name: "Najemi Putrianti",
                    image: "images/eclipseprofile_blank.png",
                    judul:
                        "Perancangan Pengalaman Pemberi Pinjaman Lepas pada Aplikasi Koper Pustaka Modul Peminjaman Berantai Menggunakan Metode Design Thinking",
                    jadwal: "Kamis, 10 Desember 2020",
                    pukul: "17:00 - 17:30"
                },
                {
                    id: 53,
                    name: "Rafie Fadlurahman",
                    image: "images/eclipseprofile_53.png",
                    judul:
                        "Analyzing the Uncanny Valley as a Case of Simpson’s Paradox",
                    jadwal: "Jumat, 11 Desember 2020",
                    pukul: "15:30 - 16:00"
                },
                {
                    id: 54,
                    name: "Morgan Mendel",
                    image: "images/eclipseprofile_54.png",
                    judul:
                        "Perancangan Interaksi Menggunakan Metode Double Diamond untuk Edukasi dan Peminatan Specialty Coffee Lokal",
                    jadwal: "Jumat, 11 Desember 2020",
                    pukul: "16:00 - 16:30"
                },
                {
                    id: 55,
                    name: "Zaki Muttaqin",
                    image: "images/eclipseprofile_55.png",
                    judul:
                        "Perancangan Interaksi Konsumen Coffee Shop di Era Adaptasi Kebiasaan Baru dengan Metode Double Diamond",
                    jadwal: "Jumat, 11 Desember 2020",
                    pukul: "16:30 - 17:00"
                },
                {
                    id: 56,
                    name: "Muhammad Fauzan Azhim",
                    image: "images/eclipseprofile_56.png",
                    judul:
                        "Pengembangan Sistem Informasi Workshop Trop BRC IPB Berbasis Web dengan Metode Prototyping",
                    jadwal: "Jumat, 11 Desember 2020",
                    pukul: "17:00 - 17:30"
                },
                {
                    id: 57,
                    name: "Reyhan Widyatna Harwenda",
                    image: "images/eclipseprofile_57.png",
                    judul:
                        "Pengembangan Modul Frontend Aplikasi IPB Connect Berbasis Web Menggunakan Metode Prototyping",
                    jadwal: "Jumat, 11 Desember 2020",
                    pukul: "15:30 - 16:00"
                }
            ]
        };
    }
};
</script>
