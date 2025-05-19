<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import HomePage from '@/views/HomePage.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <!-- Sticky Navbar -->
    <header class="sticky top-0 z-50">
      <Navbar />
    </header>

    <!-- Scrollable main content -->
    <main class="flex-1 overflow-y-auto">
      <!-- Your sections go here -->
      <HomePage />
    </main>

    <!-- Sticky Footer -->
    <footer class="sticky bottom-0 z-50">
      <Footer />
    </footer>
  </div>
</template>
