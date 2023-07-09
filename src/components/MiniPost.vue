<template>
  <a class="minipost">
    <div class="minipost__header">
      <h3 class="minipost__title">Колин и Рихтер</h3>
      <div class="minipost__date">21:17 23.08.2022</div>
    </div>
    <p class="minipost__body">Захватывающая история страстной любви вульпканина и унатха.</p>
    <div class="minipost_footer"></div>
  </a>
</template>
<style scoped lang="scss">
  .minipost {
    width: 380px;
    padding: 16px 20px;

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
    &:hover {
      box-shadow: 0 0 0 1px $bg-gray-2;
    }
  }
</style>