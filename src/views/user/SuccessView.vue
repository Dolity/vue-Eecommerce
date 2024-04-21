<script setup>
import { onMounted, ref } from "vue"
import UserLayout from "@/layouts/UserLayout.vue"
import { useUserCartStore } from "@/stores/user/cart"

const cartStore = useUserCartStore()
const orderData = ref({})

onMounted(() => {
  cartStore.loadCheckout()
  if (cartStore.checkout.orderNumber) {
    orderData.value = cartStore.checkout
  }
})
</script>

<template>
  <UserLayout>
    <div class="max-w-3xl mx-auto border border-base-200 shadow-xl p-8 my-4">
      <div>
        <div class="text-2xl font-bold">Your order is successful!</div>
        <div>Hi {{ orderData.name }}</div>
        <div>Get ready to receive your order</div>
      </div>

      <div class="divider"></div>
      <div class="grid grid-cols-4 gap-2">
        <div>
          <div class="font-bold">Order date</div>
          <div>{{ orderData.createdData }}</div>
        </div>

        <div>
          <div class="font-bold">Order number</div>
          <div>{{ orderData.orderNumber }}</div>
        </div>

        <div>
          <div class="font-bold">Payment method</div>
          <div>{{ orderData.paymentMethod }}</div>
        </div>

        <div>
          <div class="font-bold">Address</div>
          <div>{{ orderData.address }}</div>
        </div>
      </div>

      <div class="divider"></div>
      <div
        v-for="product in orderData.products"
        class="grid grid-cols-4 gap-2 mb-4 items-center"
      >
        <div>
          <img class="w-full" :src="product.imageUrl" />
        </div>
        <div class="font-bold">{{ product.name }}</div>
        <div>Amount: {{ product.quantity }}</div>
        <div>Total amount price: {{ product.price * product.quantity }}</div>
      </div>
      <div class="divider"></div>
      <div class="flex justify-between">
        <div class="font-bold">Total price</div>
        <div>{{ orderData.totalPrice }}</div>
      </div>
      <div class="flex justify-between mt-4">
        <div>Fee delivery</div>
        <div>{{ 0 }}</div>
      </div>
      <div class="divider"></div>
      <div class="flex justify-between">
        <div class="font-bold">Total product price</div>
        <div>{{ orderData.totalPrice }}</div>
      </div>
      <div class="divider"></div>
      <div>Thank you for your shoping</div>
    </div>
  </UserLayout>
</template>
