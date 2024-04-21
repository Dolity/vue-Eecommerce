<script setup>
import { useRouter } from "vue-router"
import UserLayout from "@/layouts/UserLayout.vue"
import Product from "@/components/Product.vue"

import { useUserProductStore } from "@/stores/user/product"
import { useUserCartStore } from "@/stores/user/cart"

const router = useRouter()
const productStore = useUserProductStore()
const cartStore = useUserCartStore()

const addToCart = (product) => {
  cartStore.addToCart(product)
  router.push({ name: "cart" })
}
</script>

<template>
  <UserLayout>
    <div class="hero min-h-96 bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello DLT Shop</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>

    <!-- Product shelf -->
    <Product :products="productStore.list" :addToCart="addToCart"> </Product>
  </UserLayout>
</template>
