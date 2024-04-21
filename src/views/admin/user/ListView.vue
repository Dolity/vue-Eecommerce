<script setup>
import { useAdminUserStore } from "@/stores/admin/user"
import { RouterLink } from "vue-router"

import AdminLayout from "@/layouts/AdminLayout.vue"

const userStore = useAdminUserStore()

const toggleStatus = (index) => {
  const updateUser = userStore.list[index]
  updateUser.status = updateUser.status === "inactive" ? "active" : "inactive"
  userStore.updateUser(index, updateUser)
}
</script>

<template>
  <AdminLayout>
    <div class="flex items-center justify-between my-4">
      <div class="card w-full p-6 mt-2">
        <div class="text-3xl font-bold">User</div>
        <div class="divider mt-2"></div>
        <div class="h-full w-full pb-6 bg-base-100">
          <div class="overflow-x-auto">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Updated At</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in userStore.list" :key="index">
                  <td>
                    <div class="font-bold">{{ user.fullname }}</div>
                  </td>
                  <td>{{ user.role }}</td>
                  <td>
                    <div
                      class="badge"
                      :class="
                        user.status === 'active'
                          ? 'badge-success'
                          : 'badge-ghost'
                      "
                    >
                      {{ user.status }}
                    </div>
                  </td>
                  <td>{{ user.updatedAt }}</td>
                  <td>
                    <RouterLink
                      :to="{
                        name: 'admin-users-update',
                        params: { id: index },
                      }"
                    >
                      <button class="btn">Edit</button>
                    </RouterLink>
                    <button @click="toggleStatus(index)" class="btn mx-2">
                      {{ user.status === "active" ? "Disable" : "Enable" }}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </AdminLayout>
</template>
