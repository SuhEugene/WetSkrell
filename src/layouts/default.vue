<template>
  <Navbar />
  <main>
    <div class="content">
      <slot></slot>
    </div>
    <AdStack />
  </main>
</template>
<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html {
    scrollbar-gutter: stable;
    overflow: overlay;
    &::-webkit-scrollbar {
      width: 7px;
      &-thumb { background-color: $bg-gray; }
    }
    &::-webkit-scrollbar-track { background: transparent; }
  }
  body {
    font-family: Jost, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    background-color: $bg-black;
    color: $text-gray;
  }
  a {
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6 {
    color: $text-white;
  }
  main {
    width: 946px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 34px;
  }
  
</style>