<script setup>
</script>

<template>
  <!-- <header class="bg-indigo-600">
  <nav class="menu" aria-label="Top">
    <div class="flex items-center justify-between w-full py-6 border-b border-indigo-500 lg:border-none">
      <div class="flex items-center">
        <div class="ml-10 space-x-8">
        <RouterLink class="menu_item" to="/">Home</RouterLink>
        <RouterLink class="menu_item" to="/reactive">Reactive</RouterLink>
        <RouterLink class="menu_item" to="/vfor">V-For</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</header> -->
  <div>
    <RouterView />
  </div>
</template>

<style lang="postcss" scoped>
.menu{
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.menu_item {
  @apply text-base font-medium text-white hover:text-indigo-50;
}
</style>
