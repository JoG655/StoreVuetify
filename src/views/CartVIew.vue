<script setup lang="ts">
import { useRouter } from "vue-router";

import { useProductsStore } from "@/stores/products";

const router = useRouter();

const productsStore = useProductsStore();

function handleBackClick() {
  router.push({ name: "Root" });
}

function handleRemoveClick(id: number) {
  productsStore.removeFromCart(id);
}
</script>

<template>
  <v-btn @click="handleBackClick" color="primary" variant="elevated"> Back to catalog </v-btn>
  <div v-if="!productsStore.cart.length" class="text-center mt-13">
    <h1>Empty Cart ...</h1>
  </div>
  <div class="pa-4 mt-13 text-right" v-else>
    <div
      v-for="item in productsStore.cart"
      :key="item.id"
      class="pa-4 mb-8 rounded-lg d-flex justify-space-between align-center"
    >
      <img class="w-25" :src="item.thumbnail" alt="" />
      <span>Brand: {{ item.brand }}</span>
      <span>Category: {{ item.category }}</span>
      <span>Price: ${{ item.price }}</span>
      <v-btn @click="handleRemoveClick(item.id)"> Remove </v-btn>
    </div>
  </div>
</template>

<style scoped></style>
