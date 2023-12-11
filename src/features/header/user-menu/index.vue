<script setup lang="ts">
import Avatar from '@/shared/avatar/'
import Typography from '@/shared/typography/'
import Button from '@/shared/button/'
import Icon from '@/shared/icon/'

interface Props {
  data: {
    avatar: string
    name: string
    menu: any[]
  }
}

const { data } = defineProps<Props>()
</script>

<template>
  <div class="user-menu">
    <Avatar :img="data.avatar" />
    <Typography tagName="span" size="s">{{ data.name }}</Typography>
    <Button decoration="none">
      <template v-slot:leftIcon>
        <Icon type="chevron" />
      </template>
    </Button>
  </div>
</template>

<style scoped>
.user-menu {
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  gap: 10px;
  padding: 8px;
}
</style>
