import { createRouter, createWebHistory } from "vue-router";
import homeLayout from "../components/homeLayout.vue";
import Home from "../views/Home.vue";
import searchResult from "../views/searchResult.vue";

const routes = [
  {
    path: "/",
    component: homeLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/search/:keyword?",
        name: "searchResult",
        component: searchResult,
      },

      {
        path: "/about",
        name: "about",
        component: () => import("../views/about.vue"),
      },
      {
        path: "/archive/:keyword?",
        name: "archive",
        component: () => import("../views/archive.vue"),
      },
      {
        path: "/generator",
        name: "generator",
        component: () => import("../views/generator.vue"),
      },
      {
        path: "/generator/channel=:channelId",
        name: "channelInfo",
        component: () => import("../views/channelInfo.vue"),
      },
      {
        path: "/archive/watch=:id?",
        name: "videoInfo",
        component: () => import("../views/videoInfo.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
