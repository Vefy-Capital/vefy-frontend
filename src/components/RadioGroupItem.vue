<template>
  <input
    type="radio"
    :value="value"
    :checked="modelValue === value"
    @change="$emit('update:modelValue', value)"
    class="h-4 w-4 border-gray-300 text-black focus:ring-black"
  />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: [String, Number, Boolean],
  value: [String, Number, Boolean],
})

defineEmits(['update:modelValue'])
</script>