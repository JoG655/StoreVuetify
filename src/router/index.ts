import { createRouter, createWebHistory } from "vue-router";
import RootView from "@/views/RootView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Root",
      component: RootView,
    },
    {
      path: "/product/:id",
      name: "ProductSlug",
      // component: ProductSlugView,
      component: () => import("@/views/ProductSlugView.vue"),
    },
    {
      path: "/cart",
      name: "Cart",
      // component: CartVIew,
      component: () => import("@/views/CartVIew.vue"),
    },
  ],
});

export default router;
