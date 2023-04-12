<template>
  <!-- emit to parent click event -->
  <img
    ref="VIcoSvg"
    :src="fullPathSvg"
    :alt="alt"
    :class="{ ico_w: width, ico_h: height }"
    @click="$emit('click')"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"
  />
  <!-- <img
    ref="VIcoSvg"
    :src="require(`@/xxx/${name}.png`)"
    :alt="alt"
    :class="{ ico_w: width, ico_h: height }"
    @click="$emit('click')"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"
  /> -->
</template>

<script>
export default {
  name: 'VIcoSvg',
  props: {
    name: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    rootPath: {
      type: String,
      default: '/ico-svg',
    },
    ext: {
      type: String,
      default: '.svg',
    },
    width: {
      type: String,
      default: null,
    },
    height: {
      type: String,
      default: null,
    },
  },
  data: () => ({}),
  computed: {
    fullPathSvg() {
      return require('@/assets' + this.rootPath + '/' + this.name + this.ext)

      //  return '/' + this.rootPath + '/' + this.name + this.ext
    },
  },
}
</script>

<style scoped lang="scss">
.ico {
  &_w {
    width: v-bind(width);
  }

  &_h {
    height: v-bind(height);
  }
}
</style>
