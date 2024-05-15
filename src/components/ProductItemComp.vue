<template>
  <v-sheet class="ma-2 pa-2">
    <v-card class="mt-13">
      <v-img class="mr-6" :src="props.thumbnail" height="200px" cover />
      <v-card-title>
        {{ props.brand }}
      </v-card-title>
      <v-card-subtitle> $ {{ props.price }} </v-card-subtitle>
      <v-card-text>
        {{ props.description }}
      </v-card-text>
      <v-card-actions>
        <!-- <v-btn @click="$emit('detailsClick', props.id)"> Details </v-btn> -->
        <v-btn @click="handleDetailsClick"> Details </v-btn>
      </v-card-actions>
    </v-card>
  </v-sheet>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

import { type Product } from "@/types/product";

type ProductItemProps = Pick<Product, "id" | "description" | "price" | "thumbnail" | "brand">;

const props = defineProps<ProductItemProps>();

const emit = defineEmits<{
  detailsClick: [id: number];
}>();

function handleDetailsClick() {
  emit("detailsClick", props.id);
}
</script>
