<template>
  <launch-details v-if="launch" :launch="launch"></launch-details>
</template>

<script>
import { mapActions } from 'vuex'
import LaunchDetails from '@/components/LaunchDetails'

export default {
  props: ['flight'],
  name: 'launch',
  components: {
    LaunchDetails
  },
  computed: {
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
  }
}
</script>
