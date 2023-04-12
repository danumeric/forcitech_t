<template>
  <div class="home-view">
    <HeaderCommon class="home-view__header" />
  </div>
</template>

<script>
import HeaderCommon from '@/components/HeaderCommon/HeaderCommon'

export default {
  name: 'HomeView',
  components: {
    HeaderCommon,
  },
  mounted() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    window.addEventListener('resize', () => {
      // We execute the same script as before
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    })
  },
}
</script>
<style lang="scss">
body {
  min-height: 100vh; /* Use vh as a fallback for browsers that do not support Custom Properties */
  min-height: calc(var(--vh, 1vh) * 100 - 43px);
  overflow-y: hidden;
}
.home-view {
  min-height: 100vh;
}
</style>
