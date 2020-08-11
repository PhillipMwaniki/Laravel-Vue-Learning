import VueRouter from "vue-router";
import PostIndex from "../components/Posts/Index";
import PostCreate from "../components/Posts/Create";
import PostEdit from "../components/Posts/Edit";

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
        {
            path: '/edit/:id',
            component: PostEdit,
            name: 'posts.edit'
        },
    ]
};
