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
            <!-- <img
                        v-for="profile in profiles"
                        :src="profile.image"
                        :key="profile.name"
                        class="persons"
                        data-toggle="modal"
                        data-target="#basicModal"
                    /> -->
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
.modal {
    background-color: black;
    opacity: 0.75;
    /* !important; */
}
.modal-backdrop {
    background-color: transparent;
}
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
                    id: 1,
                    name: "person1",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul: "abcde",
                    jadwal: "sekarang"
                },
                {
                    id: 2,
                    name: "person2",
                    image: "http://via.placeholder.com/125x144",
                    judul: "asdasd",
                    jadwal: "besok"
                },
                {
                    id: 3,
                    name: "person3",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul: "abcde",
                    jadwal: "sekarang"
                },
                {
                    id: 4,
                    name: "person4",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul: "abcde",
                    jadwal: "sekarang"
                },
                {
                    id: 5,
                    name: "person5",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul: "abcde",
                    jadwal: "sekarang"
                },
                {
                    id: 6,
                    name: "person6",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul: "abcde",
                    jadwal: "sekarang"
                },
                {
                    id: 7,
                    name: "person7",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul: "abcde",
                    jadwal: "sekarang"
                },
                {
                    id: 8,
                    name: "person8",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul: "abcde",
                    jadwal: "sekarang"
                },
                {
                    id: 9,
                    name: "person9",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul: "abcde",
                    jadwal: "sekarang"
                },
                {
                    id: 10,
                    name: "person10",
                    image: "https://i.ibb.co/2F4cxkx/person-1-125.png",
                    judul: "abcde",
                    jadwal: "sekarang"
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
