<template>
    <div>
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
                            Basic Modal
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
                        <h3>Modal Body</h3>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-default"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" class="btn btn-primary">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <img class="bg" src="../../../public/billboard-textbox.png" alt="" />
        <img class="bg" src="../../../public/billboard-layer-1.png" alt="" />
        <!-- render img of each IDs  -->
        <div class="marginleft">
            <img
                v-for="profile in profiles"
                :src="profile.image"
                :key="profile.name"
                class="persons"
                data-toggle="modal"
                data-target="#basicModal"
            />
        </div>
        <img
            class="bglayer"
            src="../../../public/billboard-layer-2.png"
            alt=""
        />
    </div>
</template>
<style scoped>
.modal {
    background-color: black;
    opacity: 0.75;
    /* !important; */
}
.modal-backdrop {
    background-color: transparent;
}
div.marginleft {
    margin-left: 60;
    margin-top: -152;
}
img.bg {
    max-width: 100%;
    max-height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
}
img.persons {
    max-width: 150px;
    margin-top: 20;
    margin-right: 33px;
    position: relative;
    object-fit: cover;
    z-index: 0;
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
    top: -57;
    z-index: 1;
    position: relative;
}
</style>
<script>
export default {
    mounted() {
        console.log("Component mounted.");
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
                },
                {
                    name: "person10",
                    image: "https://i.ibb.co/HgdSFBb/person-1-200.png"
                }
            ]
        };
    }
};
</script>
