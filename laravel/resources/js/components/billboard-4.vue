<template>
    <div>
        <div class="marginleft">
            <div>
                <img
                    v-for="profile in profiles"
                    :src="profile.image"
                    :key="profile.name"
                    class="persons"
                />
            </div>
        </div>
        <img
            class="bglayer"
            src="../../../public/billboard-layer-4.png"
            alt=""
        />
    </div>
</template>
<style scoped>
div.marginleft {
    margin-left: 20px;
    margin-top: -150px;
}
img.bg {
    max-width: 100%;
    max-height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
}
img.persons {
    max-width: 150px;
    margin-top: -40;
    margin-left: 35px;
    position: relative;
    object-fit: cover;
    /* left: 180px; */
    /* tiap nambah orang + 127 px( 307 - 180 ) <- belom pasti jg */
    z-index: 3;
}
/* ini efek hover */
img.persons:hover {
    transform: scale(1.2);
}
img.bglayer {
    max-width: 100%;
    max-height: 100%;
    bottom: 57;
    left: 0;
    right: 0;
    /* top ini sering diubah menyesuaikan */
    /* top: -38; */
    z-index: 3;
    position: relative;
}
</style>
<script>
export default {
    mounted() {
        console.log("billboard-4 mounted.");
    },
    data() {
        return {
            profiles: [
                {
                    name: "person1",
                    image: "https://i.ibb.co/HgdSFBb/person-1-200.png"
                },
                {
                    name: "person2",
                    image: "https://i.ibb.co/HgdSFBb/person-1-200.png"
                },
                {
                    name: "person3",
                    image: "https://i.ibb.co/HgdSFBb/person-1-200.png"
                },
                {
                    name: "person4",
                    image: "https://i.ibb.co/HgdSFBb/person-1-200.png"
                },
                {
                    name: "person5",
                    image: "https://i.ibb.co/HgdSFBb/person-1-200.png"
                },
                {
                    name: "person6",
                    image: "https://i.ibb.co/HgdSFBb/person-1-200.png"
                },
                {
                    name: "person7",
                    image: "https://i.ibb.co/HgdSFBb/person-1-200.png"
                },
                {
                    name: "person8",
                    image: "https://i.ibb.co/HgdSFBb/person-1-200.png"
                },
                {
                    name: "person9",
                    image: "https://i.ibb.co/HgdSFBb/person-1-200.png"
                },
                {
                    name: "person10",
                    image: "https://i.ibb.co/HgdSFBb/person-1-200.png"
                }
            ]
        };
    }
};
</script>
