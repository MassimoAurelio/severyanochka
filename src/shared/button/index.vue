<script setup lang="ts">
import Typography from '@/shared/typography/index.vue'
interface Props {
  color?: 'primart' | 'secondary' | 'greyscale' | 'error'
  decoration?: 'default' | 'outline' | 'none'
  size?: 'L' | 'M' | 'S'
  disabled?: boolean
}

const props = defineProps<Props>()
const { color = 'primary', decoration = 'default', size = 'M', disabled = false } = props

const classes = ['button', `size_${size}`, `decoration_${decoration}`, `color_${color}`]
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <slot name="leftIcon"> </slot>
    <Typography tagName="p" size="s"><slot> </slot></Typography>
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  border: none;
  border-radius: 4px;
}
.button.size_M {
  grid-gap: 8px;
  padding: 8px;
}

.button.color_secondart{
  background-color: var(--main-secondary);
}
</style>