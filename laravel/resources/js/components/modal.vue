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
                        {{ profiles[0].name }}
                    </h4>
                    <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h3>{{ profiles[0].judul }}</h3>
                    <h3>{{ profiles[0].jadwal }}</h3>
                </div>
                <div class="modal-footer">
                    <button
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
