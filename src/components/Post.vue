<template>
  <a class="post">
    <div class="post__header">
      <h3 class="post__title">Колин и Рихтер</h3>
      <div class="post__date">21:17 23.08.2022</div>
    </div>
    <p class="post__body">Захватывающая история страстной любви вульпканина и унатха.</p>
    <div class="post_footer"></div>
  </a>
</template>
<style scoped lang="scss">
  .post {
    width: 380px;
    padding: 16px 20px;

    border: 1px solid $bg-gray;
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
    &:hover {
      box-shadow: 0 0 0 1px $bg-light-gray;
    }
  }
</style>