import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import("pages/Main.vue"),
    children: [
      {
        path: "routings",
        component: () => import("pages/routing/RoutingRuleList.vue")
      },
      {
        path: "routings/:id",
        component: () => import("pages/routing/RoutingRuleDetail.vue")
      },
      {
        path: "",
        redirect: "/routings"
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/common/ErrorNotFound.vue")
  }
];

export default routes;
