import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Cookies from 'js-cookie'
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/login',
  },
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
    path: "/view-text",
    component: () => import(/* webpackChunkName: "login" */ '@/views/home/Text.vue'),
  },
  {
    path: "/create-atlas",
    component: () => import(/* webpackChunkName: "login" */ '@/views/home/CreateAtlas.vue'),
  },
];


const router: VueRouter = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (Cookies.get('username')) {
    if (to.path === '/login') {
      next({path: "/home", replace: true})
    } else {
      next()
    }
  } else {
    if (['/login','/register'].includes(to.path)) {
      next()
    } else {
      next({path: '/login', replace: true})
    }
  }
})

export default router;
