<template>
  <div class="nav-user">
    <router-link class="nav-link" to="/tags">Регистрация</router-link>
    <div class="nav-user__separator"></div>
    <router-link class="nav-link" to="/tags">Вход</router-link>
  </div>
</template>
<style lang="scss" scoped>
.nav-user {
  display: flex;
  align-items: center;
  &__separator {
    height: 20px;
    width: 1px;
    background: $bg-light-gray;
    margin: 0 12px;
  }
}
</style>