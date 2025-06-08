import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PackagesView from "@/views/PackagesView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import AboutView from "@/views/AboutView.vue";
import PackageView from "@/views/PackageView.vue";
import AddPackageView from "@/views/AddPackageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/packages",
      name: "packages",
      component: PackagesView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/packages/:id",
      name: "package",
      component: PackageView,
    },
    {
      path: "/add-package",
      name: "add-package",
      component: AddPackageView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
  scrollBehavior() {
    // Always scroll to top
    return { top: 0 };
  },
});

export default router;
