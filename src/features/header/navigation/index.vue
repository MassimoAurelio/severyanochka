<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Typography from '@/shared/typography'
import Icon from '@/shared/icon'

interface Props {
  data: {
    label: string
    icon: string
    count: number
    link: string
  }[]
}

const { data } = defineProps<Props>()
</script>

<template>
  <nav>
    <ul>
      <li v-for="item in data" :key="item.label">
        <RouterLink :to="item.link">
          <Icon :type="item.icon" />
          <Typography tagName="span" size="xs">{{ item.label }}</Typography>
          <span>{{ item.count }}</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
