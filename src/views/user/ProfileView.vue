<script setup>
import { onMounted, ref } from "vue"
import UserLayout from "@/layouts/UserLayout.vue"

const profileImageUrl = ref(
  "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
)
const email = ref("")
const name = ref("")

const handleFileUpload = (event) => {
  const files = event.target.files[0]

  if (files) {
    const reader = new FileReader()
    reader.onload = (e) => {
      profileImageUrl.value = e.target.result
    }
    reader.readAsDataURL(files)
  }
}

const updateProfile = () => {
  const profileData = {
    imageUrl: profileImageUrl.value,
    email: email.value,
    name: name.value,
  }
  localStorage.setItem("profile-data", JSON.stringify(profileData))
}

onMounted(() => {
  let profileData = localStorage.getItem("profile-data")
  if (profileData) {
    profileData = JSON.parse(profileData)
    profileImageUrl.value = profileData.imageUrl
    email.value = profileData.email
    name.value = profileData.name
  }
})
</script>

<template>
  <UserLayout>
    <div class="max-w-3xl mx-auto border border-base-200 shadow-xl p-8 my-4">
      <div class="text-2xl font-bold">Your profile</div>

      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center">
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img class="h-56" :src="profileImageUrl" />
            </div>
          </div>
          <input type="file" @change="handleFileUpload" />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            v-model="email"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input
            v-model="name"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full"
          />
        </div>
        <button @click="updateProfile" class="btn btn-neutral w-full mt-4">
          Update profile
        </button>
      </div>
    </div>
  </UserLayout>
</template>
