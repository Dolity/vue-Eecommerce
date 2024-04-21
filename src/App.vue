<script setup>
import { RouterLink, RouterView } from "vue-router"

import { useUserCartStore } from "./stores/user/cart"
import { onMounted } from "vue"

const cartStore = useUserCartStore()

onMounted(() => {
  cartStore.loadCart()
})
</script>

<template>
  <RouterView />
</template>
