<template>
  <router-view />
</template>

<style lang="scss">
@import '@/scss/null.scss';

@import '@/scss/container.scss';
@font-face {
  font-style: bold;
  font-weight: 700;
  src: local('Tele2 TextSans Web SHORT'), url('@/fonts/tele2_textsans-bold.woff2') format('woff2'),
    url('@/fonts/tele2_textsans-bold.woff') format('woff');
  font-family: 'Tele2 TextSans Web SHORT';
  font-display: auto;
  unicode-range: U+000-5FF;
}
@font-face {
  font-style: normal;
  font-weight: 400;
  src: local('Tele2 TextSans Web SHORT'),
    url('@/fonts/tele2_textsans-regular.woff2') format('woff2'),
    url('@/fonts/tele2_textsans-regular.woff') format('woff');
  font-family: 'Tele2 TextSans Web SHORT';
  font-display: auto;
  unicode-range: U+000-5FF;
}
#app {
  font-family: 'Tele2 TextSans Web SHORT', 'Roboto';
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.3s ease;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
}
</style>
