<template>
    <!-- <div class="container">
        <div class="row">
            <div class="col">
                <img
                    class="billboard-1"
                    src="../../../public/billboard-layer-1.png"
                    alt=""
                />
                <img
                    class="person-1"
                    src="../../../public/person-1.png"
                    alt=""
                />
                <img
                    class="billboard-2"
                    src="../../../public/billboard-layer-2.png"
                    alt=""
                />
                <img
                    class="billboard-3"
                    src="../../../public/billboard-layer-3.png"
                    alt=""
                />
            </div>
        </div>
    </div> -->
    <div>
        <billboard-1 />
        <billboard-2 />
    </div>
</template>

<style scoped>
img.person-1 {
    height: 130px;
    position: absolute;
    left: 290px;
}
img.person-1:hover {
    transform: scale(1.5);
}
img.billboard-3 {
    z-index: 1;
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
