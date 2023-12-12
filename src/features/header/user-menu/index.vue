<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Avatar from '@/shared/avatar/'
import Typography from '@/shared/typography/'
import Button from '@/shared/button/'
import Icon from '@/shared/icon/'

interface Props {
  data: {
    avatar: string
    name: string
    menu: { label: string; link: string; action: string }[]
  }
}

const { data } = defineProps<Props>()

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div :class="['user-menu', isOpen && `is-open_${isOpen}`]">
    <Avatar class="user-menu_avatar" :img="data.avatar" @click="toggleMenu" />
    <Typography class="user-menu_name" tagName="span" size="s" @click="toggleMenu">{{
      data.name
    }}</Typography>
    <Button class="user-menu_button" decoration="none" @click="toggleMenu">
      <template v-slot:leftIcon>
        <Icon type="chevron" />
      </template>
    </Button>
    <ul v-if="isOpen" class="user-menu__list">
      <li v-for="item in data.menu" :key="item.label" class="item__item">
        <RouterLink v-if="item.link" :to="item.link" class="item__link"
          ><Typography tagName="span" size="m" class="item__text">{{
            item.label
          }}</Typography></RouterLink
        >
        <Typography v-else tagName="span" size="m" class="item__text">{{ item.label }}</Typography>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.user-menu {
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  gap: 10px;
  padding: 8px;
  position: relative;
  
}

.user-menu_avatar,
.user-menu_name,
.user-menu_button {
  cursor: pointer;
}

.user-menu__list {
  display: grid;
  grid-gap: 10px;
  position: absolute;
  top: 100%;
  left: 0;
  grid-column: 1/4;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.item__item {
  padding: 8px;
}

.item__link {
  text-decoration: none;
}
</style>
