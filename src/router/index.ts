import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "",
      component: () => import("../components/Layout/Layout.vue"),
      children: [
        {
          path: "/",
          component: () => import("../views/PageHumanGender.vue"),
          meta: {
            footer: true,
          },
        },
        {
          path: "time-day",
          component: () => import("../views/PageTimeDay.vue"),
          meta: {
            footer: true,
          },
        },
        {
          path: "insomnia",
          component: () => import("../views/PageInsomnia.vue"),
          meta: {
            footer: true,
          },
        },
        {
          path: "plans",
          component: () => import("../views/PagePlans.vue"),
          meta: {
            footer: true,
          },
        },
        {
          path: "life",
          component: () => import("../views/PageLife.vue"),
          meta: {
            footer: true,
          },
        },
        {
          path: "plans",
          component: () => import("../views/PagePlans.vue"),
          meta: {
            footer: true,
          },
        },
        {
          path: "birth",
          component: () => import("../views/PageBirth.vue"),
        },
        {
          path: "finish",
          component: () => import("../views/PageFinish.vue"),
        },
        {
          path: "call",
          component: () => import("../views/PageCall.vue"),
          meta: {
            footerText: true,
          },
        },
      ],
    },
  ],
});

export default router;
