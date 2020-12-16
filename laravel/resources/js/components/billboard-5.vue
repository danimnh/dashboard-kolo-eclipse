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
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 50,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 51,
                    name: "",
                    image: "images/eclipseprofile_51.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 52,
                    name: "",
                    image: "images/eclipseprofile_16.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 53,
                    name: "",
                    image: "images/eclipseprofile_53.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 54,
                    name: "",
                    image: "images/eclipseprofile_54.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 55,
                    name: "",
                    image: "images/eclipseprofile_55.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 56,
                    name: "",
                    image: "images/eclipseprofile_56.png",
                    judul:
                        "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 57,
                    name: "",
                    image: "images/eclipseprofile_57.png",
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
