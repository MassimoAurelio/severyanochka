<script setup lang="ts">
import Container from '@/shared/container/index.vue'
import Logo from '@/shared/logo/index.vue'
import Button from '@/shared/button/index.vue'
import Icon from '@/shared/icon/index.vue'
</script>

<template>
  <header class="header">
    <Container class="header_container"
      ><Logo orientation="horizontal" bgColor="white" colorful withText />
      <div>
        <Button color="secondary"><template v-slot:leftIcon><Icon type="menu" /> </template>Каталог</Button
        >
      </div></Container
    >
  </header>
</template>

<style scoped>
.header_container {
  display: flex;
  align-items: center;
  height: 72px;
}
.header {
  position: sticky;
  top: 0;
  left: 0;
  background: var(--surface);
  box-shadow: var(--shadow-defoult-s);
}
</style>
