<template>
    <div
        class="modal"
        id="basicModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="basicModal"
        aria-hidden="true"
        data-backdrop="false"
    >
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myModalLabel">
                        {{ profile.name }}
                    </h4>
                    <button
                        v-on:click="onClickButton(false)"
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h3>{{ profile.judul }}</h3>
                    <h3>{{ profile.jadwal }}</h3>
                </div>
                <div class="modal-footer">
                    <button
                        v-on:click="onClickButton(false)"
                        type="button"
                        class="btn btn-default"
                        data-dismiss="modal"
                    >
                        Close
                    </button>
                    <!-- <button type="button" class="btn btn-primary">
                            Save changes
                        </button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        profile: Object,
        showModal: Boolean
    },
    methods: {
        onClickButton(event) {
            this.$emit("closeModal", false);
        }
    }
};
</script>

<style></style>
