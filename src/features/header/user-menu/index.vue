<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Avatar from '@/shared/avatar/'
import Typography from '@/shared/typography/'
import Button from '@/shared/button/'
import Icon from '@/shared/icon/'

const props = defineProps({
  store: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div :class="['user-menu', `is-open_${props.store.isOpen}`]">
    <Avatar class="user-menu__avatar" :img="props.store.avatar" @click="props.store.toggleMenu" />
    <Typography class="user-menu__name" tagName="span" size="s" @click="props.store.toggleMenu">{{
      props.store.name
    }}</Typography>
    <Button class="user-menu__button" decoration="none" @click="props.store.toggleMenu">
      <template v-slot:leftIcon>
        <Icon type="chevron" />
      </template>
    </Button>
    <ul v-if="props.store.isOpen" class="user-menu__list">
      <li v-for="item in props.store.menu" :key="item.label" class="list__item">
        <RouterLink v-if="item.link" :to="item.link" class="item__link">
          <Typography tagName="span" size="m" class="item__text">{{ item.label }}</Typography>
        </RouterLink>
        <Typography
          v-else
          tagName="span"
          size="m"
          class="item__text"
          @click="() => props.store.onClickItem(item.action)"
          >{{ item.label }}</Typography
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.user-menu {
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  grid-gap: 10px;
  padding: 8px;
  border-radius: 4px;
}

.user-menu.is-open_true {
  background-color: var(--main-surface);
  box-shadow: var(--shadow-default-s);
}

.user-menu__avatar,
.user-menu__name,
.user-menu__button {
  cursor: pointer;
}

.user-menu__list {
  display: grid;
  grid-gap: 10px;
  grid-column: 1 / 4;
}

.list__item {
  padding: 8px;
  user-select: none;
  cursor: pointer;
}

.item__link {
  text-decoration: none;
}

@media screen and (max-width: 1207px) {
  .user-menu {
    grid-template-columns: 1fr;
  }

  .user-menu__list {
    grid-column: unset;
  }

  .user-menu__name,
  .user-menu__button {
    display: none;
  }
}
</style>
