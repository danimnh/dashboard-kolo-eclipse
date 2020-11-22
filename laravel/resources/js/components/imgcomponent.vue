<template>
    <img :src="profile.image" class="persons" />
</template>

<script>
export default {
    props: {
        profile: Object
    }
};
</script>

<style>
img.persons {
    /* width: 100%; */
    max-width: 11vw;
    height: auto;
    margin-top: 20;
    margin-right: 3.4vw;
    position: relative;
    /* object-fit: cover; */
    z-index: 0;
}
img.persons:hover {
    transform: scale(1.2);
}
</style>
