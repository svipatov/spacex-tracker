<template>
  <div>
    <img v-if="launch.patch_logo" class="patch" :src="launch.patch_logo" :alt="launch.rocket.name" />

    <h1 class="name">{{launch.rocket.name}}</h1>

    <div class="row">
      <label>Year:</label>
      <span>{{ launch.year }}</span>
    </div>

    <div class="row">
      <label>Launch site:</label>
      <span>{{ launch.launch_site.name }}</span>
    </div>

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

label {
  font-weight: bold;
}
</style>
