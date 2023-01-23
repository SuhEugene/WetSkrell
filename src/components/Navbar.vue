<template>
  <nav>
    <a href="/popular">Популярное</a>
    <a href="/best">Лучшее</a>
    <a id="logo" href="/">WetSkrell</a>
    <a href="/categories">Категории</a>
    <a href="/tags">Теги</a>
  </nav>
  <div class="nav-space"></div>
</template>

<style lang="scss">
   nav {
    $gap: 32px;

    width: 100%;
    height: $nav-height;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    z-index: $z-navbar;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    gap: $gap;
    background: $bg-dark;
    box-shadow: $shadow-light;
    & > a {
      transition: .13s color;

      font-weight: $font-bold;
      color: $text-gray;
      &#logo {
        margin: 0 calc(68px - $gap);
        font-size: 1.5rem;

        color: #FFF;
      }
      &:hover { color: $text-white; }
    }
  }
  .nav-space {
    height: $nav-height;
    width: 100%;
    z-index: -1;
    display: block;
    margin-bottom: $nav-margin-bottom;
  }
</style>