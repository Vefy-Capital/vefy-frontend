<template>
  <label :for="htmlFor" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    <slot></slot>
  </label>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  htmlFor: String,
})
</script>