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
                    name: "",
                    image: "images/eclipseprofile_68.png",
                    judul: "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 69,
                    name: "",
                    image: "images/eclipseprofile_69.png",
                    judul: "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 70,
                    name: "",
                    image: "images/eclipseprofile_70.png",
                    judul: "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 71,
                    name: "",
                    image: "images/eclipseprofile_71.png",
                    judul: "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 72,
                    name: "",
                    image: "images/eclipseprofile_72.png",
                    judul: "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 73,
                    name: "",
                    image: "images/eclipseprofile_73.png",
                    judul: "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 74,
                    name: "",
                    image: "images/eclipseprofile_74.png",
                    judul: "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 75,
                    name: "",
                    image: "images/eclipseprofile_75.png",
                    judul: "",
                    jadwal: "",
                    pukul: ""
                },
                {
                    id: 76,
                    name: "",
                    image: "images/eclipseprofile_blank.png",
                    judul: "",
                    jadwal: "",
                    pukul: ""
                }
            ]
        };
    }
};
</script>
