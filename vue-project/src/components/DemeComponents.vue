<script setup>
defineProps({
  data: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ data }}</h1>
  </div>
</template>

<style scoped></style>
