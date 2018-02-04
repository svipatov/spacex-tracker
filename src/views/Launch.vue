<template>
  <div>
    {{getLaunch}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['flight'],
  name: 'launch',
  computed: {
    ...mapGetters(['getLaunch'])
  },
  beforeMount () {
    const hasLaunches = this.$store.state.launches.length > 0

    !hasLaunches && this.$store.dispatch('FETCH_LAUNCH', this.flight)
  }
}
</script>

<style lang="scss">
</style>