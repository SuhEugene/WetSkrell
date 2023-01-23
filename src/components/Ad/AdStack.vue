<template>
  <div class="ad_stack">
    <Ad />
    <Ad />
    <Ad />
  </div>
</template>
<style lang="scss">
  .ad_stack {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 134px;
    position: sticky;
    top: $nav-height;
  }
</style>