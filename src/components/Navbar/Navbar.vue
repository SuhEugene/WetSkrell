<template>
  <NavbarTop />
  <NavbarBottom />
</template>

<style lang="scss">
  .nav-link {
    transition: .13s color;

    font-weight: $font-bold;
    color: $text-gray;
    &:hover { color: $text-white; }
    &:active { color: $true-white;}

    #nav-top & {
      @include flex-center;
      height: 100%;
    }
  }

  .nav {
    @include flex-center;
    flex-direction: row;

    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: $z-navbar;
  }

  #nav-bottom { display: none; }
  @media (max-width: $medium-screen) {
    #nav-bottom { display: flex; }
  }
</style>