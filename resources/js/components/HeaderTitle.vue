<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <img
                    class="logo"
                    src="../../../public/logo-eclipse.png"
                    alt=""
                />
                <div class="title">
                    <h2>Jadwal Kolokium</h2>
                    <h3>Eclipse54</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
div.container {
    /* background-color: aquamarine; */
}
div.title {
    text-align: center;
}
h2 {
    font-weight: bold;
}
img.logo {
    max-width: 250px;
    max-height: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block; /* remove extra space below image */
}
</style>
<script>
export default {
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
