<template>
    <fragment>
        <img
            @click="showModal = !showModal"
            :src="profile.image"
            class="persons"
            data-toggle="modal"
            data-target="#basicModal"
        />
        <modal
            @closeModal="childCloseModal"
            v-if="showModal"
            :profile="profile"
        />
    </fragment>
</template>

<script>
import modal from "./modal";

export default {
    components: {
        modal
    },
    props: {
        profile: Object
    },
    data() {
        return {
            showModal: false
        };
    },
    methods: {
        childCloseModal(value) {
            this.showModal = value;
            // console.log(value);
        }
    }
};
</script>

<style>
img.persons {
    /* width: 100%; */
    max-width: 11vw;
    height: auto;
    margin-top: 2 0;
    margin-right: 3.4vw;
    position: relative;
    /* object-fit: cover; */
    z-index: 1;
}
img.persons:hover {
    transform: scale(1.2);
}
</style>
