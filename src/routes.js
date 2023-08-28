import { createWebHistory, createRouter } from "vue-router";
import Parent from "./components/Parent.vue";
import Child from "./components/Child.vue";

const routes = [
  {
    name: "Parent",
    path: "/",
    component: Parent,
  },
  {
    name: "Child",
    path: "/child",
    component: Child,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
