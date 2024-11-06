<template>
    <button
      :class="[
        'px-4 py-2 rounded-md text-sm font-medium transition-colors',
        variant === 'default' ? 'bg-black text-white hover:bg-black/90' : '',
        variant === 'outline' ? 'border border-gray-300 hover:bg-gray-100' : '',
        variant === 'ghost' ? 'hover:bg-gray-100' : '',
        variant === 'secondary' ? 'bg-gray-100 text-gray-900 hover:bg-gray-200' : '',
      ]"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  import { defineProps } from 'vue'
  
  defineProps({
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'outline', 'ghost', 'secondary'].includes(value),
    },
  })
  </script>