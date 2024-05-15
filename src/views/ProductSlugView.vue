<script setup lang="ts">
import { computed } from "vue";
import { useProductsStore } from "@/stores/products";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

const route = useRoute();

const productsStore = useProductsStore();

const selectedProduct = computed(() => {
  return productsStore.products.find((item) => item.id === +route.params.id);
});

function handleBackClick() {
  router.push({ name: "Root" });
}

function handleAddClick() {
  if (!selectedProduct.value) return;

  productsStore.addToCart(selectedProduct.value);

  router.push({ name: "Root" });
}
</script>

<template>
  <v-btn @click="handleBackClick" color="primary" variant="elevated"> Back to catalog </v-btn>
  <div class="mt-13" v-if="selectedProduct">
    <div>
      <img :src="selectedProduct.thumbnail" alt="" />
    </div>
    <div>
      <p>Brand: {{ selectedProduct.brand }}</p>
      <p>Description: {{ selectedProduct.description }}</p>
      <h2>Price: ${{ selectedProduct.price }}</h2>
      <v-btn variant="elevated" color="indigo-lighten-3" @click="handleAddClick">Add to cart</v-btn>
    </div>
  </div>
</template>
