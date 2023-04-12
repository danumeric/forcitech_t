<template>
  <div class="location">
    <div class="location__ico"></div>
    <span class="location__text">Москва и область</span>
  </div>
</template>

<script>
export default {
  name: 'HeaderCommonLocation',
}
</script>

<style lang="scss" scoped>
.location {
  display: flex;
  align-items: center;
  gap: 0 9px;
  cursor: pointer;
  background: #f3f5f6;
  padding: 0px 0px 0px 15px;
  color: #959597;
  font-size: 1rem;
  &:hover {
    .header__location-ico {
      background: #1f2229;
    }
    .header__location-text {
      color: #1f2229;
    }
  }
  @media (min-width: 992px) {
    gap: 0 14px;
    margin-right: 2rem;
    background: #1f2229;
    padding: 0;
    color: #7c8792;
    font-size: 0.875rem;
  }
  &__ico {
    display: inline-block;
    mask: url('@/assets/ico-svg/location.svg');
    mask-size: cover;
    background: #959597;
    width: 12px;
    height: 17px;
    @media (min-width: 992px) {
      background: #7c8792;
    }
  }

  &__text {
    color: #959597;
    font-size: 1rem;
    line-height: 129%;
  }
}
</style>
