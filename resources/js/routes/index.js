import VueRouter from "vue-router";
import PostIndex from "../components/Posts/Index";
import PostCreate from "../components/Posts/Create";

export default {
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
};
