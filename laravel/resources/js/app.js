require("./bootstrap");

import Vue from "vue";
import VueRouter from "vue-router";
import Axios from "axios";

Vue.use(VueRouter);

import routes from "./router/index";

Vue.component("navigation", require("./components/Navigation.vue").default);
Vue.component("headertitle", require("./components/HeaderTitle.vue").default);
Vue.component("billboard", require("./components/Billboard.vue").default);

const app = new Vue({
    el: "#app",

    router: new VueRouter(routes)
});
