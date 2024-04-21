<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue"

import { useAdminOrderStore } from "@/stores/admin/order"

import Edit from "@/components/icons/Edit.vue"
import Trash from "@/components/icons/Trash.vue"
import { RouterLink } from "vue-router"

const adminOrderStore = useAdminOrderStore()
</script>

<template>
  <AdminLayout>
    <div class="flex items-center justify-between my-4">
      <div class="card w-full p-6 mt-2">
        <div class="flex justify-between">
          <div class="text-3xl font-bold">Order</div>
        </div>

        <div class="divider mt-2"></div>
        <div class="overflow-x-auto">
          <table class="table">
            <!-- head -->
            <thead>
              <tr>
                <th>customer Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Update At</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr v-for="(order, index) in adminOrderStore.list">
                <th>{{ order.customerName }}</th>
                <td>{{ order.totalPrice }}</td>
                <td>{{ order.status }}</td>
                <td>{{ order.updatedAt }}</td>
                <td>
                  <RouterLink
                    :to="{ name: 'admin-orders-detail', params: { id: index } }"
                    class="btn"
                    >SEE DETAIL</RouterLink
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>
