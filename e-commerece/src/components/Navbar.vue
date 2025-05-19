<template>
  <nav class="w-full bg-black shadow-md py-2 px-4 flex items-center justify-between">
    <!-- Logo -->
    <div class="flex items-center">
      <img src="@/assets/images/White+black+logo 1.svg" alt="LogoImg" class="h-10" />
    </div>

    <!-- Search Bar -->
    <div class="flex-1 max-w-xl mx-6 relative">
      <input
        type="text"
        placeholder="I'm shopping for"
        class="w-full border border-gray-300 px-4 py-2 pl-5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <!-- <span class="pi pi-search"></span> -->
    </div>

    <!-- Right Items -->
    <div class="flex items-center space-x-6">
      <span class="text-white cursor-pointer hover:text-blue-600">My Cart</span>
      <span class="text-white cursor-pointer hover:text-blue-600">Wishlist</span>
      <div class="flex items-center space-x-2">
        <span class="text-gray-100">Hi, Priyanshu</span>
        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="Admin Avatar"
          class="w-8 h-8 rounded-full border"
        />
      </div>
    </div>
  </nav>
</template>

<script setup>
// No script logic needed yet
</script>
