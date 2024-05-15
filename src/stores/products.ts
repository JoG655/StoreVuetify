import { ref } from "vue";
import { defineStore } from "pinia";
import type { Product } from "@/types/product";

export const useProductsStore = defineStore("Products", () => {
  const products = ref<Product[]>([]);

  const cart = ref<Product[]>([]);

  async function fetchProductsFromDB() {
    return fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => {
        products.value = json.products;
      });
  }

  function addToCart(product: Product) {
    cart.value.push(product);
  }

  function removeFromCart(id: number) {
    console.log(">>>>> ID", id);
    cart.value = cart.value.filter((item) => item.id !== id);
  }

  return { products, fetchProductsFromDB, cart, addToCart, removeFromCart };
});
