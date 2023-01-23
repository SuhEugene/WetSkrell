<template>
  <div class="advertstack">
    <Ad />
    <Ad />
    <Ad />
  </div>
</template>
<style lang="scss">
  .advertstack {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 134px;
  }

  @media (max-width: $medium-screen) {
    .advertstack {
      flex-direction: row;
      width: 100%;
      justify-content: space-around;
      gap: 0;
      padding: 0 8px;
    }
  }
</style>