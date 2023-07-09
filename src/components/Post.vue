<template>
  <RouterLink to="/" class="post">
    <div class="post__header">
      <h3 class="post__title">Колин и Рихтер</h3>
      <div class="post__date">21:17 23.08.2022</div>
    </div>
    <p class="post__body">Захватывающая история страстной любви вульпканина и унатха.</p>
    <div class="post_footer"></div>
  </RouterLink>
</template>
<style scoped lang="scss">
  .post {
    color: inherit;

    width: $main-width - $main-gap - $side-width;
    padding: 16px 20px;

    background-color: $bg-dark;

    border: 1px solid $bg-gray-1;
    border-radius: 5px;
    // box-shadow: 0 0 0 1px black;

    &__header {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;

      margin-bottom: 16px;
    }
    &__title {
      color: $text-white;
      font-size: 24px;
      font-weight: bold;
    }
    &__date {
      color: $text-light;
      font-size: 14px;
    }

    cursor: pointer;
    transition: .13s box-shadow;
    transition: .13s border-color;
    // &:hover { box-shadow: 0 0 0 1px $bg-gray-2; }
    // &:active { box-shadow: 0 0 0 1px $bg-gray-4; }
    &:hover { border-color: $bg-gray-3; }
    &:active { border-color: $bg-gray-4; }
  }
</style>