<template>
  <div>
    <label :for="name" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>
    <div class="mt-1">
      <Field
        :id="name"
        :name="name"
        :type="type"
        :value="modelValue"
        @input='$emit("update:modelValue", $event.target.value)'
        :autocomplete="name"
        class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  </div>
</template>

<script setup>
import { Field } from 'vee-validate';
defineProps({
  name: {
    type: String,
    default: '',
    required: true,
  },
  type: {
    type: String,
    default: 'text',
  },
  label: {
    type: String,
    default: 'Label',
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});
</script>
