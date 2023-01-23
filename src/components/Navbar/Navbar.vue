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
</style>