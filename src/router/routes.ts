import {RouteConfig} from "vue-router";
import VField from "@/components/VField/VField.vue";

const routes: RouteConfig[] = [
  {
    path: "",
    alias: "/operations",
    name: "operations",
    component: VField
  }
];

export default routes;