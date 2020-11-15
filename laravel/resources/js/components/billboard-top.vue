<template>
    <div>
        <img class="bg" src="../../../public/billboard-textbox.png" alt="" />
        <img class="bg" src="../../../public/billboard-layer-1.png" alt="" />
        <!-- render img of each IDs  -->
        <div class="marginleft">
            <img
                v-for="profile in profiles"
                :src="profile.image"
                :key="profile.name"
                class="persons"
            />
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
    margin-left: 60;
    margin-top: -152;
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
    margin-top: 20;
    margin-right: 33px;
    position: relative;
    object-fit: cover;
    z-index: 0;
}
img.persons:hover {
    transform: scale(1.2);
}
img.bglayer {
    max-width: 100%;
    max-height: 100%;
    bottom: 100;
    left: 0;
    right: 0;
    top: -57;
    z-index: 1;
    position: relative;
}
</style>
<script>
export default {
    mounted() {
        console.log("Component mounted.");
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
