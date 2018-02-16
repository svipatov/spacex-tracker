<template>
  <div>
    <img v-if="launch.patch_logo" class="patch" :src="launch.patch_logo" :alt="launch.rocket.name" />

    <h1 v-if="launch.rocket" class="name">{{launch.rocket.name}}</h1>

    <div v-if="launch.year" class="row">
      <label>Year:</label>
      <span>{{ launch.year }}</span>
    </div>

    <div class="row">
      <label>Launch site:</label>
      <span>{{ siteName }}</span>
    </div>

    <div v-if="success">{{success}}</div>
  </div>
</template>

<script>
/**
* Component that shows a specific launch information
*/
export default {
  name: 'LaunchDetails',
  props: {
    /**
    * The launch object containing all the information
    **/
    launch: {
      type: Object,
      required: true
    }
  },
  computed: {
    success () {
      if (this.launch.success === null || this.launch.success === undefined) {
        return false
      }
      return this.launch.success ? 'Successful' : 'Failed'
    },
    siteName () {
      if (!this.launch || !this.launch.launch_site) {
        return 'No launch site'
      }
      return this.launch.launch_site
    }
  }
}
</script>

<style lang="scss" scoped>
.patch {
  width: 100px;
}

label {
  font-weight: bold;
}
</style>
