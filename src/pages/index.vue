<template>
  <h1 style="margin-bottom: 10px;">CoolStoryBob</h1>
  <div class="posts">
    <Post v-for="n in 50"></Post>
  </div>
</template>

<style lang="scss">
  .posts {
    display: grid;
    grid-template-columns: 380px 380px;
    align-items: center;
    row-gap: 24px;
    column-gap: 16px;
  }
</style>