<!-- <script setup>
import ReactiveFundamentals from '../components/charpterOneEssentials/ReactiveFundamentals.vue'
</script> -->

<template>
  <main>
    <div>
</div>
    <div>{{ state.count }}</div>
    <button @click="increment" type="button" class="btn">Increment</button>
    <button @click="decrement" type="button" class="btn">Decrement</button>
  </main>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({ count: 0 });

    const increment = () => state.count++;
    const decrement = () => {
      if (state.count > 0) {
        state.count--;
      }
    };

    // expose the state to the template
    return {
      state,
      increment,
      decrement,
    };
  },
};
</script>

<script setup>
const html = "<p></p>";
const state = reactive({ count: 0 });

const increment = () => state.count++;
const decrement = () => {
  if (state.count > 0) {
    state.count--;
  }
};
</script>
<style lang="postcss" scoped>
.btn {
  @apply ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500;
}
</style>
