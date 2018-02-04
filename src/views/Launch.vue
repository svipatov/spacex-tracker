<template>
  <div>
    <div>{{launch.rocket.rocket_name}} launched in {{launch.launch_year}} from {{launch.launch_site.site_name_long}}.</div>
    <div>{{success}}</div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  props: ['flight'],
  name: 'launch',
  data () {
    return {
      launch: this.$store.getters.getLaunch(this.flight)
    }
  },
  computed: {
    success () {
      return this.launch.launch_success ? 'Successful' : 'Failed'
    }
  },
  methods: {
    fetchLaunch () {
      const launch = this.$store.getters.getLaunch(this.flight)

      !launch && this.$store.dispatch('FETCH_LAUNCH', this.flight)
    }
  },
  created () {
    this.fetchLaunch()
  },
  watch: {
    '$route': 'fetchLaunch'
  }
}
</script>

<style lang="scss">
</style>