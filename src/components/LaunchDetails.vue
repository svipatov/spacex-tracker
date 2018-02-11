<template>
  <div>
    <img class="patch" :src="launch.patch_logo" :alt="launch.rocket.name"/>
    <div>{{launch.rocket.name}} launched in {{launch.year}} from {{launch.launch_site.name}}.</div>
    <div>{{success}}</div>
  </div>
</template>

<script>
export default {
  props: ['launch'],
  computed: {
    success () {
      return this.launch.launch_success ? 'Successful' : 'Failed'
    }
  }
}
</script>

<style lang="scss" scoped>
.patch {
  width: 100px;
}
</style>
