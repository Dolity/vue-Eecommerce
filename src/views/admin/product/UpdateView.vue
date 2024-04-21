<script setup>
import { reactive } from "vue"
import AdminLayout from "@/layouts/AdminLayout.vue"
import { useAdminProductStore } from "@/stores/admin/product"
import { useRouter } from "vue-router"

const formData = [
  {
    name: "Name",
    field: "name",
  },
  {
    name: "Image",
    field: "image",
  },
  {
    name: "Price",
    field: "price",
  },
  {
    name: "Quality",
    field: "quality",
  },
  {
    name: "About",
    field: "about",
  },
]

const adminProductStore = useAdminProductStore()
const router = useRouter()

const productData = reactive({
  name: "",
  image: "",
  price: 0,
  quality: 0,
  about: "",
  status: "",
})

const addProduct = () => {
  adminProductStore.addProduct(productData)
  router.push({ name: "admin-products-list" })
}
</script>

<template>
  <AdminLayout>
    <div class="shadow-xl p-8 mt-4">
      <div class="text-3xl font-bold">ADD</div>
      <div class="divider"></div>
      <div class="grid grid-cols-2 gap-2">
        <label v-for="form in formData" class="form-control w-full">
          <div class="label">
            <span class="label-text">{{ form.name }}</span>
          </div>
          <input
            type="text"
            v-model="productData[form.field]"
            class="input input-bordered w-full"
          />
        </label>
      </div>
      <div class="divider"></div>
      <div class="grid grid-cols-2 gap-2">
        <label class="form-control w-ful">
          <div class="label">
            <span class="label-text">Status</span>
          </div>
          <select v-model="productData.status" class="select select-bordered">
            <option disabled selected>choose status</option>
            <option value="open">Open</option>
            <option value="close">Close</option>
          </select>
        </label>
      </div>
      <div class="flex justify-end mt-4 gap-2">
        <button class="btn btn-ghost">Back</button>
        <button class="btn btn-neutral" @click="addProduct">Add</button>
      </div>
    </div>
  </AdminLayout>
</template>
