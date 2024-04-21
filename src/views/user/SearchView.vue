<script setup>
import { onMounted, ref, computed, watch } from "vue"
import { useRouter, useRoute } from "vue-router"

import UserLayout from "@/layouts/UserLayout.vue"
import Product from "@/components/Product.vue"

import { useUserProductStore } from "@/stores/user/product"
import { useUserCartStore } from "@/stores/user/cart"

const route = useRoute()
const router = useRouter()

const productStore = useUserProductStore()
const cartStore = useUserCartStore()

const searchText = ref("")

onMounted(() => {
  if (route.query.q) {
    searchText.value = route.query.q
  }
})

watch(
  () => route.query.q,
  (newSearchText) => {
    searchText.value = newSearchText
  },
  { immediate: true }
)

const filterProduct = computed(() => {
  return productStore.filterProduct(searchText.value)
})

const addToCart = (product) => {
  cartStore.addToCart(product)
  router.push({ name: "cart" })
}
</script>

<template>
  <UserLayout>
    <div class="text-3xl m-4">
      Search: <b>{{ searchText }}</b>
    </div>
    <Product :products="filterProduct" :addToCart="addToCart"> </Product>
  </UserLayout>
</template>
