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
            src="../../../public/billboard-layer-3.png"
            alt=""
        />
    </div>
</template>
<style scoped>
div.marginleft {
    margin-left: 160px;
    margin-top: -195px;
}
/* img.bg {
    max-width: 100%;
    max-height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
} */
img.persons {
    max-width: 150px;
    margin-top: 0;
    margin-right: 33px;
    position: relative;
    object-fit: cover;
    z-index: 2;
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
    top: -53;
    z-index: 2;
    position: relative;
}
</style>
<script>
export default {
    mounted() {
        console.log("billboard-1 mounted");
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
                }
            ]
        };
    },
    setup() {
        function imgOnClick() {
            console.log("img clicked");
        }

        return {
            imgOnClick
        };
    }
};
</script>
