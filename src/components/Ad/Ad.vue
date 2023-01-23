<template>
  <a href="javascript:void(0)" class="promotion">
    <img class="promotion__image" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette2.wikia.nocookie.net%2Favali%2Fimages%2F6%2F65%2F1360542439.ryuujinzero_avalistudy.jpg%2Frevision%2Flatest%3Fcb%3D20140203191626&f=1&nofb=1&ipt=9cb00b5f3b99036cdb590c75a64f937838a8c670a1749977e92b98ca123d536c&ipo=images">
    <h4 class="promotion__title">Small and wet resomis are waiting for your call<br />10$/hour</h4>
  </a>
</template>
<style lang="scss">
  .promotion {
    $width: 134px;
    $px: 16px;

    max-width: $width;
    width: 134px;
    padding: 12px $px;

    color: $text-gray;
    // border: 1px solid $bg-gray;
    border-radius: 5px;

    &__image {
      max-width: $width - ($px * 2);
      height: 122px;
      border-radius: 3px;
      object-fit: cover;
      object-position: center;
      margin-bottom: 4px;
    }

    &__title {
      font-size: 11px;
      text-align: center;
    }

    cursor: pointer;
    transition: .13s box-shadow;
    &:hover {
      box-shadow: 0 0 0 1px $bg-light-gray;
    }
  }
</style>