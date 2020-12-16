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
    margin-top: -370px;
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
    bottom: 243;
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
                    id: 87,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 88,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 89,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 90,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 91,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 92,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 93,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 94,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 95,
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
