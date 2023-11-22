<template>
  <button
    v-bind="$attrs"
    :class="getClasses"
    class="flex justify-center w-full px-4 py-2 text-sm font-medium border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    {{ label }}
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: 'Label',
    required: true,
  },
  primary: {
    type: Boolean,
    default: false,
  },
  secondary: {
    type: Boolean,
    default: false,
  },
});

const getClasses = computed(() => {
  const element = 'buttonclass';

  return {
    [`${element}--primary`]: props.primary,
    [`${element}--secondary`]: props.secondary,
  };
});
</script>

<style lang='postcss' scoped>
.buttonclass--primary {
  @apply text-white bg-indigo-600 hover:bg-indigo-700;
}

.buttonclass--secondary {
  @apply text-indigo-600 bg-indigo-100 hover:bg-indigo-200;
}
</style>
