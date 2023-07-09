<template>
  <Navbar />
  <main>
    <div class="content">
      <slot></slot>
    </div>
    <AdStack />
  </main>
  <!-- <div class="text">
    <p v-for="i in 30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ratione dolorum, ipsam, exercitationem, officia odit natus rerum numquam non corrupti id. At sint voluptas veniam perspiciatis. Illum impedit quidem quod.</p>
  </div> -->
</template>
<style lang="scss">
  @import "~/assets/normalize.css";
  * {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }
  html, body {
    height: 100%;
  }
  html {
    max-width: 100vw;

    // scrollbar-gutter: stable;
    overflow: overlay;
    
    box-sizing: border-box;
  }
  body {
    font-family: Jost, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    background-color: $bg-black;
    color: $text-gray;
    overflow-x: hidden;
  }
  #__nuxt { min-height: 100%; }

  ::-webkit-scrollbar {
    width: 8px;
    &-thumb {
      background-color: $bg-gray-1;
      &:hover { background-color: $bg-gray-2; }
    }
  }
  ::-webkit-scrollbar-track { background: transparent; }

  a {
    text-decoration: none;
  }
  h1, h2, h3, h4, h5, h6 {
    color: $text-white;
  }


  main {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: $main-gap;
  }

  // .content {
  //   display: flex;
  //   flex-direction: column;
  //   order: 1;
  // }
  // .advertstack { order: 2; }
  
  // @media (max-width: $medium-screen) {
  //   main { flex-direction: column; }
  //   .advertstack { order: 1; }
  //   .content { order: 2; }
  // }
  
</style>