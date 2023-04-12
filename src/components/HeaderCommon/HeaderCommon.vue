<template>
  <header class="header">
    <div class="header__content container">
      <div class="header__logo-wrapper"><VIcoSvg class="header__logo" name="logo-header" /></div>
      <Transition>
        <nav v-show="isNavPanelShowed || isNavExtended" class="header__main-nav">
          <ul class="header__nav-links">
            <li class="header__nav-link"><a href="#">Преимущества Tele2</a></li>
            <li class="header__nav-link"><a href="#">Тарифы</a></li>
            <li class="header__nav-link"><a href="#">Акции и спецпредложения</a></li>
            <li class="header__nav-link"><a href="#">Промотариф Tele2</a></li>
            <li class="header__nav-link"><a href="#">Технология eSIM</a></li>
            <li class="header__nav-link"><a href="#">Подключение нового абонента</a></li>
          </ul>

          <HeaderCommonLocation class="header__location-sm" /></nav
      ></Transition>
      <HeaderCommonLocation class="header__location-lg" />
      <div class="header__controls">
        <div class="header__notification-box">
          <div class="header__notification-new">
            <div class="header__notification-circle"></div>
          </div>
          <VIcoSvg class="header__bell" name="notification-bell" />
        </div>

        <button
          :class="{ 'header__btn-menu_opened': isNavPanelShowed }"
          @click="isNavPanelShowed = !isNavPanelShowed"
          class="header__btn-menu"
          type="button"
        >
          <i class="header__btn-bars" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderCommonLocation from '@/components/HeaderCommon/HeaderCommonLocation'

export default {
  name: 'HeaderCommon',
  props: {
    msg: String,
  },
  components: {
    HeaderCommonLocation,
  },
  data() {
    return {
      isNavPanelShowed: false,
      isNavExtended: false,
    }
  },
  methods: {
    onResize() {
      this.isNavExtended = document.documentElement.clientWidth >= 992
    },
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  position: fixed;
  background: #1f2229;
  width: 100%;

  &__content {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    @media (min-width: 992px) {
      height: 40px;
    }
  }

  &__main-nav {
    display: flex;
    position: fixed;
    top: 45px;
    left: 0;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    padding: 1.5rem 4.8% 0 4.8%;
    width: 100%;
    height: calc(100% - 45px);
    @media (min-width: 992px) {
      position: absolute;
      top: 40px;
      padding: 0.83rem 0 0 0;
    }
  }
  &__nav-links {
    display: flex;
    position: relative;
    flex-direction: column;
    gap: 24px 0;
    color: #959597;
    font-weight: 700;
    font-size: 1rem;
    line-height: 138%;

    @media (min-width: 992px) {
      flex-direction: row;
      gap: 0 18px;
      font-weight: 400;
      font-size: 0.875rem;
    }
    &::after {
      display: none;
      position: absolute;
      bottom: 0px;
      left: 0;
      background: #ededed;
      width: 100%;
      height: 1px;
      content: '';
      @media (min-width: 992px) {
        display: block;
      }
    }
  }
  &__nav-link {
    position: relative;
    cursor: pointer;
    &:hover {
      color: #1f2229;
    }

    @media (min-width: 992px) {
      padding-bottom: 12px;
    }

    &::after {
      position: absolute;
      right: 0;
      bottom: -8px;
      left: 0;
      background: #ededed;
      height: 1px;
      content: '';
      @media (min-width: 992px) {
        bottom: 0;
        z-index: 2;
      }
    }
    &:hover::after {
      background: #1f2229;
      height: 2px;
    }
  }
  &__location-sm {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 56px;
    @media (min-width: 992px) {
      display: none;
    }
  }
  &__location-lg {
    display: none;
    @media (min-width: 992px) {
      display: flex;
    }
  }
  &__controls {
    display: flex;
  }
  &__logo-wrapper {
    @media (min-width: 992px) {
      flex: 1 0;
    }
  }
  &__logo {
    cursor: pointer;
    width: 48px;
    height: 18px;
    @media (min-width: 992px) {
      width: 59px;
      height: 22px;
    }
  }
  &__notification-box {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 27px;
    height: 27px;
  }
  &__notification-new {
    display: flex;
    position: absolute;
    top: 3px;
    right: 4px;
    justify-content: center;
    align-items: center;
    z-index: 2;
    animation: zoom 3s 3s both infinite;

    border-radius: 50%;
    background-color: #1f2229;
    width: 10px;
    height: 10px;
    overflow: hidden;
  }
  &__notification-circle {
    border-radius: 50%;
    background: #3fcbff;
    width: 6px;
    height: 6px;
  }
  &__bell {
    animation: bell 1s 1s both infinite;
    width: 18px;
    height: 19px;
  }
  &__btn-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease;
    cursor: pointer;
    margin-left: 1.125rem;
    border: none;
    background-color: transparent;
    padding-right: 0;
    min-height: 14px;
    color: inherit;

    @media (min-width: 992px) {
      display: none;
    }
    &:focus {
      outline: none;
    }

    &__text {
      margin-left: 10px;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 1;
    }

    &_opened {
      .header__btn-bars {
        background-color: transparent;

        &:before {
          transform: rotate(45deg);
        }

        &:after {
          transform: rotate(-45deg);
        }
      }
    }
  }
  &__btn-bars {
    display: block;
    position: relative;
    transition: 0.3s;
    background-color: #ffffff;
    width: 18px;
    height: 2px;

    &:before,
    &:after {
      display: block;
      position: absolute;
      left: 0;
      transition: 0.3s;
      background-color: #ffffff;
      width: 100%;
      height: 100%;
      content: '';
    }

    &:before {
      transform: translate(0, -6px);
    }

    &:after {
      transform: translate(0, 6px);
    }
  }
}

@keyframes bell {
  0% {
    transform: rotate(30deg);
  }
  10% {
    transform: rotate(60deg);
  }
  20% {
    transform: rotate(30deg);
  }
  80% {
    transform: rotate(30deg);
  }
  90% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(30deg);
  }
}

@keyframes zoom {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  10% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
</style>
