import VueRouter from "vue-router";
import Vue from "vue";
import Home from "@/routes/Home";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'Noah Kovacs | Home'
            }
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import(/* webpackChunkName: "repos" */ './routes/Projects'),
            meta: {
                title: 'Noah Kovacs | Projects'
            }
        }
    ]
})
