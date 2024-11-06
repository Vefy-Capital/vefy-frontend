<template>
    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    />
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    modelValue: String,
    type: {
      type: String,
      default: 'text',
    },
  })
  
  defineEmits(['update:modelValue'])
  </script>