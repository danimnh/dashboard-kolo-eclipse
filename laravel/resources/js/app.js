require("./bootstrap");

import Vue from "vue";
import VueRouter from "vue-router";
import Axios from "axios";

Vue.use(VueRouter);

import routes from "./router/index";

Vue.component("billboard", require("./components/Billboard.vue").default);
Vue.component(
    "billboardfull",
    require("./components/billboardfull.vue").default
);
Vue.component(
    "billboard-top",
    require("./components/billboard-top.vue").default
);
Vue.component("billboard-1", require("./components/billboard-1.vue").default);
Vue.component("billboard-2", require("./components/billboard-2.vue").default);
Vue.component("billboard-3", require("./components/billboard-3.vue").default);
Vue.component("billboard-4", require("./components/billboard-4.vue").default);

const app = new Vue({
    el: "#app",

    router: new VueRouter(routes)
});
