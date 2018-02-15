<template>
  <div>
    <img v-if="launch.patch_logo" class="patch" :src="launch.patch_logo" :alt="launch.rocket.name" />
    <div>{{launch.rocket.name}} launched in {{launch.year}} from {{launch.launch_site.name}}.</div>
    <div v-if="success">{{success}}</div>
  </div>
</template>

<script>
export default {
  props: ['launch'],
  computed: {
    success () {
      if (this.launch.success === null) {
        return false
      }
      return this.launch.success ? 'Successful' : 'Failed'
    }
  }
}
</script>

<style lang="scss" scoped>
.patch {
  width: 100px;
}
</style>
