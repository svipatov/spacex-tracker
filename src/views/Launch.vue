<template>
  <div v-if="launch">
    <div>{{launch.rocket.rocket_name}} launched in {{launch.launch_year}} from {{launch.launch_site.site_name_long}}.</div>
    <div>{{success}}</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['flight'],
  name: 'launch',
  computed: {
    success () {
      return this.launch.launch_success ? 'Successful' : 'Failed'
    },
    launch () {
      return this.$store.getters['launches/getLaunch'](this.flight)
    }
  },
  methods: {
    ...mapActions({
      fetchLaunch: 'launches/FETCH_LAUNCH'
    })
  },
  mounted () {
    if (!this.launch && this.flight) {
      this.fetchLaunch(this.flight)
    }
  },
  watch: {
    '$route': 'fetchLaunch'
  }
}
</script>

<style lang="scss">
</style>