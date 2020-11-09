<template>
    <div>
        <div class="marginleft">
            <div class="box">
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
    display: flex;
    margin-left: 10vw;
    margin-top: -152;
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
    max-width: 8%;
    margin-top: 20;
    margin-right: 1vw;
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
    top: -24;
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
                    image: "https://i.ibb.co/dByWr6t/person-1.png"
                },
                {
                    name: "person2",
                    image: "https://i.ibb.co/dByWr6t/person-1.png"
                },
                {
                    name: "person3",
                    image: "https://i.ibb.co/dByWr6t/person-1.png"
                },
                {
                    name: "person4",
                    image: "https://i.ibb.co/dByWr6t/person-1.png"
                },
                {
                    name: "person5",
                    image: "https://i.ibb.co/dByWr6t/person-1.png"
                },
                {
                    name: "person6",
                    image: "https://i.ibb.co/dByWr6t/person-1.png"
                },
                {
                    name: "person7",
                    image: "https://i.ibb.co/dByWr6t/person-1.png"
                },
                {
                    name: "person8",
                    image: "https://i.ibb.co/dByWr6t/person-1.png"
                },
                {
                    name: "person9",
                    image: "https://i.ibb.co/dByWr6t/person-1.png"
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
