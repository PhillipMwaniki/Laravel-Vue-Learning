require("./bootstrap");

import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import App from "./components/App.vue";
import PostIndex from "./components/Posts/Index.vue";
import PostCreate from "./components/Posts/Create.vue";

const router = new VueRouter({
    mode: 'history',
    route: [
        {
            path: '/',
            component: PostIndex
        },
        {
            path: '/posts/create',
            component: PostCreate
        },
    ]
});


Vue.component('pagination', require('laravel-vue-pagination'));

const app = new Vue({
    el: "#app",
    components: { App },
    router
});
