<template>
  <h1>CoolStoryBob</h1>
  <div class="posts">
    <Post v-for="n in 50"></Post>
  </div>
</template>

<style lang="scss" scoped>

  h1 {
    margin-bottom: 10px;
    margin-left: 10px;
  }
  .posts {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    row-gap: 24px;
    // column-gap: 16px;
    padding: 0 10px;
  }
</style>