<template>
  <div class="nav-user">
    <router-link class="nav-link" to="/auth">Регистрация</router-link>
    <div class="nav-user__separator"></div>
    <router-link class="nav-link" to="/auth">Вход</router-link>
  </div>
</template>
<style lang="scss" scoped>
.nav-user {
  display: flex;
  align-items: center;
  &__separator {
    height: 20px;
    width: 1px;
    background: $bg-gray-2;
    margin: 0 12px;
  }
}
</style>