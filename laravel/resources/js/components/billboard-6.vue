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
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 59,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 60,
                    name: "",
                    image: "images/eclipseprofile_60.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 61,
                    name: "",
                    image: "images/eclipseprofile_61.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 62,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 63,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 64,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 65,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 66,
                    name: "",
                    image: "images/eclipseprofile_66.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 67,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
            ]
        };
    }
};
</script>
