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
    margin-top: -330px;
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
    bottom: 215;
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
                    id: 76,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 77,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 78,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 79,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 80,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 81,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 83,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 84,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 85,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 86,
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
