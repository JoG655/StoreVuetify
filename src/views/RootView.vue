<script setup lang="ts">
import { useProductsStore } from "@/stores/products";

import { useRouter } from "vue-router";

import { onMounted, ref } from "vue";

import ProductItemComp from "@/components/ProductItemComp.vue";

const productsStore = useProductsStore();

const router = useRouter();

function handleDetailsClick(id: number) {
  console.log("h");
  router.push({ name: "ProductSlug", params: { id } });
}

const isLoading = ref(false);

onMounted(async () => {
  isLoading.value = true;

  await productsStore.fetchProductsFromDB();

  isLoading.value = false;
});
</script>

<template>
  <div v-if="isLoading">Loading ...</div>
  <div v-else>
    <v-row no-gutters>
      <v-col v-for="product in productsStore.products" :key="product.id" cols="12" sm="4">
        <ProductItemComp
          :id="product.id"
          :description="product.description"
          :price="product.price"
          :thumbnail="product.thumbnail"
          :brand="product.brand"
          @detailsClick="handleDetailsClick"
        />
      </v-col>
    </v-row>
  </div>
</template>
