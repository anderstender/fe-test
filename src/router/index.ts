import VueRouter, { RouteConfig } from "vue-router";
import VOperations from "@/components/VOperations/VOperations.vue";
import routes from "@/router/routes";

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;