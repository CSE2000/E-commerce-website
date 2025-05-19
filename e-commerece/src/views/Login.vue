<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-500 p-4"
  >
    <div class="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
      <h2 class="text-3xl font-bold text-center text-gray-800">Login to Your Account</h2>
      <form @submit.prevent="login" class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <button
          type="submit"
          class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition"
        >
          Login
        </button>
      </form>
      <p class="text-center text-sm text-gray-600">
        Don’t have an account?
        <router-link to="/signup" class="text-purple-600 font-medium hover:underline">
          Sign up
        </router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function login() {
  console.log(email.value, password.value)
}
</script>
