<template>
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
