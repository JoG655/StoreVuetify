<script setup lang="ts">
import { useRouter } from "vue-router";

import { useProductsStore } from "@/stores/products";

const router = useRouter();

const productsStore = useProductsStore();

function handleCartClick() {
  router.push({ name: "Cart" });
}
</script>

<template>
  <header>
    <v-toolbar title="Application">
      <v-btn @click="handleCartClick" color="primary" variant="elevated">
        Items in Cart: {{ productsStore.cart.length }}
      </v-btn>
    </v-toolbar>
  </header>
  <main>
    <RouterView />
  </main>
</template>
