<template>
  <nav class="nav" id="nav-top">
    <div class="nav__side nav__side--left">
      <router-link class="nav-link" to="/popular">Популярное</router-link>
      <router-link class="nav-link" to="/best">Лучшее</router-link>
    </div>
    <a class="nav-link" id="logo" href="/">WetSkrell</a>
    <div class="nav__side nav__side--right">
      <router-link class="nav-link" to="/categories">Категории</router-link>
      <router-link class="nav-link" to="/tags">Теги</router-link>
      <div class="nav__side__spring"></div>
      <NavbarUser />
    </div>
  </nav>
  <div class="nav-space"></div>
</template>

<style lang="scss" scoped>
  .nav {
    padding: 0 46px;
    width: 100%;
    height: $nav-height;

    @include flex-center;
    flex-direction: row;

    z-index: $z-navbar;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    background: transparentize($color: $bg-dark, $amount: 0.5);
    box-shadow: $shadow-light;
    backdrop-filter: blur(8px);

    $gap: 32px;
    
    &__center { flex: 0 1; }
    &__side {
      flex: 1 1;
      height: 100%;

      @include flex-center;
      flex-direction: row;
      gap: $gap;

      &--left  { justify-content: flex-end; }
      &--right { justify-content: flex-start; }

      &__spring { flex-grow: 1; }
    }

    #logo {
        margin: 0 calc(68px - $gap);
        font-size: 1.5rem;
        color: $true-white;
      }
  }

  .nav-space {
    height: $nav-height;
    width: 100%;
    display: block;

    z-index: -1;
    margin-bottom: $nav-margin-bottom;
  }

  @media (max-width: $medium-screen) {
    .nav__side { display: none; }
  }
</style>