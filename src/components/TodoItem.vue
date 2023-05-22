<script setup>
defineProps(['title'])
defineEmits(['remove'])
</script>

<template>
  <li>
    {{ title }}
    <button class="btn" @click="$emit('remove')">Remove</button>
  </li>
</template>

<style lang="postcss" scoped>
.btn {
  @apply ml-3 inline-flex items-center px-4 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 m-1;
}
</style>