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
                    name: "",
                    image: "images/eclipseprofile_41.png",
                    judul: "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 42,
                    name: "",
                    image: "images/eclipseprofile_42.png",
                    judul: "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 43,
                    name: "",
                    image: "images/eclipseprofile_43.png",
                    judul: "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 44,
                    name: "",
                    image: "images/eclipseprofile_44.png",
                    judul: "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 45,
                    name: "",
                    image: "images/eclipseprofile_45.png",
                    judul: "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 46,
                    name: "",
                    image: "images/eclipseprofile_46.png",
                    judul: "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 47,
                    name: "",
                    image: "images/eclipseprofile_47.png",
                    judul: "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 48,
                    name: "",
                    image: "images/eclipseprofile_48.png",
                    judul: "",
                    jadwal: "",
                    pukul: ""
                }
            ]
        };
    }
};
</script>
