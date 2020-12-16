<template>
    <div class="root">
        <!-- top udah 1 row profile jg -->
        <billboard-top />
        <billboard-1 />
        <billboard-2 />
        <billboard-3 />
        <billboard-4 />
        <billboard-5 />
        <billboard-6 />
        <billboard-7 />
        <billboard-8 />
        <billboard-9 />

        <!-- <billboard-7 /> -->
        <!-- <billboard-2 /> -->
        <!-- <billboard-3 /> -->
    </div>
</template>
<style scoped>
div.root {
    max-width: 100%;
    max-height: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
}
</style>
<script>
export default {
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
