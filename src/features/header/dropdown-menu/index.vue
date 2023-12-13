<script setup lang="ts">
import { useCatalogStore } from '@/entities/catalog/model/store'
import { RouterLink } from 'vue-router'
import Container from '@/shared/container'
import Typography from '@/shared/typography'
</script>

<template>
  <div class="dropdown-menu">
    <Container>
      <ul class="dropdown-menu__list">
        <li class="list__item">
          <RouterLink to="/"></RouterLink>
          <Typography class="item__text" tagName="span" size="s" bold>Test</Typography>
        </li>
      </ul>
    </Container>
  </div>
</template>

<style scoped>
.dropdown-menu {
  position: fixed;
  top: 72px;
  left: 0;
  width: 100%;
  background-color: var(--main-surface);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
}

.dropdown-menu__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 24px;
  grid-column-gap: 40px;
  padding: 40px 0;
}
</style>
