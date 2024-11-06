<template>
  <h3 :class="[
    'text-lg font-semibold leading-none tracking-tight',
    className
  ]">
    <slot></slot>
  </h3>
</template>

<script setup>
defineProps({
  className: {
    type: String,
    default: ''
  }
})
</script>