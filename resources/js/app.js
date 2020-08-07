require("./bootstrap");

import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import App from "./components/App.vue";
import PostIndex from "./components/Posts/Index.vue";
import PostCreate from "./components/Posts/Create.vue";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: PostIndex,
            name: 'posts.index'
        },
        {
            path: '/create',
            component: PostCreate,
            name: 'posts.create'
        },
    ]
});


Vue.component('pagination', require('laravel-vue-pagination'));

const app = new Vue({
    el: "#app",
    components: { App },
    router: router
});
