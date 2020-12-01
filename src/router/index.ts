import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Index from "../views/face/Index.vue";
import Match from "../views/face/Match.vue";
import Match11 from "../views/face/Match11.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Face",
    component: Index,
    redirect: "/match",
    children: [
      {
        path: "match",
        name: "Match",
        component: Match,
        meta: {
          title: "Match",
        },
      },
      {
        path: "match11",
        name: "Match11",
        component: Match11,
        meta: {
          title: "Match11",
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
