import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue'),
  },
  {
    path: "/home",
    component: () => import(/* webpackChunkName: "login" */ '@/views/home/HomeIndex.vue'),
  },
  {
    path: "/create-text",
    component: () => import(/* webpackChunkName: "login" */ '@/views/home/CreateText.vue'),
  },
  {
    path: "/register",
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/RegisterIndex.vue'),
  },
  {
    path: "/view-card",
    component: () => import(/* webpackChunkName: "login" */ '@/views/home/ViewCard.vue'),
  },
  {
    path: "/create-atlas",
    component: () => import(/* webpackChunkName: "login" */ '@/views/home/CreateAtlas.vue'),
  },
];

const router: VueRouter = new VueRouter({
  routes
});

export default router;
