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
                    //
                    id: 30,
                    name: "billboard6",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul:
                        "Pengembangan Prototipe Blockchain Platform Untuk Sistem Rantai Pasok Bawang Merah",
                    jadwal: "Selasa, 8 Desember 2020",
                    pukul: "13:30 - 14:00"
                },
                {
                    name: "person2",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png"
                },
                {
                    name: "person3",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png"
                },
                {
                    name: "person4",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png"
                },
                {
                    name: "person5",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png"
                },
                {
                    name: "person6",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png"
                },
                {
                    name: "person7",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png"
                },
                {
                    name: "person8",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png"
                },
                {
                    name: "person9",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png"
                },
                {
                    name: "person10",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png"
                }
            ]
        };
    }
};
</script>
