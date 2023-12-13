<script setup lang="ts">
import Typography from '@/shared/typography'
import { useSlots } from 'vue'
interface Props {
  color?: 'primary' | 'secondary' | 'greyscale' | 'error'
  decoration?: 'default' | 'outline' | 'none'
  size?: 'S' | 'M' | 'L'
  disabled?: boolean
}

const props = defineProps<Props>()
const slots = useSlots()
const { color = 'primary', decoration = 'default', size = 'M', disabled = false } = props

const classes = ['button', `size_${size}`, `decoration_${decoration}`, `color_${color}`]
</script>

<template>
  <button :class="classes" :disabled="disabled">
    <slot name="leftIcon"> </slot>
    <Typography v-if="slots.default" class="button__text" tagName="p" size="s"
      ><slot> </slot
    ></Typography>
    <slot name="rightIcon"> </slot>
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  border: none;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
}

.button.size_S {
  grid-gap: 4px;
  padding: 4px;
}

.button.size_M {
  grid-gap: 8px;
  padding: 8px;
}

.button.size_L {
  grid-gap: 12px;
  padding: 12px;
}

.button.color_primary {
  background-color: var(--main-secondary);
  color: var(--main-on-secondary);
}
.button.color_secondary {
  background-color: var(--main-primary);
  color: var(--main-on-secondary);
}

.button__text {
  width: 100%;
  text-align: center;
  color: var(--main-surface);
}

.button.decoration_none {
  background-color: unset;
  border-color: unset;
}
.button.decoration_none:deep(path) {
  fill: var(--main-on-surface);
}
</style>
