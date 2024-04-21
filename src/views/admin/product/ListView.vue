<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue"

import { useAdminProductStore } from "@/stores/admin/product"

import Edit from "@/components/icons/Edit.vue"
import Trash from "@/components/icons/Trash.vue"
import { RouterLink } from "vue-router"

const adminProductStore = useAdminProductStore()

const deleteProduct = (product) => {
  adminProductStore.removeProduct(product.id)
}
</script>

<template>
  <AdminLayout>
    <div class="flex items-center justify-between my-4">
      <div class="card w-full p-6 mt-2">
        <div class="flex justify-between">
          <div class="text-3xl font-bold">Product</div>
          <RouterLink
            :to="{ name: 'admin-products-create' }"
            class="btn btn-neutral"
            >Add New</RouterLink
          >
        </div>

        <div class="divider mt-2"></div>
        <div class="overflow-x-auto">
          <table class="table">
            <!-- head -->
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Quality</th>
                <th>Status</th>
                <th>Update At</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <!-- row 1 -->
              <tr v-for="product in adminProductStore.list">
                <th>{{ product.name }}</th>
                <td>
                  <img :src="product.image" class="w-12" />
                </td>
                <td>{{ product.price }}</td>
                <td>{{ product.quality }} / {{ product.remainQuantity }}</td>

                <td>
                  <div class="badge badge-success">
                    {{ product.status }}
                  </div>
                </td>

                <td>{{ product.updateAt }}</td>
                <td>
                  <div class="flex gap-2">
                    <div class="btn btn-ghost">
                      <Edit />
                    </div>
                    <div @click="deleteProduct" class="btn btn-ghost">
                      <Trash />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>
