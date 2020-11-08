<template>
    <div>
        <img class="person-1" src="../../../public/person-1.png" alt="" />
        <img
            class="bglayer"
            src="../../../public/billboard-layer-3.png"
            alt=""
        />
    </div>
</template>
<style scoped>
img.bg {
    max-width: 100%;
    max-height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
}
img.person-1 {
    height: 130px;
    position: absolute;
    top: 100px;
    left: 490px;
    /* left: 180px; */
    /* tiap nambah orang + 127 px( 307 - 180 )  */
    z-index: 2;
}
img.person-1:hover {
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
        console.log("Component mounted.");
    }
};
</script>
