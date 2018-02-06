<template>
  <div>
    <img class="patch" :src="launch.links.mission_patch" :alt="launch.rocket.rocket_name"/>
    <div>{{launch.rocket.rocket_name}} launched in {{launch.launch_year}} from {{launch.launch_site.site_name_long}}.</div>
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
