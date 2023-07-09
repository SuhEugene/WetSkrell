<template>
  <nav class="nav" id="nav-bottom">
    <div class="nav__content">
      <router-link class="nav__link" to="/">
        <div class="nav__link__icon"><Icon size="24" name="mdi:hot" /></div>
        <div class="nav__link__text">Популярное</div>
      </router-link>
      <router-link class="nav__link" to="/best">
        <div class="nav__link__icon"><Icon size="24" name="mdi:star-outline" /></div>
        <div class="nav__link__text">Лучшее</div>
      </router-link>
      <router-link class="nav__link" to="/categories">
        <div class="nav__link__icon"><Icon size="24" name="mdi:account-supervisor" /></div>
        <div class="nav__link__text">Категории</div>
      </router-link>
      <router-link class="nav__link" to="/tags">
        <div class="nav__link__icon"><Icon size="24" name="mdi:tag-outline" /></div>
        <div class="nav__link__text">Теги</div>
      </router-link>
      <router-link class="nav__link" to="/auth">
        <div class="nav__link__icon"><Icon size="24" name="mdi:login" /></div>
        <div class="nav__link__text">Вход</div>
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  .nav {
    padding: 0 46px;
    height: $nav-bottom-height;

    background: transparentize($color: $bg-dark, $amount: 0.5);
    box-shadow: $shadow-light;
    backdrop-filter: blur(8px);

    $gap: 32px;
    &__content {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &__link {
      color: $text-gray;
      width: 68px;
      // padding: 0 12px;
      text-align: center;
      padding-top: 3px;
      transition: color .13s;
      &__icon {
        margin: auto;
        width: 24px;
        height: 24px;
      }
      &__text {
        margin-top: 4px;
        font-size: 12px;
      }
      &:active { color: $text-white; }
      &--active { color: $text-white; }
    }
  }

  .nav-space {
    height: $nav-bottom-height;
    width: 100%;
    display: block;

    z-index: -1;
  }
</style>