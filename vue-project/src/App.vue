<script setup>
import { RouterLink, RouterView } from 'vue-router'
import DemeComponents from './components/DemeComponents.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <DemeComponents />

      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
